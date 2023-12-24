// VideoWorkRedirect.js
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const BerlinBreakIn = () => {
  let navigate = useNavigate();

  useEffect(() => {
    // Replace with your YouTube channel URL
    window.location.href = 'https://www.youtube.com/watch?v=zcLPrFV0yC4&themeRefresh=1';
  }, [navigate]);

  return null; // Return null since this component doesn't render anything
};

export default BerlinBreakIn;
