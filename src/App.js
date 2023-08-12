import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ReactGA from "react-ga4";
import Home from './components/Home';
import Projects from './components/Projects';
import FoundYourSticker from './components/FoundYourSticker';
const TRACKING_ID = "G-65B2W1RSZ2"; // Replace with your GA Tracking ID
ReactGA.initialize(TRACKING_ID);
// ReactGA.send({ hitType: 'pageview', page: window.location.pathname + window.location.search });
ReactGA.send(document.location.pathname);
console.log("pathname", document.location.pathname)

function App() {
  // const location = useLocation();

  // useEffect(() => {
  //   // Send a pageview event whenever the route changes
  //   ReactGA.send({ hitType: 'pageview', page: location.pathname + location.search });
  // }, [location]);

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
