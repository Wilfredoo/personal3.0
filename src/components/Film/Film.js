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

const Title = styled.h1`
  font-size: 8vw;
  font-weight: 900;
  background: #000;
  color: #fff;
  padding: 10px;
  margin: 0;
  width: 100%;
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
  return (
    <Container>
      <Button onClick={() => navigate("/films")}>SHORTS</Button>
      <Button onClick={() => navigate("/videography")}>VIDEOGRAPHY</Button>
      <Button onClick={() => navigate("/cv")}>RESUME</Button>
      <Button onClick={() => navigate("/acting")}>ACTING</Button>
    </Container>
  );
};

export default Film;
