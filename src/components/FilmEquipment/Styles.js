import styled, { keyframes } from 'styled-components';

const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

export const EquipmentContainer = styled.div`
  max-width: 700px;
  margin: 2rem auto;
  padding: 2rem;
  background: linear-gradient(135deg, #2c3e50, #8e44ad, #f39c12);
  background-size: 200% 200%;
  animation: ${gradientAnimation} 10s ease infinite;
  border-radius: 12px;
  font-family: 'Montserrat', sans-serif;
  color: #ecf0f1;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.7);
  border: 2px solid rgba(236, 240, 241, 0.3);
`;

export const EquipmentHeader = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 1.5rem;
  color: #f1c40f;
  border-bottom: 2px solid #f39c12;
  padding-bottom: 0.5rem;
`;

export const SectionTitle = styled.h3`
  font-size: 1.8rem;
  margin-top: 2rem;
  margin-bottom: 1rem;
  color: #f39c12;
  border-bottom: 1px solid #e67e22;
  padding-bottom: 0.3rem;
`;

export const EquipmentList = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 1.5rem;
`;

export const EquipmentItem = styled.li`
  font-size: 1.1rem;
  padding: 0.5rem 0;
  border-bottom: 1px solid rgba(236, 240, 241, 0.3);
  &:last-child {
    border-bottom: none;
  }
`;

export const VideoEmbed = styled.div`
  position: relative;
  padding-bottom: 56.25%; /* 16:9 ratio */
  height: 0;
  overflow: hidden;
  margin-bottom: 1.5rem;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: none;
  }
`;

export const ContactLink = styled.a`
  color: #f39c12;
  text-decoration: none;
  font-weight: bold;
  &:hover {
    text-decoration: underline;
  }
`;

export const TranslateButton = styled.button`
  display: block;
  margin: 2rem auto 0;
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  font-weight: bold;
  text-transform: uppercase;
  background: linear-gradient(45deg, #2c3e50, #8e44ad);
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.3s;
  &:hover {
    background: #34495e;
  }
`;
