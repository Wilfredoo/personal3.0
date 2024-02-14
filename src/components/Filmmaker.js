import React from 'react';
import { Text, TextContainer, YoutubeIcon } from './styles';
import youtubeIcon from '../assets/images/youtube.png'; // Make sure the path matches your file structure

// Assuming YoutubeIcon is a styled component for displaying icons. If it's an image tag, you should use <img> instead.
const Filmmaker = () => (
  <TextContainer>
    <Text>After the tech industry layoffs in 2022, I thought: why not make some short films?</Text>
    <Text>This quickly turned into an absurd and ambitious goal: to make a short film a week and have 52 after a year.</Text>
    <Text>I fell short by less than half the target, but on the way I met great people, had fun and even got a selection for <a href="https://www.interfilm.de/interfilm-festival-2023/filmsuche/?tx_interfilmfestival_filmlist%5BeventItem%5D=2627&cHash=fc313cc06c5794abd605c18a74f5770f" target="_blank" rel="noopener noreferrer"> one of our shorts </a> at Interfilm 2023.</Text>
    <Text>Below is my youtube channel, which contains not only our films but also serves as an artsy audiovisual self-expression outlet.</Text>
    <a href="https://www.youtube.com/channel/UC49b2y2ABFThhLKsmlC6KAw" target="_blank" rel="noopener noreferrer"><YoutubeIcon src={youtubeIcon} alt="YouTube" /></a>
  </TextContainer>
);

export default Filmmaker;
