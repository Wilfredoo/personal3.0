import React from 'react';
import { Text, TextContainer, YoutubeIcon } from './styles';
import youtubeIcon from '../assets/images/youtube.png'; // Make sure the path matches your file structure

// Assuming YoutubeIcon is a styled component for displaying icons. If it's an image tag, you should use <img> instead.
const Filmmaker = () => (
  <TextContainer>
    <Text>After a massive layoff in 2022, I thought, why not make some short films?</Text>
    <Text>This quickly turned into an absurd and ambitious goal: to make a short film a week and have 52 after a year.</Text>
    <Text>I fell short by half, ending up with just 21 shorts, but I met some great colleagues and even got a selection for <a href="https://www.interfilm.de/interfilm-festival-2023/filmsuche/?tx_interfilmfestival_filmlist%5BeventItem%5D=2627&cHash=fc313cc06c5794abd605c18a74f5770f" target="_blank" rel="noopener noreferrer"> one of our shorts </a> at Interfilm 2023.</Text>
    <Text>Below is my youtube channel, which contains not only our films but also a bunch of artsy experiments.</Text>
    <a href="YOUR_YOUTUBE_CHANNEL_LINK" target="_blank" rel="noopener noreferrer"><YoutubeIcon src={youtubeIcon} alt="YouTube" /></a>
  </TextContainer>
);

export default Filmmaker;
