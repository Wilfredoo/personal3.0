import React from 'react';
import { Text, TextContainer } from './styles';
import github from '../assets/images/github.png';
import {
    GithubIcon
} from './styles';

const SoftwareDeveloper = () => (
  <TextContainer>
    <Text>I learned to code back in 2018 after moving to Berlin.</Text>
    <Text>Since then, I've built and contributed to numerous apps and websites using JavaScript, React, React Native, Node.js, and MongoDB.</Text>
    <Text>Later, I joined <a href="https://www.endava.com/" target="_blank" rel="noopener noreferrer">Endava</a>, where I worked for 2 years on different projects, the most notable being <a href="https://www.ardplus.de/" target="_blank" rel="noopener noreferrer">ARD+ for Smart TVs</a>.</Text>
    <Text>Currently, I assist with the development of our site at <a href="https://www.jobdirecto.com" target="_blank" rel="noopener noreferrer">Jobdirecto</a>, where my best friend, <a href="https://jneidel.com/" target="_blank" rel="noopener noreferrer">Jonathan</a>, serves as the CTO.</Text>

    <GithubIcon src={github} alt="github" />

  </TextContainer>
);

export default SoftwareDeveloper;
