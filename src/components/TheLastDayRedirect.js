// VideoWorkRedirect.js
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const TheLastDayRedirect = () => {
  let navigate = useNavigate();

  useEffect(() => {
    window.location.href = 'https://youtu.be/80EaG6NRaJ8';
  }, [navigate]);

  return null;
};

export default TheLastDayRedirect;
