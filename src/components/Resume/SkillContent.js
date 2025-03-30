import React from 'react';
import styled from 'styled-components';

// Empty Styled Components

const SkillDetails = styled.div`
  // Add styles later
`;

const BackButton = styled.button`
  // Add styles later
  cursor: pointer;
  font-weight: bold;
`;

const SectionTitle = styled.div`
  // Add styles later
`;

const SectionDescription = styled.div`
  // Add styles later
`;

const SectionExperience = styled.div`
  // Add styles later
`;

const SkillContent = ({ title, description, experience, onBack }) => (
  <SkillDetails>
    <SectionTitle>{title}</SectionTitle>
    <SectionDescription>{description}</SectionDescription>
    <SectionTitle>Experience</SectionTitle>
    <SectionExperience>{experience}</SectionExperience>
    <BackButton onClick={onBack}>Back to Overview</BackButton>
  </SkillDetails>
);

export default SkillContent;
