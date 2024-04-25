import { useState } from 'react';
import './App.css';
import Chatbot from './component/chatbot/Chatbot';
import Seaplane from './component/chatbot/Seaplane';
import OpenAI_Seaplane from './component/chatbot/OpenAI_Seaplane';
import OpenAI_Seaplane_T from './component/chatbot/OpenAI_Seaplane_T';

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [demo, setDemo] = useState(null)

  return (
      <div className={`App ${darkMode ? 'dark' : ''}`}>
        <div className="version">
          <button onClick={() => setDemo('d')}>Read More Button</button>
          {/* <button onClick={() => setDemo('t')}>Read More Text</button> */}
          {/* <button onClick={() => setDemo('S')}>Seaplane Demo</button>
          <button onClick={() => setDemo('o')}>Newer OpenAI</button> */}
        </div>
        {demo === 'S' && <Seaplane />}
        {demo === 'o' && <Chatbot darkMode={darkMode} setDarkMode={setDarkMode} />}
        {demo === 'd' && <OpenAI_Seaplane darkMode={darkMode} setDarkMode={setDarkMode} />}
        {demo === 't' && <OpenAI_Seaplane_T darkMode={darkMode} setDarkMode={setDarkMode} />}

      </div>
  );
}

export default App;