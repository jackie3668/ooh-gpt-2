import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import ReactGA from 'react-ga';
import Billbot from './component/chatbot/Billbot';
import Demo from './component/chatbot/Demo';
import Clean from './component/chatbot/Clean';

const TRACKING_ID = "G-ST9BCR1WKQ"
ReactGA.initialize(TRACKING_ID)
function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [demo, setDemo] = useState(null)

  return (
    <Router>
      <div className={`App ${darkMode ? 'dark' : ''}`}>
        <Routes>
          <Route path='/' element={<Billbot darkMode={darkMode} setDarkMode={setDarkMode} />}/>
          <Route path='/demo' element={<Demo darkMode={darkMode} setDarkMode={setDarkMode} />}/>
          <Route path='/clean' Component={Clean} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;