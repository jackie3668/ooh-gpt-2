import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Billbot from './component/chatbot/Billbot';
import Demo from './component/chatbot/Demo';
import Clean from './component/chatbot/Clean';

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [demo, setDemo] = useState(null)

  return (
    <Router>
      <div className={`App ${darkMode ? 'dark' : ''}`}>
        <Routes>
        <Route path='/' Component={Billbot} />
        <Route path='/demo' Component={Demo} />
        <Route path='/clean' Component={Clean} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;