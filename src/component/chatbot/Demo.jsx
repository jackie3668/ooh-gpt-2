import React from 'react';
import { useState, useRef, useEffect } from 'react';
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { app } from '../../firebase'
import axios from 'axios'; 
import './Billbot.css'
import reports from '../../data/reports'
import load from '../../asset/COMMB Loading (1).gif'
import logo from '../../asset/logo-dot-white@4x.png'
import send from '../../asset/Send.png'
import mode from '../../asset/day-and-night (1).png'
import sound from '../../asset/sound.png'
import darkSound from '../../asset/dark-sound.png'
import search from '../../asset/search-interface-symbol.png'

const db = getFirestore(app);

const Demo = ({ darkMode, setDarkMode }) => {
  // State variables
  const [answer, setAnswer] = useState('');
  const [messages, setMessages] = useState([]);
  const [pdfMessages, setpdfMessages] = useState([])
  const [pdfMessagesText, setpdfMessagesText] = useState([])
  const [userMessage, setUserMessage] = useState("");
  const [lang, setLang] = useState("EN")
  const [ttsEnabled, setTTSEnabled] = useState(false);
  const tags = ['Insight Report', 'Billboards', 'Road Segments', 'Vehicle Data', 'Pedestrian', 'etc' ]
  const tagsFR = ["Rapport D'Analyse",  "Panneaux Publicitaires",  "Segments De Route",  "Données Véhicule",  "Piéton",  "Etc"]
  const conversationRef = useRef(null);
  const [allowTagClick, setAllowTagClick] = useState(true);
  // const [audioList, setAudioList] = useState([]);
  const [typingIntervalId, setTypingIntervalId] = useState(null);
  // eslint-disable-next-line
  const [pdfTypingInterval, setpdfTypingIntervalId] = useState(null);
  const [timeStamp, setTimeStamp] = useState(null)
  const [currentAudio, setCurrentAudio] = useState(null);

  const questionAnswerData = [
    {
      question: "Welcome, Billbot! Can you tell us a little about what OOH advertising is?",
      answer: "Absolutely! OOH, or Out-of-Home advertising, refers to any visual advertising media found outside of the home. This includes billboards, transit ads, street furniture, and more. It’s all about reaching people when they’re on the go."
    },
    {
      question: "That sounds fascinating! How is AI changing the landscape of OOH advertising?",
      answer: "AI is revolutionizing OOH advertising by making it more dynamic and targeted. For instance, AI can analyze traffic patterns and demographic data to optimize ad placements. It can also adjust digital billboards in real-time based on weather conditions or current events, ensuring the right message reaches the right audience at the right time."
    },
    {
      question: "Can you give us an example of AI application in OOH advertising?",
      answer: "Certainly! One exciting application is using AI to measure ad visibility. By analyzing data from cameras and sensors, AI can determine how many people see an ad and for how long. This helps advertisers understand the impact of their campaigns and make data-driven decisions to improve them."
    },
    {
      question: "That’s impressive! What can participants expect to learn from the course you’re part of?",
      answer: "Participants will delve into how AI technologies like machine learning, computer vision, and big data analytics are transforming OOH advertising. Plus, they’ll explore other key aspects of OOH advertising through various modules taught by industry experts."
    },
    {
      question: "Thank you, Billbot! We’re excited to learn more.",
      answer: "My pleasure! I look forward to helping everyone unlock the potential of OOH advertising. Join us and discover how to make your advertising smarter and more effective!"
    }
  ];
  // ========================================
  // Section: Functions
  // ========================================
  const sendMessage = async () => {
    console.log(userMessage);
    const qaPair = questionAnswerData.find((qa) => qa.question.toLowerCase().includes(userMessage.toLowerCase()));
    console.log(qaPair);
    const botAnswer = qaPair.answer
    const sendButton = document.querySelector('.send-button');
    if (sendButton.classList.contains('inactive')) {
      return;
    }
    sendButton.classList.add('inactive')
  
    if (!userMessage) {
      return;
    }

    const userMessageText = userMessage
    setAllowTagClick(false)
    setUserMessage("");
    try {
      const userMessageData = {
        msg_text: userMessageText,
        type: 'user'
      };
      setMessages(prevMessages => [...prevMessages, userMessageData]);
        
      if (botAnswer) {
        const botMessage = botAnswer
        if (botMessage) {
          handleTTS(botMessage);
        }
        const botMessageData = {
          msg_text: botMessage,
          type: 'bot',
          timestamp: serverTimestamp()
        }
        setMessages(prevMessages => [...prevMessages, botMessageData]);
  
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
            setAllowTagClick(true)
            sendButton.classList.remove('inactive');
            const btn = document.querySelector(`button#btn${messages.length+1}`);
            if (btn) {
              btn.classList.remove('hide')
              btn.classList.add('fade-in')
            } else {
              console.log(false);
            }
          }
        }, 25);
        setTypingIntervalId(typingInterval);
      }      
    } catch (error) {
      console.error('Error:', error);
    } 
  };
  
  const handleTagClick = async (e) => {
    const qaPair = questionAnswerData.find((qa) => qa.question.toLowerCase().includes(e.target.innerText.toLowerCase().toLowerCase()));
    setAnswer(qaPair.answer)
    console.log(qaPair.answer);
    const botAnswer = qaPair.answer
    const sendButton = document.querySelector('.send-button');
    if (sendButton.classList.contains('inactive')) {
      return;
    }
    sendButton.classList.add('inactive')
    const tags = document.querySelectorAll('.tag')
    e.target.classList.add('selected')
    setAllowTagClick(false)
    tags.forEach(tag => {
      tag.classList.add('inactive')
    })
    const userMessageText = (lang === "FR" ? "Parle moi de": "Tell me about ") + e.target.innerText.toLowerCase() + '.';
    setUserMessage("");
    try {
      const userMessageData = {
        msg_text: userMessageText,
        type: 'user'
      };
      setMessages(prevMessages => [...prevMessages, userMessageData]);
        
      if (botAnswer) {
        const botMessage = botAnswer
        if (botMessage) {
          handleTTS(botMessage);
        }
        const botMessageData = {
          msg_text: botMessage,
          type: 'bot',
          timestamp: serverTimestamp()
        }
        setMessages(prevMessages => [...prevMessages, botMessageData]);
  
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
            setAllowTagClick(true)
            sendButton.classList.remove('inactive');
            const btn = document.querySelector(`button#btn${messages.length+1}`);
            if (btn) {
              btn.classList.remove('hide')
              btn.classList.add('fade-in')
            } else {
              console.log(false);
            }
          }
        }, 25);
        setTypingIntervalId(typingInterval);
      }      
    } catch (error) {
      console.error('Error:', error);
    } 
  };
  
  const handleKeyDown = (e) => {
    if (allowTagClick && userMessage && e.key === 'Enter') {
      sendMessage()
    }
  }

  const scrollToBottom = () => {
    if (conversationRef.current) {
      conversationRef.current.scrollTop = conversationRef.current.scrollHeight;
    }
  };

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

  const toggleTTS = () => {
    setTTSEnabled(!ttsEnabled);
  }

  const handleTTS = async (text) => {
    if (!ttsEnabled) return;
  
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
      const newAudio = new Audio(audioUrl);
      setCurrentAudio(false)
      if (currentAudio) {
        currentAudio.pause();
      }
      setCurrentAudio(newAudio);
      newAudio.play();  
      newAudio.addEventListener('ended', () => {
        setCurrentAudio(null);
      });
    } catch (error) {
      console.error('Error:', error.message);
    }
  };


  // const handlePDFSearch = async (e) => {
  //   try {
  //     const msg_index = parseInt(e.target.id) - 1;
  //     console.log('current msg',messages);
  //     const target = document.getElementById(msg_index + 1);
  //     target.innerText = 'searching';
  
  //     const userMessageText = messages[msg_index].msg_text; 
  //     const sendButton = document.querySelector('.send-button');
  //     sendButton.classList.add('inactive');
  //     setAllowTagClick(false);
  
  //     const requestData = {
  //       "chat_history": `${messages.filter(msg => msg.type === 'user').map(msg => msg.msg_text).join('|')}`,
  //       "query": userMessageText
  //     };
  
  //     console.log(requestData);
  //     const response = await axios.post('https://ooh-gpt-2-0-tts-openai.onrender.com/llm', requestData);
  
  //     if (response.status === 200) {
  //       const data = 'You can find more information in: ' + response.data[0].source_urls;
  //       console.log('You can find more information in: ' + response.data[0].source_urls);
  
  //       const botMessage = data;
  //       console.log('data', data);
  //       let index = 0;
  //       const typingInterval = setInterval(() => {
  //         if (index < botMessage.length) {
  //           const botMessageWithTyping = botMessage.substring(0, index + 1);
  //           const updatedBotMessageData = {
  //             msg_text: botMessageWithTyping,
  //             type: 'bot',
  //             timestamp: serverTimestamp()
  //           };
  //           setpdfMessages(prevMessages => {
  //             const updatedMessages = {...prevMessages}; 
  //             updatedMessages[msg_index+1] = updatedBotMessageData; 
  //             return updatedMessages;
  //           });
  //           index++;
  //         } else {
  //           clearInterval(typingInterval);
  //           sendButton.classList.remove('inactive');
  //           setAllowTagClick(true);
  //           console.log(pdfMessages); 
  //         }
  //       }, 25);
  
  //       setTypingIntervalId(typingInterval);
  //       console.log(pdfMessages); 
  //       console.log(pdfMessages[0].msg_text); 
  //     } else {
  //       console.error('Error making a request to the backend API');
  //     }
  //   } catch (error) {
  //     console.error('Error:', error);
  //   }
  // };


  const removeHideClass = (index) => {
    const target = document.querySelector(`.pdf-query-${index}`);
    if (target) {
      target.classList.remove('hide');
      const btn = document.querySelector(`button#btn${index}`);
      if (btn) {
        btn.classList.add('hide');
      }
    } else {
    }
  };

  const handlePDFSearch = (e) => {
    const btn = e.target.closest('button');
    btn.querySelector('p').classList.remove('slide');
    const img = btn.querySelector('img');
    img.style.opacity = 1;
    const msg_id = parseInt(btn.id.replace('btn', ''), 10);
    btn.querySelector('.pdf-load').classList.remove('hide');
    removeHideClass(msg_id);
    
    let targetFound = false; // Flag to track if target is found
  
    const intervalId = setInterval(() => {
      removeHideClass(msg_id);
  
      const target = document.querySelector(`.pdf-query-${msg_id}`);
      if (target) {
        clearInterval(intervalId);
        targetFound = true; // Set flag to true if target is found
      }
    }, 1000);
  
    setTimeout(() => {
      clearInterval(intervalId);
    }, 10000);
  };
  
  // ========================================
  // Section: Effects
  // ========================================

  useEffect(() => {
    return () => {
      clearInterval(typingIntervalId);
    };
  }, [typingIntervalId]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);


  useEffect(() => {
    const now = new Date();
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const day = days[now.getDay()];
    const hours = now.getHours() % 12 || 12; 
    const minutes = now.getMinutes();
    const amPm = now.getHours() >= 12 ? 'PM' : 'AM';
    const formattedTimestamp = `${day} ${hours}:${minutes < 10 ? '0' + minutes : minutes} ${amPm}`;
    setTimeStamp(formattedTimestamp);
  }, []);


  // ========================================
  // Section: JSX Structure
  // ========================================

  return (
    <div className='chatbot'>
      <div className={`chatbox ${darkMode ? 'dark' : ''}`}>
        <div className="header">
          <img src={logo} alt="" />
          <div className="toggle-lang">
            <span className={lang === 'EN' ? 'selected' : ''} onClick={() => {setLang('EN')}}>EN</span>
            <span>|</span>
            <span className={lang === 'FR' ? 'selected' : ''} onClick={() => {setLang('FR')}}>FR</span>
          </div>
        </div>
        <div className='fixed'>
          <div className="timestamp">
            {timeStamp}
          </div>
          <div className="toggle-tts">
            <img src={darkMode ? darkSound : sound} alt="" />
            <div>            
              <input checked={ttsEnabled} onChange={toggleTTS} type="checkbox" id='tts' onClick={(e) => e.stopPropagation()}/>
              <label htmlFor="tts" className='button'></label>
            </div>
          </div>
        </div>
        <div className="conversation" ref={conversationRef}>
          <div className='bot'>
            {lang === 'EN' ? 'demo: Hello, my name is BillBot, and I can answer questions about OOH. How can I help you?' :"Bonjour, je m'appelle BillBot, et je peux répondre aux questions sur les affichages extérieurs. Comment puis-je vous aider?"}
          </div>
          <div className="suggestion">
            <p>{lang === 'EN' ? 'Other people are looking for...':'D\'autres personnes recherchent...'} </p>
            {/* <div>
              {lang === 'EN' ? tags.map((tag, index) => (
                <p className={`tag ${allowTagClick ? '' : 'inactive'}`}  key={index} onClick={allowTagClick ? handleTagClick : () => {}}>{tag}</p>
              )) : tagsFR.map((tag, index) => (
                <p className={`tag ${allowTagClick ? '' : 'inactive'}`}  key={index} onClick={allowTagClick ? handleTagClick : () => {}}>{tag}</p>
              ))}
            </div> */}
          </div>
          {messages.map((msg, index) => (
            <div key={index} className={msg.type}>
              <p>{msg.msg_text}</p>
            </div>
          ))}
        </div>
        <div className="user-input">
          <img src={mode} onClick={() => setDarkMode(!darkMode)}  alt=''/>
          <input
            placeholder={lang === 'EN'? 'Type your message here...' : 'Tapez votre message ici..'}
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

export default Demo