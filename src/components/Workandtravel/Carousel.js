import React, { useState } from 'react';
import styled from 'styled-components';

const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  margin: 2rem auto;
  overflow: hidden;
  border-radius: 8px;
      background: black;
`;

const CarouselImage = styled.img`
      width: 100%;
    height: 400px;
        object-fit: contain;
  transition: opacity 0.5s ease-in-out;
  border-radius: 8px;
`;

const CarouselButtons = styled.div`
  position: absolute;
  top: 50%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  transform: translateY(-50%);
`;

const Button = styled.button`
  background: rgba(255, 255, 255, 0.7);
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  font-size: 1.2rem;
  border-radius: 50%;
  margin: 0 0.5rem;
`;

const Carousel = () => {
    const images = [
        '/Photos/Personal/1.jpeg',
        '/Photos/Personal/2.png',
        '/Photos/Personal/3.jpeg'
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <CarouselContainer>
            <CarouselImage src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
            <CarouselButtons>
                <Button onClick={handlePrev}>‹</Button>
                <Button onClick={handleNext}>›</Button>
            </CarouselButtons>
        </CarouselContainer>
    );
};


export default Carousel