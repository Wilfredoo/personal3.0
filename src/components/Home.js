import React, { useState } from 'react';
import picture1 from '../assets/images/picture_1.png';
import picture2 from '../assets/images/picture_2.png';
import arrow from '../assets/images/arrow.png';

import SoftwareDeveloper from './SoftwareDeveloper';
import Filmmaker from './Filmmaker';
import Entrepreneur from './Entrepreneur';

import {
    HomeContainer,
    ImageContainer,
    Image,
    TitleContainer,
    ParentContainer,
    Title,
    Message,
    DetailContainer,
    Arrow,
    ArrowContainer
} from './styles';

const Home = () => {
    const [picture] = useState(Math.random() < 0.5 ? picture1 : picture2);
    const [currentView, setCurrentView] = useState(null);
    const [message, setMessage] = useState(null);
    const [isShaking, setIsShaking] = useState(false);


    const handleImageClick = (e) => {
        copyEmailToClipboard(e)
        setIsShaking(true);
        setTimeout(() => setIsShaking(false), 500); // Reset shaking after animation duration
    };
    
    
    const copyEmailToClipboard = (e) => {
        e.preventDefault();
        navigator.clipboard.writeText('inbox@wilfredocasas.com').then(() => {
            setMessage('Your inquisitive spirit hasn’t gone unnoticed - as a gesture of acknowledgment, my email is now copied to your clipboard.');
            setTimeout(() => setMessage(null), 3000);
        }).catch((err) => console.error('Could not copy email: ', err));
    };

    const handleViewChange = (view) => () => setCurrentView(view);

    const renderDetailView = () => {
        switch (currentView) {
            case 'Software Developer':
                return <SoftwareDeveloper />;
            case 'Filmmaker':
                return <Filmmaker />;
            case 'Entrepreneur':
                return <Entrepreneur />;
            default:
                return null; // Or some default content
        }
    };

    return (
        <HomeContainer>
            {currentView ? (
                <DetailContainer>
                    {renderDetailView()}
                    <ArrowContainer>

                    <Arrow src={arrow} alt="arrow" onClick={handleViewChange(null)} />
                    </ArrowContainer>

                </DetailContainer>
            ) : (
                <ParentContainer>
                    <ImageContainer>
                        <Image src={picture} alt="Me" onClick={handleImageClick} isShaking={isShaking} />

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
