import React, { useState } from 'react';
import copyIcon from '../../assets/images/copy.png'; // adjust this according to your file path

import {
  Container,
  Title,
  Subtitle,
  Button,
  CopyButton,
  ContactInfo,
  CopyIcon,
  ConfirmationMessage,
  LastUpdated
} from './Styles';

const FoundYourSticker = () => {
  const [status] = useState({
    flat: 'not yet found',
    taxAdvisor: 'not yet found',
    job: 'not yet found'
  });

  const [showContact, setShowContact] = useState(false);
  const contactNumber = "+4915781295360";

  const handleClick = () => {
    setShowContact(true);

    if (window.gtag) { // Make sure gtag is available
      window.gtag('event', 'click', {
          'event_category': 'button',
          'event_label': 'YES Button Clicked',
          'value': 1
      });
  }

  };

  const openWhatsapp = () => {
    const whatsappUrl = `https://wa.me/4915781295360`; 
    window.open(whatsappUrl, '_blank'); // This opens a new tab or window
  };

  const getHash = (str) => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash |= 0; // Convert to 32bit integer
    }
    return hash;
  };

  const getLastUpdatedDate = () => {
    const now = new Date();
    const yearMonthString = `${now.getFullYear()}-${now.getMonth()}`;
    const hash = getHash(yearMonthString);
    const interval = (hash % 3) + 3; // Get a number between 3 and 5

    let lastUpdatedDay = Math.floor(now.getDate() / interval) * interval;
    lastUpdatedDay = lastUpdatedDay || interval; // Ensure it's not 0

    return new Date(now.getFullYear(), now.getMonth(), lastUpdatedDay);
  };

  const formatDate = (date) => {
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
        <ContactInfo>Simply write me on Whatsapp and we'll take it from there:</ContactInfo>
        <CopyButton onClick={openWhatsapp}>
          <CopyIcon src={copyIcon} alt="Copy" />
          {contactNumber}
        </CopyButton>
        {/* {isCopied && <ConfirmationMessage>Copied to clipboard!</ConfirmationMessage>} */}

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
      <LastUpdated>Last updated on {formatDate(getLastUpdatedDate())}</LastUpdated>
    </Container>
  );
};

export default FoundYourSticker;
