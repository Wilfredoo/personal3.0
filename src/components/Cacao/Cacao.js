import React, { useState, useEffect, useRef } from 'react';
import {
  Container,
  // Section,
  // Title,
  // SectionTitle,
  // Info,
  // ToggleSymbol,
  // NormalButton,
  // Footer,
  // VideoWrapper,
  // StyledIframe,
  // TryChocolateButton,
  // ButtonContainer,
  HighlightContainer,
  EmphasizedText,
  PausedMessage,

} from './styles';

import translations from './translations';
// import OrderForm from './OrderForm';
import { useLocation } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Cacao = () => {
  const location = useLocation();
  const [language, setLanguage] = useState('en');
  // const [activeSection, setActiveSection] = useState('');
  const orderSectionRef = useRef(null);
  const [searchParams] = useSearchParams();
  const referralUsername = searchParams.get('referral');
  const [isPaused, setIsPaused] = useState(true); // State to manage the paused status
  const batchName = searchParams.get('batch');
  const t = translations[language];

  const ENGLISH_VIDEO_URL = "https://www.youtube.com/embed/wtpuxyX8xV4";
  const GERMAN_VIDEO_URL = "https://youtube.com/embed/MgcQt64ZxNg";
  // const videoUrl = language === 'de' ? GERMAN_VIDEO_URL : ENGLISH_VIDEO_URL;
  const navigate = useNavigate();

  useEffect(() => {
    // Set language based on path whenever the location changes
    setLanguage(location.pathname.includes('/kakao') ? 'de' : 'en');
  }, [location]);

  // const handleLanguageToggle = () => setLanguage(prevLang => prevLang === 'en' ? 'de' : 'en');

  // const toggleSection = (section) => setActiveSection(prevSection => prevSection === section ? '' : section);

  const toggleSection = (section) => {
    setActiveSection(prevSection => prevSection === section ? '' : section);
    if (section === 'processInfo') {
      // Ensure that the section is expanded
      setTimeout(() => {
        orderSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 0); // Timeout ensures the section is visible before scrolling
    }
  };
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  const sendWhatsAppMessage = () => {
    const message = "Let me know once I can get chocolate again!";
    const whatsappUrl = `https://wa.me/+4915781295360?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };
  

  function renderSharedMessage(language, referralUsername, batchName) {
    // Capitalize the first letter of batchName
    const capitalizedBatchName = capitalizeFirstLetter(batchName);
    
    const message = translations[language].sharedMessage
      .replace(/{referralUsername}/g, referralUsername)
      .replace(/{batchName}/g, capitalizedBatchName);
  
    return (
      <HighlightContainer>
        {message.split('\n').map((line, index) => {
          const lineElements = line.split(new RegExp(`(${referralUsername}|${capitalizedBatchName})`)).map((part, idx) => {
            if (part === referralUsername) {
              return <EmphasizedText key={idx}>{referralUsername}</EmphasizedText>;
            } else if (part === capitalizedBatchName) {
              return (
                <Link to={`/cacao/batch/${batchName}`} style={{ textDecoration: 'underline', color: 'inherit' }} key={idx}>
                  <EmphasizedText>{capitalizedBatchName}</EmphasizedText>
                </Link>
              );
            } else {
              return part;
            }
          });
  
          return <p key={index}>{lineElements}</p>;
        })}
      </HighlightContainer>
    );
  } 
  
  // const handleCheckOrderStatus = () => {
  //   const userInput = prompt(t.promptText);
  //   if (userInput) {
  //     const routePath = language === 'de' ? '/kakao/batch' : '/cacao/batch';
  //     navigate(`${routePath}/${userInput.trim().toLowerCase()}`); // Assumes batch names and usernames are stored in lowercase
  //   }
  // };

  // const handleTryChocolateClick = () => {
  //   toggleSection('processInfo');
  // };

  return (
    <Container>
      {referralUsername && batchName && renderSharedMessage(language, referralUsername, batchName)}
      {isPaused && (
        <>
        <PausedMessage>
          {"My chocolaterie is temporarily closed. If you'd like to know once I open it again, click here."}
          <button onClick={sendWhatsAppMessage}>
         {"Serious Chocolate Waiting List"}
       </button>
        </PausedMessage>
         
       </>
      )}
        {/* 
        
      <ButtonContainer>
        <NormalButton onClick={handleLanguageToggle}>{t.languageButton}</NormalButton>
        <NormalButton onClick={handleCheckOrderStatus}>
          {t.checkOrderStatus}
        </NormalButton>
        <TryChocolateButton onClick={handleTryChocolateClick}>
          {t.trySomeChocolate}
        </TryChocolateButton>
        
      </ ButtonContainer>
      <Title>{t.welcomeText}</Title>
      <Info>{t.introText}</Info>
      <VideoWrapper>
         <StyledIframe
          src={videoUrl}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </VideoWrapper>
      <Section>
        <SectionTitle onClick={() => toggleSection('chocolateInfo')}>
          {t.ingredientsProcesses}
          <ToggleSymbol>{activeSection === 'chocolateInfo' ? '−' : '+'}</ToggleSymbol>
        </SectionTitle>
        {activeSection === 'chocolateInfo' && (
          <Info>
            <ul>
              {t.chocolateInfo.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </Info>
        )}
      </Section> */}
      {/* <Section>
        <SectionTitle onClick={() => toggleSection('howItWorks')}>
          {t.whatMakesUnique}<ToggleSymbol>{activeSection === 'howItWorks' ? '−' : '+'}</ToggleSymbol>
        </SectionTitle>
        {activeSection === 'howItWorks' && (
          <Info>
            {t.uniqueChocolateText.map((text, index) => {
              // If it's a string, render it as a paragraph
              if (typeof text === 'string') {
                return <p key={index}>{text}</p>;
              }
              // If it's an array, map over it and create list items
              if (Array.isArray(text)) {
                return (
                  <ul key={index}>
                    {text.map((item, itemIndex) => (
                      <li key={itemIndex}>{item}</li>
                    ))}
                  </ul>
                );
              }
              return null;
            })}
          </Info>
        )}
      </Section> */}

      {/* <Section ref={orderSectionRef}>
        <SectionTitle onClick={() => toggleSection('processInfo')}>
          {t.processInfo}
          <ToggleSymbol>{activeSection === 'processInfo' ? '−' : '+'}</ToggleSymbol>
        </SectionTitle>
        {activeSection === 'processInfo' && (
          <>
            <Info>
              <ol>
                {t.orderInstructions.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ol>
            </Info>
            <OrderForm language={language} translations={t} />
          </>
        )}
      </Section>
      <Footer>
        {t.footer}
      </Footer> */}
    </Container>
  );
};

export default Cacao;
