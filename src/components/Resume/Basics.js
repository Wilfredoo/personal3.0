import React from 'react';
import styled from 'styled-components';

const ContactInfoWrapper = styled.div`
  border-radius: 8px;
  font-size: 1rem;
`;

const ContactItem = styled.div`
  margin-bottom: 0.5rem;
`;

const BackButton = styled.button`
  margin-top: 1rem;
  background: none;
  border: 1px solid #ccc;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  &:hover {
    background: #f0f0f0;
  }
`;


const Basics = ({onBack}) => {
  return (
    <>
      <ContactInfoWrapper>
        <ContactItem>www.wilfredocasas.com</ContactItem>
        <ContactItem>Frankfurt am Main, Berlin</ContactItem>
        <ContactItem>inbox@wilfredocasas.com</ContactItem>
        <ContactItem>+49 157-8129-5360</ContactItem>
        <ContactItem>English, German, Spanish & German Sign Language</ContactItem>
        <ContactItem>Driving License class B</ContactItem>
      </ContactInfoWrapper>
      <BackButton onClick={onBack}>Back to Overview</BackButton>
    </>
  );
};

export default Basics;
