import React, { useState } from 'react';
import styled from 'styled-components';
import copyIcon from '../assets/images/copy.png'; // adjust this according to your file path

const Container = styled.div`
  max-width: 600px;
  margin: auto;
  padding: 20px;
  font-family: Arial, sans-serif;
  color: #333;
`;

const Title = styled.h1`
  color: #3498db;
`;

const Subtitle = styled.h2`
  color: #2980b9;
`;

const Button = styled.button`
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

const CopyButton = styled.button`
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


const ContactInfo = styled.p`
  color: #16a085;
  margin-top: 20px;
`;

const CopyIcon = styled.img`
  width: 16px;
  height: 16px;
  margin-right: 5px;
`;

const ConfirmationMessage = styled.div`
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

const LastUpdated = styled.p`
  font-style: italic;
`;


const FoundYourSticker = () => {
    const [status] = useState({
        flat: 'not yet found',
        taxAdvisor: 'not yet found',
        job: 'not yet found'
      });

  const [showContact, setShowContact] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [lastUpdated, setLastUpdated] = useState(new Date().toISOString());
  const contactNumber = "+4915781295360";

  const handleClick = () => {
    setShowContact(true);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(contactNumber);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000); // hide after 2 seconds
  };

  const formatDate = (isoString) => {
    const date = new Date(isoString);
    
    const getOrdinal = (n) => {
      const s = ["th", "st", "nd", "rd"],
            v = n % 100;
      return n + (s[(v-20)%10] || s[v] || s[0]);
    }
  
    const monthNames = [
      "January", "February", "March", "April", "May", "June", 
      "July", "August", "September", "October", "November", "December"
    ];
  
    return `${getOrdinal(date.getDate())} of ${monthNames[date.getMonth()]} ${date.getFullYear()}`;
  };  

  return (
    <Container>
      <Title>Hey buddy,</Title>
      <p>Nice that you made it here. Yes, I'm actually offering a reward of 100 € for anyone that successfully refers me to either the right flat, job and tax advisor in Berlin.</p>
      <p>Got a recommendation?</p>

      <Button onClick={handleClick}>YES</Button>

      {showContact && (
      <div>
        <ContactInfo>Simply write me on Whatsapp - or Signal or Telegram - and we'll take it from there:</ContactInfo>
        <CopyButton onClick={handleCopy}>
          <CopyIcon src={copyIcon} alt="Copy" />
          {contactNumber}
        </CopyButton>
        {isCopied && <ConfirmationMessage>Copied to clipboard!</ConfirmationMessage>}

      </div>
    )}

      <Subtitle>Requirements:</Subtitle>
      <ul>
        <li>A Flat: Inner Ring Bahn, Anmeldung Required, max 800€</li>
        <li>A Tax Advisor: English Speaking, Tech-Savvy, Startup-Friendly</li>
        <li>A Job: as a JS Developer, Growth Hacker or Video Editor</li>
      </ul>

      <Subtitle>Current status of the search:</Subtitle>
      <ul>
        <li>Flat: {status.flat}</li>
        <li>Tax Advisor: {status.taxAdvisor}</li>
        <li>Job: {status.job}</li>
      </ul>
      <LastUpdated>Last updated on {formatDate(lastUpdated)}</LastUpdated>
    </Container>
  );
};

export default FoundYourSticker;
