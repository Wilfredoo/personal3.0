import styled, { createGlobalStyle } from "styled-components";

// Global styles for different aesthetics
export const GlobalStyle = createGlobalStyle`
  body {
    transition: background 0.5s ease-in-out;
  }

  .vaporwave {
    background: linear-gradient(45deg, #ff00ff, #00ffff);
    background-size: 400% 400%;
    animation: bgShift 8s infinite alternate;
    font-family: "Press Start 2P", cursive;
  }

  .lowbrow {
    background: repeating-linear-gradient(45deg, #ffcc00, #ff00ff 20%, #00ff00 40%);
    font-family: "Comic Sans MS", cursive;
  }

  .afrofuturism {
    background: radial-gradient(circle, #1b1b1b, #3e065f);
    color: white;
    font-family: "Orbitron", sans-serif;
  }

  @keyframes bgShift {
    0% { background-position: 0% 50%; }
    100% { background-position: 100% 50%; }
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 30px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

// Vaporwave Button
export const VaporButton = styled.button`
  background: rgba(255, 255, 255, 0.1);
  color: white;
  border: 2px solid white;
  padding: 12px 20px;
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  border-radius: 5px;
  text-transform: uppercase;
  font-weight: bold;
  backdrop-filter: blur(5px);
  position: relative;
  overflow: hidden;

  &:hover {
    background: white;
    color: black;
    transform: scale(1.1);
  }
`;

// Lowbrow Button
export const LowbrowButton = styled.button`
  background: #ff00ff;
  color: yellow;
  border: 3px solid black;
  font-size: 1.5rem;
  padding: 15px 25px;
  transform: rotate(-3deg);
  transition: all 0.3s ease-in-out;
  font-family: "Comic Sans MS", cursive;
  
  &:hover {
    transform: rotate(3deg) scale(1.1);
    background: yellow;
    color: black;
  }
`;

// Afrofuturism Button
export const AfroButton = styled.button`
  background: linear-gradient(90deg, #ff9800, #ff5722);
  color: white;
  border: 2px solid black;
  padding: 15px 30px;
  font-size: 1.3rem;
  text-transform: uppercase;
  transition: all 0.3s ease-in-out;
  
  &:hover {
    background: linear-gradient(90deg, #ff5722, #ff9800);
    transform: scale(1.1);
  }
`;
