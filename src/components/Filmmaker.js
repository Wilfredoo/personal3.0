import React from 'react';
import { Text, TextContainer, YoutubeIcon } from './styles';
import youtubeIcon from '../assets/images/youtube.png'; // Make sure the path matches your file structure

// Assuming YoutubeIcon is a styled component for displaying icons. If it's an image tag, you should use <img> instead.
const Filmmaker = () => (
  <TextContainer>
    <Text>After the tech industry layoffs in 2022 and with lots of free time on my hands, I thought: why not make some short films?</Text>
    <Text>This quickly turned into a challenge that was as absurd as it was ambitious: to make a short film a week until I reached 52 after a year.</Text>
    <Text>I fell short by less than half, but along the way, I met great people and even got <a href="https://www.interfilm.de/interfilm-festival-2023/filmsuche/?tx_interfilmfestival_filmlist%5BeventItem%5D=2627&cHash=fc313cc06c5794abd605c18a74f5770f" target="_blank" rel="noopener noreferrer"> one of our shorts </a> selected at Interfilm 2023.</Text>
    <Text>Below is my YouTube channel, which contains not only our films but also serves as an artsy audiovisual outlet for self-expression.</Text>
    <Text>Oh, and more films are in the making.</Text>
    <a href="https://www.youtube.com/channel/UC49b2y2ABFThhLKsmlC6KAw" target="_blank" rel="noopener noreferrer"><YoutubeIcon src={youtubeIcon} alt="YouTube" /></a>
  </TextContainer>
);

export default Filmmaker;
