import React, { useState } from 'react';
import styled from 'styled-components';
import ReferenceLetter from './Reference.js';
import Basics from './Basics.js';
import SkillContent from './SkillContent.js';

const Wrapper = styled.div`
  // Add styles later
`;


const SkillSection = styled.div`
  // Add styles later
`;

const SkillButton = styled.button`
  // Add styles later
`;



// Styled Components for Header
const Header = styled.div`
  // Add styles later
`;

const Title = styled.h1`
  // Add styles later
`;

const Summary = styled.p`
  // Add styles later
`;





const Resume = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);

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
      <Header>
        <h1>Wilfredo Casas</h1>
        <p>This is my interactive resume. PDF resumes are so passé, I'm currently looking for a job—if you got one, give it to me!</p>
      </Header>
      <Basics />

      {/* Render Skill Buttons only when no skill is selected */}
      {selectedSkill === null && (
        <SkillSection>
          <SkillButton onClick={() => handleSelectSkill('entrepreneur')}>
            Entrepreneur
          </SkillButton>
          <SkillButton onClick={() => handleSelectSkill('developer')}>
            Developer
          </SkillButton>
          <SkillButton onClick={() => handleSelectSkill('filmmaker')}>
            Filmmaker
          </SkillButton>
        </SkillSection>
      )}

      {/* Render Selected Skill */}
      {selectedSkill && (
        <SkillContent
          title={skillData[selectedSkill].title}
          description={skillData[selectedSkill].description}
          experience={skillData[selectedSkill].experience}
          onBack={handleBackToDefault}
        />
      )}

      {/* Show the reference letter button if skill is selected */}
      {selectedSkill && <ReferenceLetter />}
    </Wrapper>
  );
};

export default Resume;
