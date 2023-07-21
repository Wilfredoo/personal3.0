import React, { useState } from 'react';
import picture1 from '../assets/images/picture_1.png';
import picture2 from '../assets/images/picture_2.png';
import styled, { keyframes } from 'styled-components';
const shake = keyframes`
  0% { transform: translate(1px, 1px) rotate(0deg); }
  10% { transform: translate(-1px, -1px) rotate(-0.5deg); }
  20% { transform: translate(-1px, 0px) rotate(0.5deg); }
  30% { transform: translate(1px, 1px) rotate(0deg); }
  40% { transform: translate(0px, -1px) rotate(0.5deg); }
  50% { transform: translate(-1px, 1px) rotate(-0.5deg); }
  60% { transform: translate(-1px, 0px) rotate(0deg); }
  70% { transform: translate(1px, 0px) rotate(-0.5deg); }
  80% { transform: translate(0px, -1px) rotate(0.5deg); }
  90% { transform: translate(1px, 1px) rotate(0deg); }
  100% { transform: translate(0px, -1px) rotate(-0.5deg); }
`;
const HomeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center; /* Center align text content */
  font-family: 'Lunasima', sans-serif;
  background-color: #FDF4F5; /* Change background color */

`;

const ImageContainer = styled.div`
    width: 170px;
    height: 170px;
    align-self: center;

    @media (min-width: 768px) {
        position:absolute;
        bottom: -200px;
        width: 200px;
        height: 200px;
    }
    `;

const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 50%;
  animation: ${shake} 0.5s;
  animation-delay: 5s; // start animation after 5s delay
@media (min-width: 768px) {
    position:absolute;
    left: -80px;
}

 
`;

const TitleContainer = styled.div`
flex-grow: 1;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
margin: 20px 0;
`;

const ParentContainer = styled.div`
display: flex;
position: absolute;

@media (max-width: 768px) {
    left: -70px;
}

width: -webkit-fill-available;



`;

const Title = styled.p`
  a {
    color: black;  /* inherit color from parent */
    text-decoration: none;  /* remove underline */
  }


`;

const Message = styled.p`
  position: fixed;
  bottom: 20px;
  color: white;
  background: #2D4356;
  padding: 10px;
  border-radius: 1.5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  left: 50%; // Move it to the horizontal center
  transform: translateX(-50%); // Center it horizontally
`;



const Home = () => {
    // eslint-disable-next-line
    const [picture, setPicture] = useState(Math.random() < 0.5 ? picture1 : picture2);

    const [message, setMessage] = useState(null);

    const copyEmailToClipboard = (e) => {
        e.preventDefault();

        // Replace 'your.email@example.com' with your actual email
        navigator.clipboard.writeText('inbox@wilfredocasas.com').then(() => {
            setMessage('Email copied to clipboard!');

            // After 3 seconds, hide the message
            setTimeout(() => {
                setMessage(null);
            }, 3000);
        })
            .catch((err) => {
                // You can handle errors here
                console.error('Could not copy email: ', err);
            });
    };

    return (
        <HomeContainer>
            <ParentContainer>
                <ImageContainer>
                    <Image src={picture} alt="Me" onClick={copyEmailToClipboard} />
                </ImageContainer>
                <TitleContainer>
                    <Title><a href="https://github.com/Wilfredoo" target="_blank" rel="noopener noreferrer">Software Developer</a></Title>
                    <Title><a href="https://youtu.be/kzLK-LVLFsc" target="_blank" rel="noopener noreferrer">Filmmaker</a></Title>
                    <Title><a href="https://www.jobdirecto.com/" target="_blank" rel="noopener noreferrer">Entrepreneur</a></Title>
                </TitleContainer>
            </ParentContainer>

            {message && <Message>{message}</Message>}

        </HomeContainer>
    );
};


export default Home;
