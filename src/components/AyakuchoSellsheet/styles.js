import styled from 'styled-components';

export const Container = styled.div`
  font-family: Arial, sans-serif;
  margin: 20px;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 8px;
  max-width: 800px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h1`
  font-size: 36px;
  color: #333;
`;

export const Subtitle = styled.h2`
  font-size: 24px;
  color: #555;
`;

export const Section = styled.div`
  margin: 20px 0;
`;

export const Paragraph = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: #444;
`;

export const List = styled.ul`
  list-style-type: disc;
  margin-left: 20px;
`;

export const ListItem = styled.li`
  font-size: 16px;
  line-height: 1.6;
`;

export const ContactLink = styled.a`
  color: #007bff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const ImageLink = styled.a`
  color: #28a745;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const VideoLink = styled.a`
  color: #ff4500;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const WhatsAppLink = styled.a`
  color: #25D366;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const VideoEmbed = styled.iframe`
  width: 100%;
  height: 200px;
  margin-top: 20px;
  border: none;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;