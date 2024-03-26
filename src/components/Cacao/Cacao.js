import React, { useState } from 'react';
import {
  Container,
  Section,
  Title,
  SectionTitle,
  Info,
  ToggleSymbol,
  LanguageButton,
  Footer
} from './styles';
import translations from './translations'; // Adjust the path as needed
import OrderForm from './OrderForm';

const Cacao = () => {
  const [language, setLanguage] = useState('en');
  const [activeSection, setActiveSection] = useState('');

  const t = translations[language];

  const handleLanguageToggle = () => setLanguage(prevLang => prevLang === 'en' ? 'de' : 'en');

  const toggleSection = (section) => setActiveSection(prevSection => prevSection === section ? '' : section);

  return (
    <Container>
      <LanguageButton onClick={handleLanguageToggle}>{t.languageButton}</LanguageButton>
      <Title>{t.welcomeText}</Title>
      <Info>{t.introText}</Info>
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

      <Section>
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
