import React from 'react';
import { Text, TextContainer, YoutubeIcon } from './styles';
import youtubeIcon from '../assets/images/youtube.png'; // Ensure the path is correct

const Filmmaker = () => (
  <TextContainer>
    <Text>One day I thought: why not make some short films?</Text>
    <Text>
      This idea turned into an absurd and ambitious challenge—to make one short a week until I had reached 52 in a year.
    </Text>
    <Text>
    I fell short by less than half, but along came festival selections, inspiring folks, and a clear vision for the films to come.
</Text>
    <a
      href="https://www.youtube.com/channel/UC49b2y2ABFThhLKsmlC6KAw"
      target="_blank"
      rel="noopener noreferrer"
    >
      <YoutubeIcon src={youtubeIcon} alt="YouTube" />
    </a>
  </TextContainer>
);

export default Filmmaker;
