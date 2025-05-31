import React from 'react';
import { Text, TextContainer, LinkedinIcon } from './styles';
import linkedinIcon from '../assets/images/linkedin.png'; // Ensure the path is correct

const Entrepreneur = () => (
  <TextContainer>
    <Text>
      For over a decade, I’ve started a dozen ideas at least. Most did not work, but some did.
    </Text>
    <Text>
  One of them is <a href="https://www.jobdirecto.com" target="_blank" rel="noopener noreferrer">Jobdirecto</a>, a platform connecting thousands of Hispanic immigrants with jobs in New York.
</Text>
    <Text>
  
  Another is <a href="https://boardgamegeek.com/boardgame/342455/bamberg" target="_blank" rel="noopener noreferrer">Bamberg</a>, a board game with global distribution, now evolving into <a href="https://www.instagram.com/play_ayakucho/" target="_blank" rel="noopener noreferrer">Ayakucho</a>.
</Text>


<a
      href="https://www.linkedin.com/in/wilfredocasas/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <LinkedinIcon src={linkedinIcon} alt="Linkedin" />
    </a>  </TextContainer>
);

export default Entrepreneur;
