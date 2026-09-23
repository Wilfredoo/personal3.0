import React from 'react';
import { Text, TextContainer } from './styles';

const WhatImUpTo = () => (
  <TextContainer style={{ marginTop: 'clamp(20px, 10vh, 120px)' }}>
<Text>
I'm working on my first short film, <a href="/healingisforgetting">Healing Is Forgetting</a>.
</Text>
<Text>
I also design <a href="/boardgames">board games</a>.
</Text>
  </TextContainer>
);

export default WhatImUpTo;
