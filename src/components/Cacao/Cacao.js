import React, { useState } from 'react';
import {
  Container,
  Section,
  Title,
  SectionTitle,
  Info,
  ToggleSymbol,
  OrderFormStyle,
  Label,
  Input,
  SubmitButton,
  LanguageButton,
  Footer
} from './styles';
import translations from './translations'; // Ensure the path to your translations file is correct
import OrderForm from './OrderForm';

const Cacao = () => {
  const [language, setLanguage] = useState('en');
  const [activeSection, setActiveSection] = useState('');
  const [quantity, setQuantity] = useState('');

  const t = translations[language];

  const handleLanguageToggle = () => {
    setLanguage(prevLang => prevLang === 'en' ? 'de' : 'en');
  };

  const toggleSection = (section) => {
    setActiveSection(prevSection => prevSection === section ? '' : section);
  };

  return (
    <Container>
      <LanguageButton onClick={handleLanguageToggle}>{t.languageButton}</LanguageButton>

      <Title>{t.welcomeText}</Title>

      <Section>
        <SectionTitle onClick={() => toggleSection('chocolateInfo')}>
          {t.ingredientsProcesses}<ToggleSymbol>{activeSection === 'chocolateInfo' ? '−' : '+'}</ToggleSymbol>
        </SectionTitle>
        {activeSection === 'chocolateInfo' && (
          <Info>{t.chocolateInfo}</Info>
        )}
      </Section>

      <Section>
        <SectionTitle onClick={() => toggleSection('howItWorks')}>
          {t.whatMakesUnique}<ToggleSymbol>{activeSection === 'howItWorks' ? '−' : '+'}</ToggleSymbol>
        </SectionTitle>
        {activeSection === 'howItWorks' && (
          <Info>{t.uniqueChocolateText}</Info>
        )}
      </Section>

      <Section>
        <SectionTitle onClick={() => toggleSection('orderForm')}>
          {t.howToGetBar}<ToggleSymbol>{activeSection === 'orderForm' ? '−' : '+'}</ToggleSymbol>
        </SectionTitle>
        {activeSection === 'orderForm' && (
          <>
          <Info>{t.orderInstructions}</Info>
          <OrderForm />
          </>
        )}
      </Section>
      <Footer>
        Something not working as expected? Send me a message on Signal or WhatsApp to +4915781295360 with your complaints.
      </Footer>
    </Container>
  );
};

export default Cacao;
