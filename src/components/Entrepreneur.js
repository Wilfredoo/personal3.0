import React from 'react';
import { Text, TextContainer, DummyIcon } from './styles';
import github from '../assets/images/github.png'; // Ensure the path is correct

const Entrepreneur = () => (
  <TextContainer>
    <Text>
      For over a decade, I’ve started a dozen ideas across three different cities, some which worked, most which didn’t.
    </Text>
    <Text>
  Successes include <a href="https://www.jobdirecto.com" target="_blank" rel="noopener noreferrer">Jobdirecto</a>, connecting thousands of Hispanic immigrants with jobs in New York, and <a href="https://boardgamegeek.com/boardgame/342455/bamberg" target="_blank" rel="noopener noreferrer">Bamberg</a>, a board game with global distribution, now evolving into <a href="https://www.instagram.com/play_ayakucho/" target="_blank" rel="noopener noreferrer">Ayakucho</a>.
</Text>

<Text>
  I now apply this experience at <a href="https://www.heidi-hire.com/en/home" target="_blank" rel="noopener noreferrer">Heidi</a>, using my unorthodox thinking and guerrilla-style approach to lead business development and operations in South America.
</Text>

<a href="https://github.com/Wilfredoo" target="_blank" rel="noopener noreferrer">
      <DummyIcon src={github} alt="github" />
    </a>
  </TextContainer>
);

export default Entrepreneur;
