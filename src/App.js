import { useState } from 'react';
import './App.css';
import Billbot  from './asset/chatbot/Billbot';

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [demo, setDemo] = useState(null)

  return (
      <div className={`App ${darkMode ? 'dark' : ''}`}>
        <div className="version">
          <button onClick={() => setDemo('d')}>Read More Button</button>
        </div>
        {demo === 'd' && <Billbot darkMode={darkMode} setDarkMode={setDarkMode} />}
      </div>
  );
}

export default App;