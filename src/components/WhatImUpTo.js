import React from 'react';
import { Text, TextContainer } from './styles';

const WhatImUpTo = () => (
  <TextContainer style={{ marginTop: 'clamp(20px, 10vh, 120px)' }}>
<Text>
  I am currently creating <a href="/apps">cool apps</a>, designing <a href="/board-games">board games</a>,{' '}
  <a href="https://www.instagram.com/wilfredocasas.actor/" target="_blank" rel="noopener noreferrer">acting</a>,{' '}
  and working on my first feature film, <a href="/healingisforgetting">Healing Is Forgetting</a>.
</Text>
  </TextContainer>
);

export default WhatImUpTo;
