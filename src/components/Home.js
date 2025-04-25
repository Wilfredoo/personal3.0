import React, { useState, useEffect } from 'react';
import picture1 from '../assets/images/picture_1.png';
import picture2 from '../assets/images/picture_2.png';
import arrow from '../assets/images/arrow.png';
import SoftwareDeveloper from './SoftwareDeveloper';
import Filmmaker from './Filmmaker';
import Entrepreneur from './Entrepreneur';
import HamsterSpinner from '../assets/animations/Hamster_Spinner.gif'

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
    ArrowContainer,
    CenteredScreen,
    LoadingImage,
    StaggeredFade,
    PhotoFade
} from './styles';

const Home = () => {
    const [picture] = useState(Math.random() < 0.5 ? picture1 : picture2);
    const [currentView, setCurrentView] = useState(null);
    const [message, setMessage] = useState(null);
    const [isShaking, setIsShaking] = useState(false);
    const [animate, setAnimate] = useState(false);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const minDelay = new Promise(resolve => setTimeout(resolve, 2000));
        const domReady = new Promise(resolve => {
            if (document.readyState === 'complete') resolve();
            else window.addEventListener('load', resolve, { once: true });
        });

        Promise.all([minDelay, domReady]).then(() => {
            setLoading(false);
        });
    }, []);


    const handleImageClick = (e) => {
        copyEmailToClipboard(e)
        if (navigator.vibrate) {
            navigator.vibrate(500);
        }
        setIsShaking(true);
        setTimeout(() => setIsShaking(false), 1000);
    };


    useEffect(() => {
        setCurrentView(null);

        setAnimate(true);
    }, []);

    const copyEmailToClipboard = (e) => {
        e.preventDefault();
        navigator.clipboard.writeText('inbox@wilfredocasas.com').then(() => {
            setMessage('Your inquisitive spirit hasn’t gone unnoticed - as a gesture of acknowledgment, my email is now copied to your clipboard.');
            setTimeout(() => setMessage(null), 4000);
        }).catch((err) => console.error('Could not copy email: ', err));
    };



    const handleViewChange = (view) => () => {
        setAnimate(false);
        setCurrentView(view);
        setTimeout(() => setAnimate(true), 10);
    };
    const renderDetailView = () => {
        switch (currentView) {
            case 'Software Developer':
                return <SoftwareDeveloper />;
            case 'Filmmaker':
                return <Filmmaker />;
            case 'Entrepreneur':
                return <Entrepreneur />;
            default:
                return null;
        }
    };

    if (loading) {
        return (
            <CenteredScreen>
                <LoadingImage src={HamsterSpinner} alt="loading..." />
            </CenteredScreen>
        );
    }


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
                    <PhotoFade delay="0.2s">
                            <Image src={picture} alt="Me" onClick={handleImageClick} isShaking={isShaking} />
                    </PhotoFade>
                        </ImageContainer>

                    <TitleContainer>
                    <StaggeredFade delay="0.5s">
                        <Title onClick={handleViewChange('Software Developer')}>Software Developer</Title>
                    </StaggeredFade>
                    <StaggeredFade delay="0.7s">

                        <Title onClick={handleViewChange('Filmmaker')}>Filmmaker</Title>
                    </StaggeredFade>
                    <StaggeredFade delay="0.7s">

                        <Title onClick={handleViewChange('Entrepreneur')}>Entrepreneur</Title>
                    </StaggeredFade>

                    </TitleContainer>
                </ParentContainer>
            )}
            {message && <Message>{message}</Message>}
        </HomeContainer>
    );
}

export default Home;
