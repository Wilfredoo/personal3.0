// components/DownloadReferenceLetter.js
import { useEffect } from 'react';

const DownloadReferenceLetter = () => {
  useEffect(() => {
    window.location.href = '/Reference_Letter.pdf';
  }, []);

  return null;
};

export default DownloadReferenceLetter;
