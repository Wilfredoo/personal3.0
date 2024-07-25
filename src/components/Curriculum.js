import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;  // Changed from height to min-height
  padding: 20px;
  text-align: center;
  box-sizing: border-box;
  background-color: #f0f0f0;
  font-family: 'Arial', sans-serif;
  
  @media (max-width: 500px) {
    padding: 10px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 20px;
  width: 100%;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-end;
    justify-content: center;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
`;

const Button = styled.button`
  padding: 12px 30px;
  border: none;
  border-radius: 8px;
  background-color: #333;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  text-transform: uppercase;
  font-weight: bold;
  width: 200px;

  &:hover {
    background-color: #555;
  }
`;

const Experience = styled.div`
  color: #666;
  font-size: 0.9rem;
  margin-top: 5px;
`;

const WelcomeText = styled.h1`
  font-size: 2rem;
  color: #333;
  margin-bottom: 10px;

  @media (max-width: 500px) {
    font-size: 1.5rem;
    
  }
`;

const Description = styled.p`
  font-size: 1rem;
  color: #666;
  margin: 10px 0 20px 0;
  max-width: 600px;
  line-height: 30px;

  @media (max-width: 500px) {
    font-size: 0.9rem;
    line-height: 30px;
        padding: 1rem;
        text-align: justify;
  }
`;

const LanguageButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  border: 2px solid #333;
  border-radius: 8px;
  background-color: transparent;
  color: #333;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;
  text-transform: uppercase;
  font-weight: bold;

  &:hover {
    background-color: #E3A5C7;
  }

  @media (max-width: 500px) {
    font-size: 0.9rem;
    padding: 8px 18px;
  }
`;

const Curriculum = () => {
  const [language, setLanguage] = useState('EN');

  const handleDownload = (resumeType) => {
    const link = document.createElement('a');
    link.href = `${process.env.PUBLIC_URL}/Resume_${resumeType}_${language === 'EN' ? 'English' : 'German'}.pdf`;
    link.download = `Resume_${resumeType}_${language === 'EN' ? 'English' : 'German'}.pdf`;
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'EN' ? 'DE' : 'EN');
  };

  const welcomeText = language === 'EN' ? "Fancy a peek at my CV?" : "Neugierig auf meinen Lebenslauf?";
  const descriptionText = language === 'EN'
    ? "I've been doing a lot over the past decade, and navigating my unorthodox career journey can be challenging. To make things easier, I've crafted three different resumes that highlight my experience in my three core skill sets."
    : "Ich war in den letzten zehn Jahren sehr aktiv, und es kann eine Herausforderung sein, meinen unorthodoxen Karriereweg zu navigieren. Um es Ihnen einfacher zu machen, habe ich drei verschiedene Lebensläufe erstellt, die meine Erfahrungen in meinen drei Kernkompetenzen hervorheben.";

  return (
    <Wrapper>
      <WelcomeText>{welcomeText}</WelcomeText>
      <Description>{descriptionText}</Description>
      <ButtonContainer>
        <ButtonWrapper>
          <Button onClick={() => handleDownload('Entrepreneur')}>
            {language === 'EN' ? 'Entrepreneur' : 'Unternehmer'}
          </Button>
          <Experience>{language === 'EN' ? 'Since 2012' : 'Seit 2012'}</Experience>
        </ButtonWrapper>
        <ButtonWrapper>
          <Button onClick={() => handleDownload('Developer')}>
            {language === 'EN' ? 'Software Developer' : 'Software-Entwickler'}
          </Button>
          <Experience>{language === 'EN' ? 'Since 2018' : 'Seit 2018'}</Experience>
        </ButtonWrapper>
        <ButtonWrapper>
          <Button onClick={() => handleDownload('Filmmaker')}>
            {language === 'EN' ? 'Filmmaker' : 'Filmemacher'}
          </Button>
          <Experience>{language === 'EN' ? 'Since 2022' : 'Seit 2022'}</Experience>
        </ButtonWrapper>
      </ButtonContainer>
      <LanguageButton onClick={toggleLanguage}>
        {language === 'EN' ? 'Auf Deutsch wechseln' : 'Switch to English'}
      </LanguageButton>
    </Wrapper>
  );
};

export default Curriculum;
