import React, { useState } from 'react';
import styled from 'styled-components';
import Basics from './Basics.js';
import SkillContent from './SkillContent.js';

const Wrapper = styled.div`
  padding: 2rem;
  font-family: sans-serif;
  line-height: 1.6;
  width: 100vw;
height: 100vh;
background: #fefefe;
`;

const Header = styled.div`
  margin-bottom: 2rem;
`;

const SkillSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const SkillButton = styled.span`
  cursor: pointer;
  font-size: 1.2rem;
  color: #0070f3;
  text-decoration: underline;
  &:hover {
    color: #0051a3;
  }
`;


const Resume = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [showResume, setShowResume] = useState(false);
  const [introStep, setIntroStep] = useState(0);

  const handleSelectSkill = (skill) => {
    setSelectedSkill(skill);
  };

  const handleBackToDefault = () => {
    setSelectedSkill(null);
  };

  const skillData = {

    entrepreneur: {
      title: "Entrepreneur",
      description: "A decade of entrepreneurial experience in launching businesses across various countries.",
      experience: "Founded JobDirecto, connecting Hispanic immigrants with job opportunities in New York."
    },
    developer: {
      title: "Developer",
      description: "Full-stack developer with extensive experience in web and mobile applications.",
      experience: "Built and maintained web and mobile applications in React & React Native. Collaborated in cross-functional teams to implement features for smart TV apps."
    },
    filmmaker: {
      title: "Filmmaker",
      description: "Self-taught indie filmmaker with 22 short films, focusing on creative storytelling.",
      experience: "Directed and produced several award-winning short films, including 'The Invasion' and 'BVG Magic Story.'"
    }
  };

  return (
    <Wrapper>
      {!showResume ? (
        <Header>
          {introStep === 0 && (
            <>
              <p>PDF resumes are so passé. There is no way for the reader to, for example, translate the resume to their language or preference or see only the information relevant to them.</p>
              <SkillButton onClick={() => setIntroStep(1)}>Keep telling me about it</SkillButton>
            </>
          )}
  
          {introStep === 1 && (
            <>
              <p>Annoying, innit?</p>
              <p>That’s why I decided to ditch the old PDFs for a digital, interactive resume.</p>
              <SkillButton onClick={() => setIntroStep(2)}>Alright, I’m intrigued</SkillButton>
            </>
          )}
  
          {introStep === 2 && (
            <>
              <p>This format lets you explore what matters to *you* — tech, film, entrepreneurship, or just the basics.</p>
              <SkillButton onClick={() => setShowResume(true)}>Yes, take me to the future</SkillButton>
              <SkillButton onClick={() => {
                alert("Redirecting you to a place where things are a little... more familiar.");
                window.open('https://www.aarp.org', '_blank');
              }}>
                Nah, I am old school
              </SkillButton>
            </>
          )}
        </Header>
      ) : (
        <>
          {selectedSkill === 'basics' && <Basics onBack={handleBackToDefault} />}
          {selectedSkill === null && (
            <SkillSection>
              <SkillButton onClick={() => handleSelectSkill('basics')}>Basics</SkillButton>
              <SkillButton onClick={() => handleSelectSkill('entrepreneur')}>Entrepreneur</SkillButton>
              <SkillButton onClick={() => handleSelectSkill('developer')}>Developer</SkillButton>
              <SkillButton onClick={() => handleSelectSkill('filmmaker')}>Filmmaker</SkillButton>
            </SkillSection>
          )}
          {['entrepreneur', 'developer', 'filmmaker'].includes(selectedSkill) && (
            <SkillContent
              title={skillData[selectedSkill].title}
              description={skillData[selectedSkill].description}
              experience={skillData[selectedSkill].experience}
              onBack={handleBackToDefault}
            />
          )}
        </>
      )}
    </Wrapper>
  );
}
export default Resume;
