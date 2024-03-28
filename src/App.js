// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ReactGA from "react-ga4";
import Home from './components/Home';
import Curriculum from './components/Curriculum';
import VideoWorkRedirect from './components/VideoWorkRedirect';
import BadVideoWorkRedirect from './components/BadVideoWorkRedirect';
import BerlinBreakIn from './components/BerlinBreakIn';
import Cacao from './components/Cacao/Cacao';
import BatchOrders from './components/Cacao/BatchOrders';

const TRACKING_ID = "G-65B2W1RSZ2";

ReactGA.initialize(TRACKING_ID);
ReactGA.send(document.location.pathname);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cv" element={<Curriculum />} />
        <Route path="/film" element={<VideoWorkRedirect />} />
        <Route path="/badfilm" element={<BadVideoWorkRedirect />} />
        <Route path="/berlin-break-in" element={<BerlinBreakIn />} />
        <Route path="/cacao" element={<Cacao />} />
        <Route path="/kakao" element={<Cacao />} />
        <Route path="/cacao/batch/:number" element={<BatchOrders />} />
      </Routes>
    </Router>
  );
}

export default App;
