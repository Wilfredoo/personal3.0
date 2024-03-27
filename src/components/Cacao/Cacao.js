import React, { useState, useEffect, useRef } from 'react';
import {
  Container,
  Section,
  Title,
  SectionTitle,
  Info,
  ToggleSymbol,
  LanguageButton,
  Footer,
  VideoWrapper,
  StyledIframe,
  TryChocolateButton,
  ButtonContainer
} from './styles';
import translations from './translations'; // Adjust the path as needed
import OrderForm from './OrderForm';
import { useLocation } from 'react-router-dom'; // Import useLocation hook


const Cacao = () => {
  const location = useLocation(); // Use the useLocation hook to get the current location object
  const [language, setLanguage] = useState('en');
  const [activeSection, setActiveSection] = useState('');
  const orderSectionRef = useRef(null); // Create a ref for the order section

  const t = translations[language];

  useEffect(() => {
    // Set language based on path whenever the location changes
    setLanguage(location.pathname.includes('/kakao') ? 'de' : 'en');
  }, [location]);

  const handleLanguageToggle = () => setLanguage(prevLang => prevLang === 'en' ? 'de' : 'en');

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

  const handleTryChocolateClick = () => {
    toggleSection('processInfo');
  };

  return (
    <Container>
      <ButtonContainer>
        <LanguageButton onClick={handleLanguageToggle}>{t.languageButton}</LanguageButton>
        <TryChocolateButton onClick={handleTryChocolateClick}>
          {t.trySomeChocolate}
        </TryChocolateButton>
      </ ButtonContainer>
      <Title>{t.welcomeText}</Title>
      <Info>{t.introText}</Info>
      <VideoWrapper>
        <StyledIframe
          src="https://www.youtube.com/embed/wtpuxyX8xV4"
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
      </Section>
      <Section>
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
      </Section>

      <Section ref={orderSectionRef}>
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
      </Footer>
    </Container>
  );
};

export default Cacao;
