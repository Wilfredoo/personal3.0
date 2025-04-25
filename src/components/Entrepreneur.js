import React from 'react';
import { Text, TextContainer, LinkedinIcon } from './styles';
import linkedinIcon from '../assets/images/linkedin.png'; 


const Entrepreneur = () => (
  <>
    <TextContainer>
      <Text>
        For over a decade, I’ve started a dozen ideas across three different cities. Most did not work, but some did.
      </Text>
      <Text>
        Successes include <a href="https://www.jobdirecto.com" target="_blank" rel="noopener noreferrer">Jobdirecto</a>, connecting thousands of Hispanic immigrants with jobs in New York, and <a href="https://boardgamegeek.com/boardgame/342455/bamberg" target="_blank" rel="noopener noreferrer">Bamberg</a>, a board game with global distribution, now evolving into <a href="https://www.instagram.com/play_ayakucho/" target="_blank" rel="noopener noreferrer">Ayakucho</a>.
      </Text>

      <Text>
        I now apply this experience at <a href="https://www.heidi-hire.com/en/home" target="_blank" rel="noopener noreferrer">heidi</a>, using my unorthodox thinking and guerrilla-style approach to lead business development and operations in South America.
      </Text>
      <a
        href="https://www.linkedin.com/in/wilfredocasas/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <LinkedinIcon src={linkedinIcon} alt="Linkedin" />
      </a>
    </TextContainer>
  </>
);

export default Entrepreneur;
