import styled from 'styled-components';

export const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 20px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  line-height: 1.6;
  color: #333;
  
  @media (max-width: 768px) {
    padding: 24px 16px;
  }
`;

export const Header = styled.header`
  margin-bottom: 40px;
  padding-bottom: 24px;
  border-bottom: 1px solid #e1e4e8;
  
  @media (max-width: 768px) {
    margin-bottom: 32px;
    padding-bottom: 20px;
  }
`;

export const HeaderContent = styled.div`
  margin-bottom: 16px;
`;

export const FilmBadge = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
  color: #666;
  font-size: 14px;
  
  span {
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }
  
  @media (max-width: 768px) {
    font-size: 13px;
    gap: 6px;
  }
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 600;
  color: #000;
  margin-bottom: 12px;
  line-height: 1.2;
  
  @media (max-width: 768px) {
    font-size: 1.75rem;
    line-height: 1.3;
    margin-bottom: 10px;
  }
  
  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

export const Byline = styled.p`
  color: #666;
  font-size: 16px;
  margin: 0;
  
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const Main = styled.main`
  margin-bottom: 40px;
  
  @media (max-width: 768px) {
    margin-bottom: 32px;
  }
`;

export const Section = styled.section`
  margin-bottom: 40px;
  
  &:last-child {
    margin-bottom: 0;
  }
  
  @media (max-width: 768px) {
    margin-bottom: 32px;
  }
`;

export const Card = styled.div`
  margin-bottom: 20px;
  
  @media (max-width: 768px) {
    margin-bottom: 16px;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: #000;
  margin-bottom: 16px;
  border-bottom: 2px solid #000;
  padding-bottom: 6px;
  
  @media (max-width: 768px) {
    font-size: 1.25rem;
    margin-bottom: 14px;
    padding-bottom: 5px;
  }
`;

export const Paragraph = styled.p`
  color: #333;
  line-height: 1.7;
  margin-bottom: 16px;
  font-size: ${props => props.large ? '18px' : '16px'};
  
  &:last-child {
    margin-bottom: 0;
  }
  
  strong {
    font-weight: 600;
  }
  
  em {
    font-style: italic;
  }
  
  @media (max-width: 768px) {
    font-size: ${props => props.large ? '16px' : '15px'};
    line-height: 1.65;
    margin-bottom: 14px;
  }
`;

export const CollapsibleCard = styled.div`
`;

export const CollapsibleButton = styled.button`
  width: 100%;
  margin-top: 10px;
  padding: 16px 5px;
  display: flex;
  
  &:hover {
    background-color: #f1f3f4;
  }
  
  &:active {
    background-color: #e8eaed;
  }
  
  svg {
    color: #666;
    flex-shrink: 0;
    margin-left: 8px;
  }
  
  @media (max-width: 768px) {
  }
`;

export const CollapsibleContent = styled.div`
  padding: 20px;
  background: #fff;
  
  > div {
    margin-bottom: 16px;
    
    &:last-child {
      margin-bottom: 0;
    }
  }
  
  @media (max-width: 768px) {
    padding: 16px;
    
    > div {
      margin-bottom: 14px;
    }
  }
`;

export const SubsectionTitle = styled.h3`
  font-weight: 600;
  color: #000;
  margin-bottom: 8px;
  font-size: 18px;
  
  @media (max-width: 768px) {
    font-size: 16px;
    margin-bottom: 6px;
  }
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const ListItem = styled.li`
  display: block;
  margin-bottom: 10px;
  color: #333;
  padding-left: 20px;
  position: relative;
  font-size: 16px;
  line-height: 1.6;
  
  &:before {
    content: '•';
    position: absolute;
    left: 0;
    color: #666;
  }
  
  &:last-child {
    margin-bottom: 0;
  }
  
  @media (max-width: 768px) {
    font-size: 15px;
    margin-bottom: 8px;
    padding-left: 18px;
    line-height: 1.5;
  }
`;

export const StatusCard = styled.div`
  background: #f6f8fa;
  border: 1px solid #e1e4e8;
  border-radius: 6px;
  padding: 20px;
  margin-bottom: 20px;
  
  @media (max-width: 768px) {
    padding: 16px;
    margin-bottom: 16px;
  }
`;

export const ContactCard = styled.div`
  text-align: left;
  
  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const ContactButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: #000;
  color: white;
  padding: 12px 24px;
  border-radius: 6px;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  transition: background-color 0.2s;
  -webkit-tap-highlight-color: transparent;
  min-height: 44px;
  
  &:hover {
    background-color: #333;
  }
  
  &:active {
    background-color: #1a1a1a;
  }
  
  @media (max-width: 768px) {
    padding: 12px 20px;
    font-size: 14px;
    width: auto;
  }
`;

export const Footer = styled.footer`
  margin-top: 60px;
  padding-top: 24px;
  border-top: 1px solid #e1e4e8;
  text-align: center;
  
  p {
    color: #666;
    font-size: 14px;
    margin: 0;
    line-height: 1.5;
  }
  
  @media (max-width: 768px) {
    margin-top: 48px;
    padding-top: 20px;
    
    p {
      font-size: 13px;
    }
  }
`;

export const IdeaBoardImage = styled.img`
  width: 60%;
  max-width: 600px;
  height: auto;
  border-radius: 6px;
  margin: -55px auto;
  display: block;
  transform: rotate(-90deg);
  
  @media (max-width: 768px) {
    max-width: 100%;
    margin: -35px auto;
    border-radius: 4px;
  }
  
  @media (max-width: 480px) {
    margin: -20px auto
  }
`;

export const ImageCaption = styled.p`
  text-align: center;
  font-style: italic;
  color: #666;
  font-size: 14px;
  margin-top: 8px;
  margin-bottom: 0;
  
  @media (max-width: 768px) {
    font-size: 13px;
    margin-top: 6px;
  }
`;

// Password Protection Styles
export const PasswordOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.95);
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  backdrop-filter: blur(10px);
  z-index: 1000;
`;

export const PasswordContainer = styled.div`
  width: 100%;
  max-width: 400px;
  padding: 20px;
`;

export const PasswordCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 40px 32px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  border: 1px solid #e1e4e8;
  text-align: center;
  
  @media (max-width: 480px) {
    padding: 32px 24px;
    margin: 0 16px;
  }
`;

export const PasswordTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: #000;
  margin: 24px 0 16px 0;
  
  @media (max-width: 480px) {
    font-size: 1.25rem;
  }
`;

export const PasswordDescription = styled.p`
  color: #666;
  font-size: 14px;
  line-height: 1.5;
  margin-bottom: 32px;
  
  @media (max-width: 480px) {
    font-size: 13px;
    margin-bottom: 24px;
  }
`;

export const PasswordForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const PasswordInputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const PasswordInput = styled.input`
  width: 100%;
  padding: 14px 48px 14px 16px;
  border: 2px solid #e1e4e8;
  border-radius: 8px;
  font-size: 16px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  transition: border-color 0.2s, box-shadow 0.2s;
  outline: none;
  
  &:focus {
    border-color: #000;
    box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.1);
  }
  
  &::placeholder {
    color: #999;
  }
  
  @media (max-width: 480px) {
    padding: 12px 44px 12px 14px;
    font-size: 15px;
  }
`;

export const TogglePasswordButton = styled.button`
  position: absolute;
  right: 12px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666;
  transition: color 0.2s;
  -webkit-tap-highlight-color: transparent;
  
  &:hover {
    color: #000;
  }
  
  &:active {
    transform: scale(0.95);
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 14px 24px;
  background: #000;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s, transform 0.1s;
  -webkit-tap-highlight-color: transparent;
  
  &:hover {
    background-color: #333;
  }
  
  &:active {
    background-color: #1a1a1a;
    transform: scale(0.98);
  }
  
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
    transform: none;
  }
  
  @media (max-width: 480px) {
    padding: 12px 20px;
    font-size: 15px;
  }
`;

export const ErrorMessage = styled.p`
  color: #d32f2f;
  font-size: 14px;
  margin-top: 8px;
  text-align: center;
  animation: fadeIn 0.3s ease-in;
  
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-4px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
