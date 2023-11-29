import React from 'react';
import styled, { keyframes } from 'styled-components';

// Keyframes for the moving arrow
const move = keyframes`
  0% {
    transform: translateY(-5px);
  }
  50% {
    transform: translateY(0px);
  }
  100% {
    transform: translateY(-5px);
  }
`;

// Keyframes for the glowing button
const glow = keyframes`
  0% {
    box-shadow: 0 0 5px #0ff, 0 0 10px #0ff, 0 0 15px #0ff, 0 0 20px #0ff;
  }
  50% {
    box-shadow: 0 0 10px #0ff, 0 0 20px #0ff, 0 0 25px #0ff, 0 0 30px #0ff;
  }
  100% {
    box-shadow: 0 0 5px #0ff, 0 0 10px #0ff, 0 0 15px #0ff, 0 0 20px #0ff;
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
  background-color: #fafafa;
  font-family: 'Arial', sans-serif;
`;

const Arrow = styled.div`
  color: #333; // Normal text color, no glow
  animation: ${move} 1.5s ease-in-out infinite;
  font-size: 2rem;
  margin-bottom: 20px;
`;

const Button = styled.button`
  padding: 12px 25px;
  border: none;
  border-radius: 5px;
  background-color: #333;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  animation: ${glow} 1.5s ease-in-out infinite;

  &:hover {
    background-color: #555;
  }
`;

const WelcomeText = styled.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 20px;
`;

const Curriculum = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = `${process.env.PUBLIC_URL}/Resume_Wilfredo.pdf`;
    link.download = 'Resume_Wilfredo.pdf';
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Wrapper>
      <WelcomeText>Fancy a peek at my CV? </WelcomeText>
      <p>Grab it right here.</p>
      <Arrow>↓</Arrow>
      <Button onClick={handleDownload}>Download Résumé</Button>
    </Wrapper>
  );
};

export default Curriculum;
