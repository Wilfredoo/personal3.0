import React from 'react';
import styled from 'styled-components';

// Styled Components for ContactInfo
const ContactInfoWrapper = styled.div`

`;

const ContactItem = styled.div`

`;

const Basics = () => {
  return (
    <ContactInfoWrapper>
      <ContactItem>www.wilfredocasas.com</ContactItem>
      <ContactItem>Frankfurt am Main, Berlin</ContactItem>
      <ContactItem>inbox@wilfredocasas.com</ContactItem>
      <ContactItem>+49 157-8129-5360</ContactItem>
      <ContactItem>English, German, Spanish & German Sign Language</ContactItem>
      <ContactItem>Driving License class B</ContactItem>

    </ContactInfoWrapper>
  );
};

export default Basics;
