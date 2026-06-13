import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ReactGA from "react-ga4";
import routes from './routes';

const TRACKING_ID = "G-65B2W1RSZ2";

if (navigator.userAgent !== 'ReactSnap') {
  ReactGA.initialize(TRACKING_ID);
  ReactGA.send(document.location.pathname);
}

function App() {
  return (
    <Router>
      <Routes>
        {routes.map(({ path, component }, index) => (
          <Route key={index} path={path} element={component} />
        ))}
      </Routes>
    </Router>
  );
}


export default App;
