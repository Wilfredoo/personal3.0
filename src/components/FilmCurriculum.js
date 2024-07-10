import React from 'react';
import styled, { keyframes } from 'styled-components';

// Keyframes for the moving arrow
const move = keyframes`
  0%, 100% {
    transform: translateY(-10px);
  }
  50% {
    transform: translateY(0);
  }
`;

// Keyframes for the glowing button and text
const neonGlow = keyframes`
  0%, 100% {
    text-shadow: 0 0 10px #00ffff, 0 0 20px #00ffff, 0 0 30px #00ffff, 0 0 40px #00ffff;
  }
  50% {
    text-shadow: 0 0 20px #00ffff, 0 0 40px #00ffff, 0 0 60px #00ffff, 0 0 80px #00ffff;
  }
`;

const reducedNeonGlow = keyframes`
  0%, 100% {
    text-shadow: 0 0 5px #00ffff, 0 0 10px #00ffff, 0 0 15px #00ffff;
  }
  50% {
    text-shadow: 0 0 10px #00ffff, 0 0 20px #00ffff, 0 0 30px #00ffff;
  }
`;

const gradientBackground = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const particleAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-100vh);
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 20px;
  text-align: center;
  box-sizing: border-box;
  background: linear-gradient(135deg, #0a0a0a, #000000);
  background-size: 200% 200%;
  animation: ${gradientBackground} 15s ease infinite;
  font-family: 'Arial', sans-serif;
  position: relative;
  overflow: hidden;
`;

const Arrow = styled.div`
  color: #ff00ff;
  animation: ${move} 1.5s ease-in-out infinite;
  font-size: 2rem;
  margin-bottom: 10px;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 40px;
  margin-top: 40px;
  justify-content: center;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Button = styled.button`
  padding: 12px 25px;
  border: 2px solid #ff00ff;
  border-radius: 10px;
  background: transparent;
  color: #ff00ff;
  font-size: 1.2rem;
  cursor: pointer;
  transition: transform 0.3s ease, background 0.3s ease, color 0.3s ease, box-shadow 0.3s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: scale(1.1);
    background: #ff00ff;
    color: #0a0a0a;
    box-shadow: 0 0 20px #ff00ff, 0 0 40px #ff00ff, 0 0 60px #ff00ff;
  }

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: rgba(255, 0, 255, 0.1);
    z-index: -1;
    transform: rotate(45deg);
    transition: opacity 0.3s ease;
  }

  &:hover::before {
    opacity: 0.3;
  }
`;

const Label = styled.div`
  color: #ff00ff;
  font-size: 1.5rem;
  font-weight: bold;
  animation: ${reducedNeonGlow} 1.5s ease-in-out infinite;
  margin-bottom: 5px;
`;

const WelcomeText = styled.h1`
  font-size: 3.5rem;
  color: #ff00ff;
  margin-bottom: 40px;
  animation: ${reducedNeonGlow} 1.5s ease-in-out infinite;
`;

const SubText = styled.p`
  color: #00ffff;
  font-size: 1.5rem;
  margin-bottom: 20px;
  text-shadow: 0 0 10px #00ffff, 0 0 20px #00ffff, 0 0 30px #00ffff, 0 0 40px #00ffff;
`;

const Note = styled.p`
  color: #00ffff;
  margin-top: 2.5rem;
  font-size: 1.2rem;
`;

const Particle = styled.div`
  position: absolute;
  bottom: 0;
  width: 2px;
  height: 2px;
  background: #ff00ff;
  animation: ${particleAnimation} 3s linear infinite;
  opacity: 0.5;

  &:nth-child(2n) {
    animation-duration: 4s;
  }
  &:nth-child(3n) {
    animation-duration: 5s;
  }
`;

const FilmCurriculum = () => {
  const handleDownload = (lang) => {
    const link = document.createElement('a');
    link.href = lang === 'EN' 
      ? `${process.env.PUBLIC_URL}/Resume_Film_English.pdf`
      : `${process.env.PUBLIC_URL}/Resume_Film_German.pdf`;
    link.download = lang === 'EN' ? 'Resume_Film_English.pdf' : 'Resume_Film_German.pdf';
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Wrapper>
      <WelcomeText>Fancy a peek at my CV?</WelcomeText>
      <SubText>Grab it right here</SubText>
      <ButtonContainer>
        <ButtonWrapper>
          <Label>English</Label>
          <Arrow>↓</Arrow>
          <Button onClick={() => handleDownload('EN')}>
            Resume
          </Button>
        </ButtonWrapper>
        <ButtonWrapper>
          <Label>Deutsch</Label>
          <Arrow>↓</Arrow>
          <Button onClick={() => handleDownload('DE')}>
            Lebenslauf
          </Button>
        </ButtonWrapper>
      </ButtonContainer>
      <Note>(don't worry, it's not a virus)</Note>
      {[...Array(100)].map((_, i) => (
        <Particle key={i} style={{ left: `${Math.random() * 100}vw` }} />
      ))}
    </Wrapper>
  );  
};

export default FilmCurriculum;
