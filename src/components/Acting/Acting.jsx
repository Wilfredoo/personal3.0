import React, { useState } from 'react';
import {
  Container,
  Header,
  Tagline,
  FlashyTagline,
  TranslateButton,
  VideoSection,
  VideoEmbed,
  ImageGrid,
  InfoSection,
  InfoList,
  InfoItem,
  ProfileImage,
NewPhotoButton,
  ParentContainer
} from './Styles';
import wilfredo1 from '../../assets/images/wilfredo_1.png';
import wilfredo2 from '../../assets/images/wilfredo_2.png';
import wilfredo3 from '../../assets/images/wilfredo_3.png';
import wilfredo4 from '../../assets/images/wilfredo_4.jpeg';

const photos = [wilfredo1, wilfredo2, wilfredo3, wilfredo4];

const PhotoSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const handleNext = () => setCurrentIndex((prev) => (prev + 1) % photos.length);
    
    return (
      <>
        <ProfileImage src={photos[currentIndex]} alt={`Wilfredo ${currentIndex + 1}`} />
        <NewPhotoButton onClick={handleNext}>New Photo</NewPhotoButton>
      </>
    );
  };
const texts = {
  EN: {
    header: "Wilfredo Casas",
    tagline1:
      "Indigenous-Peruvian actor with a core skill set in improvisational theater, contemporary dance, and martial arts.",
    tagline2: "Looking for challenging roles.",
    moreAbout: "More about me",
    info: [
      "Height: 175 cm",
      "Build: Athletic",
      "Ethnic Appearance: Indigenous Peruvian / Hispanic",
      "Nationality: Peruvian",
      "Languages: German, English, Spanish, German Sign Language (DGS)",
      "Musical Skills: Singing, Guitar, Keyboard, Drums",
      "Sports: Parkour, Martial Arts, Gymnastics",
      "Dance: Contemporary, Improvisational, Ballet, Salsa, Lindy Hop",
      "Driver's License: B (EU)",
      "Location: Berlin, Germany",
      "Wohnort: Frankfurt am Main"
    ]
  },
  DE: {
    header: "Wilfredo Casas",
    tagline1:
      "Indigener peruanischer Schauspieler mit Kernkompetenzen im improvisatorischen Theater, zeitgenössischem Tanz und Kampfsport.",
    tagline2: "Auf der Suche nach herausfordernden Rollen.",
    moreAbout: "Mehr über mich",
    info: [
      "Größe: 175 cm",
      "Körperbau: Athletisch",
      "Ethnisches Erscheinungsbild: Indigen peruanisch / hispanisch",
      "Nationalität: Peruanisch",
      "Sprachen: Deutsch, Englisch, Spanisch, Deutsche Gebärdensprache (DGS)",
      "Musikalische Fähigkeiten: Gesang, Gitarre, Keyboard, Schlagzeug",
      "Sport: Parkour, Kampfsport, Gymnastik",
      "Tanz: Zeitgenössisch, Improvisiert, Ballett, Salsa, Lindy Hop",
      "Führerschein: B (EU)",
      "Standort: Berlin, Deutschland",
      "Wohnort: Frankfurt am Main"
    ]
  }
};

const Acting = () => {
  const [language, setLanguage] = useState("EN");
  const toggleLanguage = () => setLanguage((prev) => (prev === "EN" ? "DE" : "EN"));
  const currentText = texts[language];
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleNext = () => setCurrentIndex((prev) => (prev + 1) % photos.length);
  

  return (
    <ParentContainer>
    <Container>
      <Header>{currentText.header}</Header>
      <Tagline>{currentText.tagline1}</Tagline>
      <FlashyTagline>{currentText.tagline2}</FlashyTagline>
      <TranslateButton onClick={toggleLanguage}>
        {language === "EN" ? "Zur deutschen Version, bitte." : "English motherfucker, do you speak it?"}
      </TranslateButton>

      <VideoSection>
        <VideoEmbed>
          <iframe
            src="https://www.youtube.com/embed/mKwZ8FTQYxw"
            title="Acting Video 1"
            allowFullScreen
          />
        </VideoEmbed>
        <VideoEmbed>
          <iframe
            src="https://www.youtube.com/embed/B4MadiHGSyI"
            title="Acting Video 2"
            allowFullScreen
          />
        </VideoEmbed>
      </VideoSection>

      <VideoSection>
        <VideoEmbed>
          <iframe
            src="https://www.youtube.com/embed/_NIp7kmIN_o"
            title="Acting Video 3"
            allowFullScreen
          />
        </VideoEmbed>
        <VideoEmbed>
          <iframe
            src="https://www.youtube.com/embed/1UJaR4jh98A"
            title="Acting Video 4"
            allowFullScreen
          />
        </VideoEmbed>
        <VideoEmbed>
          <iframe
            src="https://www.youtube.com/embed/qsXkQj-uHZU"
            title="Acting Video 5"
            allowFullScreen
          />
        </VideoEmbed>
        <VideoEmbed>
          <iframe
            src="https://www.youtube.com/embed/JJlWZUrJYxw"
            title="Acting Video 6"
            allowFullScreen
          />
        </VideoEmbed>
      </VideoSection>

      <ImageGrid>
      <ProfileImage src={photos[currentIndex]} alt={`Wilfredo ${currentIndex + 1}`} />
      <NewPhotoButton onClick={handleNext}>New Photo</NewPhotoButton>
      </ImageGrid>

     

      <InfoSection>
        <h3>{currentText.moreAbout}</h3>
        <InfoList>
          {currentText.info.map((item, index) => (
            <InfoItem key={index}>{item}</InfoItem>
          ))}
        </InfoList>
      </InfoSection>
    </Container>
    </ParentContainer>
  );
};

export default Acting;
