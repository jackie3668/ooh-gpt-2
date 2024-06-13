import React, { useState, useRef, useEffect } from 'react';
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { app } from '../../firebase';
import axios from 'axios'; 
import './Billbot.css';
import reports from '../../data/reports';
import load from '../../asset/COMMB Loading (1).gif';
import logo from '../../asset/logo-dot-white@4x.png';
import send from '../../asset/Send.png';
import mode from '../../asset/day-and-night (1).png';
import sound from '../../asset/sound.png';
import darkSound from '../../asset/dark-sound.png';
import search from '../../asset/search-interface-symbol.png';

const db = getFirestore(app);

const Demo = ({ darkMode, setDarkMode }) => {
  // State variables
  const [answer, setAnswer] = useState('');
  const [messages, setMessages] = useState([]);
  const [pdfMessages, setpdfMessages] = useState([]);
  const [pdfMessagesText, setpdfMessagesText] = useState([]);
  const [userMessage, setUserMessage] = useState('');
  const [lang, setLang] = useState('EN');
  const [ttsEnabled, setTTSEnabled] = useState(false);
  const tags = ['Insight Report', 'Billboards', 'Road Segments', 'Vehicle Data', 'Pedestrian', 'etc'];
  const tagsFR = ["Rapport D'Analyse",  "Panneaux Publicitaires",  "Segments De Route",  "Données Véhicule",  "Piéton",  "Etc"];
  const conversationRef = useRef(null);
  const [allowTagClick, setAllowTagClick] = useState(true);
  const [currentAnswerIndex, setCurrentAnswerIndex] = useState(0); // Track the index of the current answer
  const [typingIntervalId, setTypingIntervalId] = useState(null);
  const [timeStamp, setTimeStamp] = useState(null);
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

  // Function to send message
  const sendMessage = async () => {
    // Find the current question-answer pair
    const currentQA = questionAnswerData[currentAnswerIndex];

    // If the current answer index is less than the total number of question-answer pairs
    if (currentAnswerIndex < questionAnswerData.length) {
      // Add user message to the messages array
      const userMessageData = {
        msg_text: userMessage,
        type: 'user'
      };
      setMessages(prevMessages => [...prevMessages, userMessageData]);

      // Add bot answer to the messages array
      const botMessageData = {
        msg_text: currentQA.answer,
        type: 'bot',
        timestamp: serverTimestamp()
      };
      setMessages(prevMessages => [...prevMessages, botMessageData]);

      // Increment the current answer index
      setCurrentAnswerIndex(prevIndex => prevIndex + 1);

      // Clear the user input field
      setUserMessage('');
    } else {
      console.log('No more question-answer pairs to send.');
    }
  };

  // Function to handle key down event
  const handleKeyDown = (e) => {
    if (allowTagClick && userMessage && e.key === 'Enter') {
      sendMessage();
    }
  };

  // Function to scroll to bottom of conversation
  const scrollToBottom = () => {
    if (conversationRef.current) {
      conversationRef.current.scrollTop = conversationRef.current.scrollHeight;
    }
  };

  // Function to toggle text-to-speech
  const toggleTTS = () => {
    setTTSEnabled(!ttsEnabled);
  };

  // Function to handle text-to-speech
  const handleTTS = async (text) => {
    if (!ttsEnabled) return;
    // Modify text as needed
    text = text.replace(/COMMB/g, 'comb');
    text = text.replace(/OOH/g, 'O O H');
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
      setCurrentAudio(false);
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

  // Effect to handle cleanup of typing interval
  useEffect(() => {
    return () => {
      clearInterval(typingIntervalId);
    };
  }, [typingIntervalId]);

  // Effect to scroll to bottom of conversation
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Effect to set timestamp
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

  return (
    <div className='chatbot'>
      <div className={`chatbox ${darkMode ? 'dark' : ''}`}>
        <div className="header">
          <img src={logo} alt="" />
          <div className="toggle-lang">
            <span className={lang === 'EN' ? 'selected' : ''} onClick={() => setLang('EN')}>EN</span>
            <span>|</span>
            <span className={lang === 'FR' ? 'selected' : ''} onClick={() => setLang('FR')}>FR</span>
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
            {lang === 'EN' ? 'Hello, my name is BillBot, and I can answer questions about OOH. How can I help you?' :"Bonjour, je m'appelle BillBot, et je peux répondre aux questions sur les affichages extérieurs. Comment puis-je vous aider?"}
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

export default Demo;
