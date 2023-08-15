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

export const CopyButton = styled.button`
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

  &:hover {
    background: #27ae60;
  }
`;

export const ContactInfo = styled.p`
  color: #16a085;
  margin-top: 20px;
`;

export const CopyIcon = styled.img`
  width: 16px;
  height: 16px;
  margin-right: 5px;
`;

export const ConfirmationMessage = styled.div`
  position: fixed;         // Fix the position on the screen
  bottom: 20px;            // Position it 20px from the bottom
  left: 50%;               // Center it horizontally
  transform: translateX(-50%); // Ensure it's perfectly centered
  background-color: #2ecc71; // Green background
  color: white;            // White text color
  padding: 10px 20px;      // Some padding for aesthetics
  border-radius: 5px;      // Rounded corners
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); // Slight shadow for depth
  z-index: 1000;           // High z-index to ensure it's on top of other elements
  text-align: center;
  width: max-content;
`;

export const LastUpdated = styled.p`
  font-style: italic;
`;
