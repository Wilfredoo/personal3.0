import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Projects from './components/Projects';
import FoundYourSticker from './components/FoundYourSticker';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/foundyoursticker" element={<FoundYourSticker />} />
      </Routes>
    </Router>
  );
}

export default App;
