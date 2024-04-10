import { useState } from 'react';
import './App.css';
import Chatbot from './component/chatbot/Chatbot';

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [password, setPassword] = useState('')
  const [access, setAccess] = useState(false)

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleAccess = () => {
    if (password === 'commb123') {
      setAccess(true);
      document.body.style.zoom = '100%'; 
    } else {
      alert('Incorrect password.');
    }
  };
  

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleAccess(); 
    }
  };

  return (
    <div className={`App ${darkMode ? 'dark' : ''}`}>
       {!access ? (
        <div className='password'>
          <input
            type="password"
            placeholder="Enter passcode"
            value={password}
            onChange={handlePasswordChange}
            onKeyDown={handleKeyDown}
          />
          <button onClick={handleAccess}>Enter</button>
        </div>
      ) : (
        <Chatbot darkMode={darkMode} setDarkMode={setDarkMode} />
      )}
    </div>
  );
}

export default App;