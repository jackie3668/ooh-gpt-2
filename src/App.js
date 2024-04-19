import { useState } from 'react';
import './App.css';
import Chatbot from './component/chatbot/Chatbot';
import Seaplane from './component/chatbot/Seaplane';

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [demo, setDemo] = useState(null)

  return (
      <div className={`App ${darkMode ? 'dark' : ''}`}>
        <div className="version">
          <button onClick={() => setDemo('S')}>Seaplane Demo</button>
          <button onClick={() => setDemo('o')}>Newer OpenAI</button>
        </div>
        {demo === 'S' && <Seaplane />}
        {demo === 'o' && <Chatbot darkMode={darkMode} setDarkMode={setDarkMode} />}
      </div>
  );
}

export default App;