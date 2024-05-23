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

const Billbot = ({ darkMode, setDarkMode }) => {
  // State variables
  const [messages, setMessages] = useState([]);
  const [pdfMessages, setpdfMessages] = useState([])
  const [userMessage, setUserMessage] = useState("");
  const [lang, setLang] = useState("EN")
  const [ttsEnabled, setTTSEnabled] = useState(false);
  const [allowTagClick, setAllowTagClick] = useState(true);
  const [typingIntervalId, setTypingIntervalId] = useState(null);
  const [timeStamp, setTimeStamp] = useState(null)
  const [currentAudio, setCurrentAudio] = useState(null);
  const tags = ['Insight Report', 'Billboards', 'Road Segments', 'Vehicle Data', 'Pedestrian', 'etc' ]
  const tagsFR = ["Rapport D'Analyse",  "Panneaux Publicitaires",  "Segments De Route",  "Données Véhicule",  "Piéton",  "Etc"]
  const conversationRef = useRef(null);

  // ========================================
  // Section: Functions
  // ========================================

  const sendMessage = async () => {
    const sendButton = document.querySelector('.send-button');
    if (sendButton.classList.contains('inactive')) {
      return;
    }
    sendButton.classList.add('inactive')
  
    if (!userMessage) {
      return;
    }
    setAllowTagClick(false)
    setUserMessage("");
    const userMessageData = {
      msg_text: userMessage,
      type: 'user'
    };
    console.log('current user query:', userMessage);
    setMessages(prevMessages => [...prevMessages, userMessageData]);
    
    const url = lang === "FR" ? `https://ooh-gpt-2-0-tts-openai.onrender.com/sendMsgToOpenAI/fr` : 'https://ooh-gpt-2-0-tts-openai.onrender.com/sendMsgToOpenAI'; 
    const response = await axios.post(url, {
      userMessage: 'current user message: ' + userMessage ,
    });

    const msg_index = messages.length
    if (response.status === 200) {
      const botMessage = lang === 'FR' ? response.data.generatedResponse + " Cliquez ci-dessous si vous souhaitez que je recherche davantage de résultats spécifiques dans la publication COMMB.": response.data.generatedResponse + " Click below if you would like me to look into the COMMB publication for more specific findings.";
      if (botMessage) {
        const ttsMessage = botMessage.replace('COMMB', 'comb')
        handleTTS(ttsMessage);
      }
      console.log('initial openai response:', response.data.generatedResponse );

      const botMessageData = {
        msg_text: botMessage,
        type: 'bot',
        timestamp: serverTimestamp()
      };
      const messageData = {
        msg_user: userMessage,
        msg_bot: botMessage,
        timestamp: serverTimestamp()
      };
      await addDoc(collection(db, "messages"), messageData);
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
    } else {
      console.error('Error getting intial response.');
    }      
    handlePDFResponse(response, msg_index)
  };

  const handlePDFResponse = async (response, msg_index) => {
    const pdfUrl = lang === "FR" ? 'https://ooh-gpt-2-0-tts-openai.onrender.com/llm/fr' : 'https://ooh-gpt-2-0-tts-openai.onrender.com/llm'; 
    const requestData = {
      "chat_history": `${messages.filter(msg => msg.type === 'user').map(msg => msg.msg_text).join('|')}`,
      "query": userMessage + "prior response //" + response.data.generatedResponse + "//"
    };

    const pdfResponse = await axios.post(pdfUrl, requestData);
    if (pdfResponse.status === 200) {
      console.log('seaplane response:', pdfResponse.data[0].result);
      handleParaphrase(pdfResponse, userMessage, response, msg_index)
    } else {
      console.error('Error getting seaplane response.');
    }
  }

  const handleParaphrase = async (pdfResponse, userMessage, response, msg_index) => {
    const uniqueFiles = [...new Set(pdfResponse.data[0].source_urls)];
    const url = lang === "FR" ? `https://ooh-gpt-2-0-tts-openai.onrender.com/paraphraseOpenAI/fr` : 'https://ooh-gpt-2-0-tts-openai.onrender.com/paraphraseOpenAI'; 
    const paraphraseResponse = await axios.post(url, {
      userMessage:  'user query: ' + userMessage + ' 1st response: ' + response.data.generatedResponse + ' 2nd response: ' + pdfResponse.data[0].result,
    });
    console.log('sending seaplane response to openai');
    if (paraphraseResponse.status=== 200) {
      console.log('paraphrased response by openai:', paraphraseResponse.data.generatedResponse);
      const titles = uniqueFiles.map(filename => {
        const matchingReport = reports.find(report => report.filename === filename);
        return matchingReport ? matchingReport.title : filename;
      });

      const updatedBotMessageData = {
        msg_text: paraphraseResponse.data.generatedResponse ,
        msg_titles: titles
      };
      setpdfMessages(prevMessages => {
        const updatedMessages = { ...prevMessages };
        updatedMessages[msg_index + 1] = updatedBotMessageData;
        return updatedMessages;
      });
    } else {
      console.error('Error getting paraphrase response.');
    }
  }
  
  // const handleTagClick = async (e) => {
  //   const sendButton = document.querySelector('.send-button');
  //   if (sendButton.classList.contains('inactive')) {
  //     return;
  //   }
  //   sendButton.classList.add('inactive')
  //   const tags = document.querySelectorAll('.tag')
  //   e.target.classList.add('selected')
  //   setAllowTagClick(false)
  //   tags.forEach(tag => {
  //     tag.classList.add('inactive')
  //   })

  //   const userMessageText = (lang === "FR" ? "Parle moi de": "Tell me about ") + e.target.innerText.toLowerCase() + '.';
  //   setUserMessage("");
  //   const userMessageData = {
  //     msg_text: userMessageText,
  //     type: 'user'
  //   };

  //   setMessages(prevMessages => [...prevMessages, userMessageData]);
    
  //   const url = lang === "FR" ? `https://ooh-gpt-2-0-tts-openai.onrender.com/sendMsgToOpenAI/fr` : 'https://ooh-gpt-2-0-tts-openai.onrender.com/sendMsgToOpenAI'; 
  //   const response = await axios.post(url, {
  //     userMessage: 'current user message: ' + userMessageText,
  //   });

  //   const msg_index = messages.length
  //   if (response.status === 200) {
  //     const botMessage = lang === 'FR' ? response.data.generatedResponse + " Cliquez ci-dessous si vous souhaitez que je recherche davantage de résultats spécifiques dans la publication COMMB.": response.data.generatedResponse + " Click below if you would like me to look into the COMMB publication for more specific findings.";
  //     if (botMessage) {
  //       handleTTS(botMessage);
  //     }
  //     const botMessageData = {
  //       msg_text: botMessage,
  //       type: 'bot',
  //       timestamp: serverTimestamp()
  //     };
  //     const messageData = {
  //       msg_user: userMessageText,
  //       msg_bot: botMessage,
  //       timestamp: serverTimestamp()
  //     };
  //     await addDoc(collection(db, "messages"), messageData);
  //     setMessages(prevMessages => [...prevMessages, botMessageData]);
  //     let index = 0;
  //     const typingInterval = setInterval(() => {
  //       if (index < botMessage.length) {
  //         const botMessageWithTyping = botMessage.substring(0, index + 1);
  //         const updatedBotMessageData = {
  //           ...botMessageData,
  //           msg_text: botMessageWithTyping
  //         };
  //         setMessages(prevMessages => {
  //           const updatedMessages = [...prevMessages];
  //           updatedMessages[prevMessages.length - 1] = updatedBotMessageData;
  //           return updatedMessages;
  //         });
  //         index++;
  //       } else {
  //         clearInterval(typingInterval);
  //         setAllowTagClick(true)
  //         sendButton.classList.remove('inactive');
  //         const btn = document.querySelector(`button#btn${messages.length+1}`);
  //         if (btn) {
  //           btn.classList.remove('hide')
  //           btn.classList.add('fade-in')
  //         } else {
  //           console.log(false);
  //         }
  //       }
  //     }, 25);
  //     setTypingIntervalId(typingInterval);
  //   } else {
  //     console.error('Error getting intial response.');
  //   }      
  //   handlePDFResponse(response, msg_index)
  // };
  
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

  const removeHideClass = (index) => {
    const target = document.querySelector(`.pdf-query-${index}`);
    if (target) {
      target.classList.remove('hide');
      const btn = document.querySelector(`button#btn${index}`);
      if (btn) {
        btn.classList.add('hide');
      } else {
        console.error('unable to find btn')
      }
    } else {
      console.error('unable to find target')
    }
  };
  
  const handlePDFSearch = (e) => {
    const btn = e.target.closest('button');
    btn.querySelector('p').classList.remove('slide');
    const img = btn.querySelector('img');
    img.style.opacity = 1;
    const msg_id = parseInt(btn.id.replace('btn', ''), 10);
    btn.querySelector('.pdf-load').classList.remove('hide');
    const intervalId = setInterval(() => {
    removeHideClass(msg_id);
      const target = document.querySelector(`.pdf-query-${msg_id}`);
      if (target) {
        clearInterval(intervalId);
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
            {lang === 'EN' ? 'Hello, my name is BillBot, and I can answer questions about OOH. How can I help you?' :"Bonjour, je m'appelle BillBot, et je peux répondre aux questions sur les affichages extérieurs. Comment puis-je vous aider?"}
          </div>
          {/* <div className="suggestion">
            <p>{lang === 'EN' ? 'Other people are looking for...':'D\'autres personnes recherchent...'} </p>
            <div>
              {lang === 'EN' ? tags.map((tag, index) => (
                <p className={`tag ${allowTagClick ? '' : 'inactive'}`}  key={index} onClick={allowTagClick ? handleTagClick : () => {}}>{tag}</p>
              )) : tagsFR.map((tag, index) => (
                <p className={`tag ${allowTagClick ? '' : 'inactive'}`}  key={index} onClick={allowTagClick ? handleTagClick : () => {}}>{tag}</p>
              ))}
            </div>
          </div> */}
          {messages.map((msg, index) => (
            <div key={index} className={msg.type} >
              <p>{msg.msg_text}</p>
              {msg.type === 'bot' && (
                  <button id={"btn" + index} className={`pdf-btn hide`}onClick={handlePDFSearch}><img src={search} alt="" /><img src={load} className='pdf-load hide' alt="" /><p className='slide'>{lang === 'EN'?'Find Insight Report':"Rapport d'analyse"}</p>
                  </button>
              )}
            {msg.type === 'bot' && pdfMessages[index] && (
              <p className={`pdf-query-${index} hide`}>
                {lang === "FR" ? "Voici ce que j'ai trouvé en lisant les publications de COMMB. " : "Here is what I found reading through COMMB publications. "}{pdfMessages[index].msg_text}{lang === "FR" ? " Vous pouvez trouver plus d'informations dans :":" You can find more information in: "}{' '}
                {pdfMessages[index]?.msg_titles&& (
                  pdfMessages[index].msg_titles.map((title, i) => {
                    const matchingReport = reports.find(report => report.title === title);
                    return (
                      <React.Fragment key={i}>
                        {matchingReport ? (
                          <a className={`pdf-link ${darkMode ? 'dark-mode' : ''}`} href={matchingReport.url} target="_blank" rel="noopener noreferrer">{title}</a>
                        ) : (
                          <span>{title}</span>
                        )}
                        {i !== pdfMessages[index].msg_titles.length - 1 && ', '}
                      </React.Fragment>
                    );
                  })
                )}
              </p>
            )}

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

export default Billbot