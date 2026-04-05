import React from 'react';
import { Text, TextContainer } from './styles';

const WhatImUpTo = () => (
  <TextContainer style={{ marginTop: 'clamp(20px, 10vh, 120px)' }}>
<Text>
  Currently, I am making <a href="/apps"> apps</a>, <a href="/board-games">board games</a>,{' '} starting a career as an
  <a href="https://www.instagram.com/wilfredocasas.actor/" target="_blank" rel="noopener noreferrer">actor</a>,{' '}
  and working on my first feature film, <a href="/healingisforgetting">Healing Is Forgetting</a>.
</Text>
  </TextContainer>
);

export default WhatImUpTo;
