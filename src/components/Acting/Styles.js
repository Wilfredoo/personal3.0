import styled, { keyframes } from 'styled-components';

export const Tagline = styled.p`
  position: relative;
  font-size: 1.4rem;
  text-align: center;
  padding: 5px;
  margin: 0 auto 1rem;
  line-height: 1.4;
  font-style: italic;
  color: #E53888;
  overflow: hidden;
  z-index: 1;

background: cornsilk;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -150%;
    width: 50%;
    height: 100%;
    transform: skewX(-20deg);
    pointer-events: none;
    z-index: 2;
    mix-blend-mode: screen;
  }
`;



/* Neon stroke approach for improved readability */
const strokeShadow = `
  -1px 0 #000,
  0 1px #000,
  1px 0 #000,
  0 -1px #000
`;


/* Neon glow animation for the second tagline */
const neonGlow = keyframes`
  0% {
    text-shadow:
      ${strokeShadow},
      2px 2px 8px #ff0080;
  }
  100% {
    text-shadow:
      ${strokeShadow},
      4px 4px 14px #ffff00;
  }
`;


// FlashyTagline for tagline2 (without the background shine)
export const FlashyTagline = styled.p`
  font-size: 1.8rem;
  text-align: center;
  margin: 0 auto 2rem;
  font-weight: bold;
  color: #f2f700;
  background: #B771E5;
  text-transform: uppercase;
  animation: ${neonGlow} 1.2s infinite alternate;
`;




export const ParentContainer = styled.div`
  margin: 0 auto;
  max-width: auto;
  background-color: #000;
`;

// Add this to Styles.js
export const NewPhotoButton = styled.button`
  display: block;
  margin: 20px auto;
  padding: 1rem 2rem;
  font-size: 1.3rem;
  font-family: 'Arial Black', sans-serif;
  background: linear-gradient(45deg, #ff0080, #00ffea, #ffff00);
  color: #000;
  border: 3px solid #fff;
  border-radius: 8px;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 2px;
  text-shadow: 1px 1px 2px #fff;
  box-shadow: 0 0 10px #fff;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  &:hover {
    transform: scale(1.05) rotate(-1deg);
    box-shadow: 0 0 20px #ff0, 0 0 40px #ff0 inset;
  }
`;


/* Container: single column, centered, with extra padding */
export const Container = styled.div`
  margin: 0 auto;
  max-width: 600px;
  padding: 30px;
  font-family: Impact, sans-serif;
  background-color: #000;
  color: #fff;
`;

/* Header: keep it chicha-loud but limit width and center it */
export const Header = styled.h1`
  text-align: center;
  background: linear-gradient(90deg, #ff00ff 0%, #ffff00 50%, #00ff00 100%);
  color: #000;
  padding: 1rem;
  margin: 1rem 0 0.5rem;
  text-transform: uppercase;
  letter-spacing: 3px;
  border: 4px double #fff;
  font-size: 2.5rem;
  font-weight: bold;
  box-shadow: 0 0 10px #ff0;
`;

export const TranslateButton = styled.button`
  display: block;
  margin: 2rem auto;
  padding: 1rem 2rem;
  font-size: 1.3rem;
  font-family: 'Arial Black', sans-serif;
  background: linear-gradient(45deg, #15F5BA, #A3D8FF);
  background-size: 200%;
  color: #000;
  border: 2px solid #fff;
  border-radius: 12px;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 2px;
  text-shadow: 1px 1px 3px #fff;
  box-shadow: 0 0 15px #94FFD8;
  transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.5s ease;

  &:hover {
    transform: scale(1.05) rotate(-1deg);
    box-shadow: 0 0 25px #A3D8FF;
  }
`;



/* Single-column video section for all screen sizes */
export const VideoSection = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  margin-bottom: 30px;
`;

/* Keeps the 16:9 ratio for videos */
export const VideoEmbed = styled.div`
  width: 100%;
  position: relative;
  padding-bottom: 56.25%; /* 16:9 ratio */
  height: 0;

  iframe {
    position: absolute;
    width: 100%;
    height: 100%;
    border: none;
  }
`;

/* Single column image grid */
export const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  margin-bottom: 20px;
`;

export const InfoSection = styled.div`
  background-color: #222;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 0 10px #ff0;
  border: 2px dashed #ff0080;
  font-family: 'Open Sans', sans-serif;
  line-height: 1.6;
`;

export const InfoList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const InfoItem = styled.li`
  margin: 12px 0;
  font-size: 1.2rem;
`;

/* Images with neon border and shadow */
export const ProfileImage = styled.img`
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  border-radius: 8px;
  border: 3px solid #ff0080;
  box-shadow: 0 0 10px #00ffea;
  display: block;
`;
