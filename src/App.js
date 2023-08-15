import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ReactGA from "react-ga4";
import Home from './components/Home';
import Projects from './components/Projects';
import FoundYourSticker from './components/FoundYourSticker/FoundYourSticker';

const TRACKING_ID = "G-65B2W1RSZ2";

ReactGA.initialize(TRACKING_ID);
ReactGA.send(document.location.pathname);
    // ReactGA.send({ hitType: 'pageview', page: location.pathname + location.search });

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
