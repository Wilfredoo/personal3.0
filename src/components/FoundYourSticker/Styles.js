import styled from 'styled-components';

export const Container = styled.div`
  max-width: 600px;
  margin: auto;
  padding: 20px;
  font-family: Arial, sans-serif;
  color: #333;
`;

export const Title = styled.h1`
  color: #3498db;
`;

export const Subtitle = styled.h2`
  color: #2980b9;
`;

export const Button = styled.button`
  background: #3498db;
  border: none;
  color: white;
  padding: 5px 20px;
  margin: 10px 0;
  border-radius: 5px;
  cursor: pointer;
  height: 50px;

  &:hover {
    background: #2980b9;
  }
`;

export const WhatsappButton = styled.button`
  background: #2ecc71;
  border: none;
  color: white;
  padding: 5px 10px;
  margin: 10px 0;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  height: 50px;
  display: flex;
  &:hover {
    background: #27ae60;
  }
`;

export const ContactInfo = styled.p`
  color: #16a085;
  margin-top: 20px;
`;

export const LastUpdated = styled.p`
  font-style: italic;
`;
