import React from 'react';
import { Text, TextContainer, YoutubeIcon } from './styles';
import youtubeIcon from '../assets/images/youtube.png'; // Ensure the path is correct

const Filmmaker = () => (
  <TextContainer>
    <Text>One day back in 2022, I thought: why not make some short films?</Text>
    <Text>
      This tiny idea turned into an absurdly ambitious challenge—to make one a week until I had reached 52 films after a year.
    </Text>
    <Text>
    I fell short by less than half, but the result was still pretty good; festival selections and meeting great folks along the way.
    </Text>
    <Text>
    More, longer, better films are in sight.
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
