import { useState, useRef, useEffect } from 'react';
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { app } from '../../firebase'
import axios from 'axios'; 
import './Chatbot.css';
import logo from '../../asset/logo-dot-white@4x.png'
import send from '../../asset/Send.png'
import mode from '../../asset/day-and-night (1).png'

const db = getFirestore(app);

const Chatbot = ({ darkMode, setDarkMode }) => {
  const [messages, setMessages] = useState([]);
  const [userMessage, setUserMessage] = useState("");
  const tags = ['Insight report', 'Billboards', 'Road Segments', 'Vehicle Data', 'Pedestrian', 'etc' ]
  const conversationRef = useRef(null);
  const [allowTagClick, setAllowTagClick] = useState(true);
  // const [audioList, setAudioList] = useState([]);
  const [typingIntervalId, setTypingIntervalId] = useState(null);
  
  const sendMessage = async () => {
    if (!userMessage) {
      return;
    }
    const userMessageText = userMessage
    const sendButton = document.querySelector('.send-button')
    sendButton.classList.add('inactive')
    setUserMessage("");
    try {
      const userMessageData = {
        msg_text: userMessageText,
        type: 'user'
      };
      setMessages(prevMessages => [...prevMessages, userMessageData]);
  
      const response = await axios.post('https://celestial-tarot-api-505d7e2bd446.herokuapp.com/sendMsgToOpenAI', {
        userMessage: userMessageText,
      }, {
        timeout: 60000, 
      });
  
      if (response.status === 200) { 
        const data = response.data;
        if (data.generatedResponse) {
          handleTTS(data.generatedResponse);
        }
          const botMessageData = {
            msg_text: "2", 
            type: 'bot',
            timestamp: serverTimestamp()
          };

          const messageData = {
            msg_user: userMessageText,
            msg_bot: data.generatedResponse,
            timestamp: serverTimestamp()
          };
      
        await addDoc(collection(db, "messages"), messageData);
        
        setMessages(prevMessages => [...prevMessages, botMessageData]);
        const botMessage = data.generatedResponse; 
        let index = 0;
        const typingInterval = setInterval(() => {
          if (index < botMessage.length) {
            const botMessageWithTyping = botMessage.substring(0, index + 1);
            const updatedBotMessageData = {
              ...botMessageData,
              msg_text: botMessageWithTyping
            };
            setMessages(prevMessages => {
              const updatedMessages = [...prevMessages];
              updatedMessages[prevMessages.length - 1] = updatedBotMessageData;
              return updatedMessages;
            });
            index++;
          } else {
            clearInterval(typingInterval);
            sendButton.classList.remove('inactive');
          
          }
        }, 25); 

        setTypingIntervalId(typingInterval);
      } else {
        console.error('Error making a request to the backend API');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  

  const handleTagClick = async (e) => {
    const tags = document.querySelectorAll('.tag')
    e.target.classList.add('selected')
    setAllowTagClick(false)
    tags.forEach(tag => {
      tag.classList.add('inactive')
    })
    const userMessageText = "Tell me about " + e.target.innerText.toLowerCase() + '.';
    const sendButton = document.querySelector('.send-button')
    sendButton.classList.add('inactive')
    setUserMessage("");
    try {
      const userMessageData = {
        msg_text: userMessageText,
        type: 'user'
      };
      setMessages(prevMessages => [...prevMessages, userMessageData]);
  
      const response = await axios.post('https://celestial-tarot-api-505d7e2bd446.herokuapp.com/sendMsgToOpenAI', {
        userMessage: userMessageText,
      }, {
        timeout: 60000, 
      });
  
      if (response.status === 200) { 
        const data = response.data;
        if (data.generatedResponse) {
          handleTTS(data.generatedResponse);
        }
          const botMessageData = {
            msg_text: "2", 
            type: 'bot',
            timestamp: serverTimestamp()
          };

          const messageData = {
            msg_user: userMessageText,
            msg_bot: data.generatedResponse,
            timestamp: serverTimestamp()
          };

        await addDoc(collection(db, "messages"), messageData);

       setMessages(prevMessages => [...prevMessages, botMessageData]);
        const botMessage = data.generatedResponse; 
        let index = 0;
        const typingInterval = setInterval(() => {
          if (index < botMessage.length) {
            const botMessageWithTyping = botMessage.substring(0, index + 1);
            const updatedBotMessageData = {
              ...botMessageData,
              msg_text: botMessageWithTyping
            };
            setMessages(prevMessages => {
              const updatedMessages = [...prevMessages];
              updatedMessages[prevMessages.length - 1] = updatedBotMessageData;
              return updatedMessages;
            });
            index++;
          } else {
            clearInterval(typingInterval);
            sendButton.classList.remove('inactive')
            tags.forEach(tag => {
              tag.classList.remove('inactive')
            })
            setAllowTagClick(true)
            e.target.classList.remove('selected')
          }
        }, 25); 

        setTypingIntervalId(typingInterval);
      } else {
        console.error('Error making a request to the backend API');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  const now = new Date();
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const day = days[now.getDay()];
  const hours = now.getHours() % 12 || 12; 
  const minutes = now.getMinutes();
  const amPm = now.getHours() >= 12 ? 'PM' : 'AM';

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      sendMessage()
    }
  }

  const scrollToBottom = () => {
    if (conversationRef.current) {
      conversationRef.current.scrollTop = conversationRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // const handleGoogleTTS = async (text) => {
  //   try {
  //     const baseURL = 'http://localhost:3010';
  //     const response = await axios.post(`${baseURL}/synthesize`, {
  //       text,
  //     });
  //     const audioSrc = `data:audio/mp3;base64, ${response.data.audioContent}`;
  //     setAudioList(prevAudioList => [...prevAudioList, audioSrc]);
  //   } catch (error) {
  //     console.log('error')
  //   }
  // };  

  const handleTTS = async (text) => {
    try {
      const response = await fetch('https://ooh-gpt-2-0-tts-openai.onrender.com/synthesize', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text }),
      });
  
      if (!response.ok) {
        throw new Error('Failed to generate speech');
      }
  
      const audioBlob = await response.blob();
      const audioUrl = URL.createObjectURL(audioBlob);
      const audio = new Audio(audioUrl);
      audio.play();
    } catch (error) {
      console.error('Error:', error.message);
    }
  };
  
  

  useEffect(() => {
    return () => {
      clearInterval(typingIntervalId);
    };
  }, [typingIntervalId]);

  // let botMessageIndex = 0;

  return (
    <div className='chatbot'>
      <div className={`chatbox ${darkMode ? 'dark' : ''}`}>
        <div className="header">
          <img src={logo} alt="" />
        </div>
        <div className="conversation" ref={conversationRef}>
          <div className="timestamp">
            {day.slice(0,3)} {hours}:{minutes < 10 ? '0' + minutes : minutes} {amPm}
          </div>
          <div className='bot'>
            Hello, how can I help you?
          </div>
          <div className="suggestion">
            <p>Other people are looking for... </p>
            <div>
              {tags.map((tag, index) => (
                <p className='tag' key={index} onClick={allowTagClick ? handleTagClick : () => {}}>{tag}</p>
              ))}
            </div>
          </div>
          {messages.map((msg, index) => (
            <div key={index} className={msg.type}>
              {msg.msg_text}
              {/* {msg.type === 'bot' && (
                <audio autoPlay className='tts' controls src={audioList[botMessageIndex++]} type="audio/mp3" ></audio> 
              )} */}
            </div>
          ))}
        </div>
        <div className="user-input">
          <img src={mode} onClick={() => setDarkMode(!darkMode)}  alt=''/>
          <input
            placeholder='Type your message here...'
            value={userMessage}
            onChange={e => setUserMessage(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button onClick={sendMessage} className='send-button'><img src={send} alt="" /></button>
        </div>
      </div>    
    </div>
  );
}

export default Chatbot;
