import React from 'react';
import { Text, TextContainer } from './styles';

const WhatImUpTo = () => (
  <TextContainer style={{ marginTop: 'clamp(20px, 10vh, 120px)' }}>
<Text>
  Currently, I create <a href="/apps"> apps</a> and <a href="/board-games">board games</a>,{' '}pursue
  <a href="https://www.instagram.com/wilfredocasas.actor/" target="_blank" rel="noopener noreferrer">acting</a>,{' '}
  and work on my first feature film, <a href="/healingisforgetting">Healing Is Forgetting</a>.
</Text>
  </TextContainer>
);

export default WhatImUpTo;
