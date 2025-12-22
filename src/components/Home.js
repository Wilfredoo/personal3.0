import React, { useState, useEffect } from 'react';
import picture1 from '../assets/images/picture_1.png';
import picture2 from '../assets/images/picture_2.png';
import arrow from '../assets/images/arrow.png';
import WhatImUpTo from './WhatImUpTo';
import Services from './Services';

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
    const [animate, setAnimate] = useState(false);

    const handleImageClick = (e) => {
        copyEmailToClipboard(e)
         // Add vibration here. The device will vibrate for 500 milliseconds.
    if (navigator.vibrate) {
        navigator.vibrate(500); // Vibrate for half a second
    }
        setIsShaking(true);
        setTimeout(() => setIsShaking(false), 1000); // Reset shaking after animation duration
    };


    useEffect(() => {
        setCurrentView(null);

        setAnimate(true); // start with animation on initial mount
    }, []);
    
    const copyEmailToClipboard = (e) => {
        e.preventDefault();
        navigator.clipboard.writeText('inbox@wilfredocasas.com').then(() => {
            setMessage('Your inquisitive spirit hasn’t gone unnoticed - as a gesture of acknowledgment, my email is now copied to your clipboard.');
            setTimeout(() => setMessage(null), 4000);
        }).catch((err) => console.error('Could not copy email: ', err));
    };

 

    const handleViewChange = (view) => () => {
        setAnimate(false); // reset animation
        setCurrentView(view);
        setTimeout(() => setAnimate(true), 10); // slight delay to reapply the animation class
    };
    const renderDetailView = () => {
        switch (currentView) {
            case 'What Im Up To':
                return <WhatImUpTo />;
            case 'Services':
                return <Services />;
            default:
                return null; // Or some default content
        }
    };

    return (
        <HomeContainer>
            {currentView ? (
                <DetailContainer className={animate ? 'fadeIn' : ''}>
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
                        <Title onClick={handleViewChange('What Im Up To')}>What I'm Up To</Title>
                        <Title onClick={handleViewChange('Services')}>Services</Title>
                    </TitleContainer>
                </ParentContainer>
            )}
            {message && <Message>{message}</Message>}
        </HomeContainer>
    );
            }
export default Home;
