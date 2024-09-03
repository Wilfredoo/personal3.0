// VideoWorkRedirect.js
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const VideoWorkRedirect = () => {
  let navigate = useNavigate();

  useEffect(() => {
    // Replace with your YouTube channel URL
    window.location.href = 'https://www.youtube.com/watch?v=3oe0rYLOG7k&list=PLmT80T_P4eJZv_n7VBQzn-aGZZjZ7_wxE';
  }, [navigate]);

  return null; // Return null since this component doesn't render anything
};

export default VideoWorkRedirect;
