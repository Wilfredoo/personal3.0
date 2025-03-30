import React from 'react';
import { Text, TextContainer } from './styles';
import github from '../assets/images/github.png';
import {
  GithubIcon
} from './styles';

const SoftwareDeveloper = () => (
  <TextContainer>
    <Text>In recent years, I built numerous software apps using technologies like React and Node.js.</Text>
    <Text>Later, I spent 2 years at <a href="https://www.endava.com/" target="_blank" rel="noopener noreferrer">Endava</a>, contributing to various projects, most notably <a href="https://www.ardplus.de/" target="_blank" rel="noopener noreferrer">ARD+ for Smart TVs</a>.</Text>
    <Text>Currently, I help with the development of our site <a href="https://www.jobdirecto.com" target="_blank" rel="noopener noreferrer">Jobdirecto</a>, where my best friend, <a href="https://jneidel.com/" target="_blank" rel="noopener noreferrer">Jonathan</a>, serves as the CTO.</Text>
    <a href="https://github.com/Wilfredoo" target="_blank" rel="noopener noreferrer"> <GithubIcon src={github} alt="github" /></a>

  </TextContainer>
);

export default SoftwareDeveloper;
