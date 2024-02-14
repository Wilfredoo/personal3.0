import React, { useState } from 'react';
import picture1 from '../assets/images/picture_1.png';
import picture2 from '../assets/images/picture_2.png';
import arrow from '../assets/images/arrow.png';


import {
    HomeContainer,
    ImageContainer,
    Image,
    TitleContainer,
    ParentContainer,
    Title,
    Message,
    DetailContainer // Ensure this is defined in your styles.js
} from './styles'; // Adjust the path as necessary

const Home = () => {
    const [picture, setPicture] = useState(Math.random() < 0.5 ? picture1 : picture2);
    const [currentView, setCurrentView] = useState(null);
    const [message, setMessage] = useState(null);
    const [fadeDetail, setFadeDetail] = useState(false); // New state to control fade animations


    
    const copyEmailToClipboard = (e) => {
        e.preventDefault();
        navigator.clipboard.writeText('inbox@wilfredocasas.com').then(() => {
            setMessage('Email copied to clipboard!');
            setTimeout(() => setMessage(null), 3000);
        }).catch((err) => console.error('Could not copy email: ', err));
    };

    const handleViewChange = (view) => () => setCurrentView(view);

    const renderDetailView = () => {
        switch (currentView) {
            case 'Software Developer':
                return <p>Your detailed text about being a Software Developer...</p>;
            case 'Filmmaker':
                return <p>Your detailed text about being a Filmmaker...</p>;
            case 'Entrepreneur':
                return <p>Your detailed text about being an Entrepreneur...</p>;
            default:
                return null; // Or some default content
        }
    };

    return (
        <HomeContainer>
            {currentView ? (
                <DetailContainer>
                    {renderDetailView()}
                    <ImageContainer>

                    <Image src={arrow} alt="arrow" onClick={handleViewChange(null)} />
                    </ImageContainer>

                </DetailContainer>
            ) : (
                <ParentContainer>
                    <ImageContainer>
                        <Image src={picture} alt="Me" onClick={copyEmailToClipboard} />
                    </ImageContainer>
                    <TitleContainer>
                        <Title onClick={handleViewChange('Software Developer')}>Software Developer</Title>
                        <Title onClick={handleViewChange('Filmmaker')}>Filmmaker</Title>
                        <Title onClick={handleViewChange('Entrepreneur')}>Entrepreneur</Title>
                    </TitleContainer>
                </ParentContainer>
            )}
            {message && <Message>{message}</Message>}
        </HomeContainer>
    );
};

export default Home;
