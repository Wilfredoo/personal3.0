import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const redirects = {
  video: 'https://www.youtube.com/@wilcas5349',
  films: 'https://www.youtube.com/playlist?list=PLmT80T_P4eJZv_n7VBQzn-aGZZjZ7_wxE',
  reel: 'https://www.youtube.com/watch?v=3oe0rYLOG7k&list=PLmT80T_P4eJZv_n7VBQzn-aGZZjZ7_wxE&index=6',
  berlin: 'https://www.youtube.com/watch?v=zcLPrFV0yC4&themeRefresh=1',
  badfilms: 'https://www.youtube.com/playlist?list=PLmT80T_P4eJbCCQUgyBZOw6wxPlFEnjSr',
};

const Redirector = () => {
    const { type } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        console.log("Redirector called with type:", type);

        if (!type || !redirects[type]) {
            console.error(`Error: No valid redirect found for type '${type}'`);
            navigate('/');
            return;
        }

        console.log(`Redirecting to: ${redirects[type]}`);
        // Open the link in a new tab
        window.open(redirects[type], '_blank');

    }, [type, navigate]);

  return null;
};

export default Redirector;
