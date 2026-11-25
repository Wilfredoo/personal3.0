import React from 'react';
import styled, { keyframes } from 'styled-components';

const messages = [
  { lang: 'en', text: 'Coming soon to East Asia' },
  { lang: 'ko', text: '곧 동아시아에서 만나요!' },
  { lang: 'zh-CN', text: '即将登陆东亚' },
  { lang: 'ja', text: 'まもなく東アジアへ！' },
];

const scroll = keyframes`
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
`;

const shift = keyframes`
  0%   { background-position: 0% 50%; }
  100% { background-position: 200% 50%; }
`;

const twinkle = keyframes`
  0%, 100% { opacity: 1; transform: scale(1) rotate(0deg); }
  50%      { opacity: 0.4; transform: scale(0.7) rotate(45deg); }
`;

const Strip = styled.div`
  position: relative;
  overflow: hidden;
  height: 34px;
  display: flex;
  align-items: center;
  background: linear-gradient(90deg, #ff3d8b, #ff8fd1, #a66bff, #4fd6ff, #ff3d8b);
  background-size: 200% 100%;
  animation: ${shift} 8s linear infinite;
  box-shadow: 0 2px 14px rgba(255, 61, 139, 0.35);

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

const Track = styled.div`
  display: flex;
  width: max-content;
  animation: ${scroll} 28s linear infinite;

  ${Strip}:hover & { animation-play-state: paused; }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

const Item = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.9rem;
  padding: 0 0.9rem;
  white-space: nowrap;
  font-family: 'Helvetica Neue', Arial, 'Apple SD Gothic Neo', 'Malgun Gothic', 'PingFang SC',
    'Microsoft YaHei', 'Hiragino Sans', 'Yu Gothic', 'Noto Sans CJK', sans-serif;
  font-size: 0.82rem;
  font-weight: 800;
  letter-spacing: 0.06em;
  color: #fff;
  text-shadow: 0 1px 0 rgba(120, 0, 70, 0.45), 0 0 8px rgba(255, 255, 255, 0.55);

  &:lang(en) { text-transform: uppercase; }
`;

const Sparkle = styled.span`
  display: inline-block;
  color: #fff59d;
  font-size: 1rem;
  text-shadow: 0 0 6px rgba(255, 245, 157, 0.9);
  animation: ${twinkle} 1.6s ease-in-out infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

// Enough copies to fill wide screens; the second half mirrors the first for a seamless loop.
const COPIES = 4;

const EastAsiaBanner = () => {
  const row = Array.from({ length: COPIES }).flatMap((_, c) =>
    messages.map((m, i) => (
      <Item key={`${c}-${i}`} lang={m.lang}>
        {m.text}
        <Sparkle aria-hidden="true">✦</Sparkle>
      </Item>
    ))
  );

  return (
    <Strip role="note" aria-label={messages.map(m => m.text).join(' · ')}>
      <Track aria-hidden="true">
        {row}
        {row.map(el => React.cloneElement(el, { key: `dup-${el.key}` }))}
      </Track>
    </Strip>
  );
};

export default EastAsiaBanner;
