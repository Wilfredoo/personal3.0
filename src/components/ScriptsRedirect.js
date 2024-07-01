// VideoWorkRedirect.js
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ScriptsRedirect = () => {
  let navigate = useNavigate();

  useEffect(() => {
    // Replace with your YouTube channel URL
    window.location.href = 'https://mega.nz/folder/ZadlyShC#QTbmsmGba8HH1OwE-33jxQ';
  }, [navigate]);

  return null; // Return null since this component doesn't render anything
};

export default ScriptsRedirect;
