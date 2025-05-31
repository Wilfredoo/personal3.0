// ExperienceCarousel.jsx
import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ExperienceCard = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1rem;
  background-color: white;
  margin: 0 0.5rem;
`;

const MetaRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
  font-weight: bold;
  font-size: 1.1rem;
`;

const ImageGallery = styled.div`
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  margin-top: 0.5rem;

  img {
    width: 200px;
    height: 200px;
    border-radius: 4px;
    object-fit: cover;
  }
`;

const ExperienceCarousel = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <Slider {...settings}>
      {/* Experience 1 */}
      <ExperienceCard>
        <MetaRow>
          <div>📍 House in Occitania, France</div>
          <div>🗓️ May 2025 • 1 week</div>
        </MetaRow>
        <p>Right after my last experience, I house-sat another charming house while keeping an eye on 5 goats and 1 cat while the owner was away.</p>
        <p><strong>Reference:</strong> Julien</p>
        <ImageGallery>
          <img src="/Photos/France/Goats.jpeg" alt="France goatsitting" />
        </ImageGallery>
      </ExperienceCard>

      {/* Experience 2 */}
      <ExperienceCard>
        <MetaRow>
          <div>📍 House in Occitania, France</div>
          <div>🗓️ May 2025 • 4 days</div>
        </MetaRow>
        <p>Here I cared for 2 dogs and 2 cats while house sitting for 4 days in a nice little home in the south of France.</p>
        <p><strong>Reference:</strong> Janina</p>
        <ImageGallery>
          <img src="/Photos/France/1.jpeg" alt="France petsitting 1" />
          <img src="/Photos/France/2.jpeg" alt="France petsitting 2" />
          <img src="/Photos/France/4.jpeg" alt="France petsitting 3" />
        </ImageGallery>
      </ExperienceCard>

      {/* Experience 3 */}
      <ExperienceCard>
        <MetaRow>
          <div>📍 Farm in Setesdal Valley, Norway</div>
          <div>🗓️ April 2025 • 1 month</div>
        </MetaRow>
        <p>A lovely experience working in the Norwegian wilderness under the guidance of two wonderful hosts.</p>
        <p><strong>Projects:</strong> Tree cutting (axe and chainsaw), cabin painting, stone wall construction, cleaning. Also supported with website design and shot video footage of the project.</p>
        <p><strong>Reference:</strong> Mona - mona_bjorgum@hotmail.com</p> 
        <ImageGallery>
          <img src="/Photos/Norway/2.jpeg" alt="Norway 2" />
          <img src="/Photos/Norway/3.jpeg" alt="Norway 3" />
          <img src="/Photos/Norway/4.jpeg" alt="Norway 4" />
        </ImageGallery>
      </ExperienceCard>
    </Slider>
  );
};

export default ExperienceCarousel;
