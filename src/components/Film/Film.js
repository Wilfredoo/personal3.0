import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: #fff;
  color: #000;
  font-family: "Arial", sans-serif;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
`;

const Button = styled.button`
  background: #000;
  color: #fff;
  font-size: 3vw;
  font-weight: bold;
  border: none;
  width: 100%;
  padding: 30px;
  margin: 5px 0;
  text-transform: uppercase;
  cursor: pointer;
  &:hover {
    background: #ff0000;
  }
`;

const Film = () => {
  const navigate = useNavigate();

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Filmmaker_Resume_German.pdf';
    link.download = 'Filmmaker_Resume_German.pdf';
    link.click();
  };

  return (
    <Container>
      <Button onClick={() => window.open("https://www.youtube.com/playlist?list=PLmT80T_P4eJZv_n7VBQzn-aGZZjZ7_wxE", "_blank")}>SHORTS</Button>
      <Button onClick={() => navigate("/videography")}>SERVICES</Button>
      <Button onClick={downloadResume}>RESUME</Button>
    </Container>
  );
};

export default Film;
