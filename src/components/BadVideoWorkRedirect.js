// VideoWorkRedirect.js
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const BadVideoWorkRedirect = () => {
  let navigate = useNavigate();

  useEffect(() => {
    // Replace with your YouTube channel URL
    window.location.href = 'https://www.youtube.com/playlist?list=PLmT80T_P4eJbCCQUgyBZOw6wxPlFEnjSr';
  }, [navigate]);

  return null; // Return null since this component doesn't render anything
};

export default BadVideoWorkRedirect;
