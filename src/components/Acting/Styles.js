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

export const ReelText = styled.p`
  letter-spacing: 3px;
`;

export const SmallText = styled.span`
  display: block;
  font-size: 0.8rem; /* Smaller size for the second line */
  margin-top: 5px;
  line-height: 1;
    text-transform: none; /* Ensures text is not capitalized */

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
letter-spacing: 8px;

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

export const ResumeDownloadButton = styled.a`
  display: block;
  width: fit-content;
  margin: 0 auto 1.4rem;
  padding: 0.85rem 1.3rem;
  border: 2px solid #ffff00;
  border-radius: 10px;
  background: #1e1e1e;
  color: #ffff00;
  text-decoration: none;
  text-transform: uppercase;
  font-family: 'Arial Black', sans-serif;
  font-size: 0.95rem;
  letter-spacing: 0.7px;
  font-weight: 700;
  transition: transform 0.2s ease, background 0.2s ease, color 0.2s ease;

  &:hover {
    transform: translateY(-1px);
    background: #ffff00;
    color: #111;
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
height: 350px;
  margin: 0 auto;
  border-radius: 8px;
  border: 3px solid #ff0080;
  box-shadow: 0 0 10px #00ffea;
  display: block;
`;

export const LinksSection = styled.div`
  margin: 30px 0;
  text-align: center;
`;

export const LinksTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 20px;
  color: #ffff00;
  text-shadow: 2px 2px 4px #ff0080;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

export const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
`;

export const RepresentationCard = styled.div`
  margin: 0 auto 28px;
  padding: 18px 20px;
  max-width: 560px;
  border: 1px solid #3b3b3b;
  border-radius: 12px;
  background: #121212;
  box-shadow: 0 0 0 rgba(0, 0, 0, 0);
  text-align: center;
`;

export const RepresentationLink = styled.a`
  display: inline-block;
  margin-bottom: 14px;
  color: #f1f1f1;
  font-size: 1.05rem;
  font-weight: 500;
  letter-spacing: 0.2px;
  text-decoration: none;
  transition: color 0.25s ease;
  line-height: 1.45;

  &:hover {
    color: #ffffff;
  }
`;

export const RepresentationText = styled.p`
  margin: 0 0 12px;
  color: #f1f1f1;
  font-size: 1.05rem;
  line-height: 1.45;
  letter-spacing: 0.2px;
  font-weight: 500;
`;

export const RepresentationContact = styled.p`
  margin: 0;
  color: #cfcfcf;
  font-size: 0.98rem;
  line-height: 1.45;
  letter-spacing: 0.15px;
`;

export const ContactCta = styled.div`
  margin: 24px auto 0;
  padding: 14px 16px;
  max-width: 560px;
  border: 2px solid #ffff00;
  border-radius: 10px;
  background: #1a1a1a;
  text-align: center;
`;

export const ContactCtaText = styled.p`
  margin: 0;
  color: #ffff00;
  font-size: 1.08rem;
  font-weight: 700;
  line-height: 1.45;
  letter-spacing: 0.2px;
`;

export const ProfileLink = styled.a`
  display: inline-block;
  padding: 15px 30px;
  background: black;
  color: white;
  text-decoration: none;
  font-weight: bold;
  font-size: 1.1rem;
  border-radius: 25px;
  border: 3px solid #fff;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.3s ease;
  box-shadow: 0 0 15px #ff0080;
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    transition: left 0.5s ease;
  }

  &:hover {
    transform: scale(1.05) rotate(-2deg);
    box-shadow: 0 0 25px #00ffea, 0 0 35px #ffff00;
    border-color: #ffff00;
    
    &:before {
      left: 100%;
    }
  }
`;
