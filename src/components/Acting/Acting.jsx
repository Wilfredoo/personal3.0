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
    ParentContainer,
    ReelText,
    SmallText
} from './Styles';
import wilfredo1 from '../../assets/images/wilfredo_1.png';
import wilfredo2 from '../../assets/images/wilfredo_2.png';
import wilfredo3 from '../../assets/images/wilfredo_3.png';
import wilfredo4 from '../../assets/images/wilfredo_4.jpeg';
import wilfredo5 from '../../assets/images/wilfredo_5.jpeg';
import wilfredo7 from '../../assets/images/wilfredo_7.png';
import wilfredo8 from '../../assets/images/wilfredo_8.jpg';

const photos = [wilfredo1, wilfredo2, wilfredo3, wilfredo4,wilfredo7, wilfredo5 , wilfredo8];


const texts = {
    EN: {
        header: "Wilfredo Casas",
        tagline1:
            "Indigenous-Peruvian actor with a core skill set in improvisational theater, contemporary dance, and martial arts.",
        tagline2: "Looking for challenging roles.",
        moreAbout: "More about me",
        reelText: "The clips in this reel feature my first film acting jobs & auditions from 2025, for short films in Berlin, Offenburg, Aachen and Cologne, a mix of improvised and scripted scenes. Enjoy the glimpse!",
        info: [
            "Height: 175 cm",
            "Build: Athletic",
            "Ethnic Appearance: Indigenous Peruvian / Hispanic",
            "Nationality: Peruvian",
            "Languages: German, English, Spanish, German Sign Language (DGS)",
            "Musical Skills: Singing, Guitar, Keyboard, Drums",
            "Sports: Parkour, Martial Arts, Gymnastics",
            "Dance: Contemporary, Improvisational, Ballet, Salsa, Tango, Lindy Hop",
            "Driver's License: B (EU)",
            "Location: Frankfurt am Main, Leipzig, Berlin.",
        ]
    },
    DE: {
        header: "Wilfredo Casas",
        tagline1:
            "Indigener peruanischer Schauspieler mit Kernkompetenzen im improvisatorischen Theater, zeitgenössischem Tanz und Kampfsport.",
        tagline2: "Auf der Suche nach herausfordernden Rollen.",
        moreAbout: "Mehr über mich",
        reelText: "Die Clips in diesem Reel zeigen meine ersten Schauspiel-Auditions für Filmprojekte im Jahr 2025, darunter Kurzfilme in Berlin, Offenburg, Aachen und Köln. Die meisten Auditions führten zu Rollen in Projekten, die sich derzeit in der Postproduktion befinden – mit einer Mischung aus improvisierten und geskripteten Szenen. Viel Spaß beim Anschauen!",
        info: [
            "Größe: 175 cm",
            "Körperbau: Athletisch",
            "Ethnisches Erscheinungsbild: Indigen peruanisch / hispanisch",
            "Nationalität: Peruanisch",
            "Sprachen: Deutsch, Englisch, Spanisch, Deutsche Gebärdensprache (DGS)",
            "Musikalische Fähigkeiten: Gesang, Gitarre, Keyboard, Schlagzeug",
            "Sport: Parkour, Kampfsport, Gymnastik",
            "Tanz: Zeitgenössisch, Improv, Ballett, Salsa, Tango, Lindy Hop",
            "Führerschein: B (EU)",
            "Standort: Frankfurt am Main, Leipzig, Berlin.",
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
                    {language === "EN" ? (
                        "Zur deutschen Version, bitte."
                    ) : (
                        <>
                            English
                            <SmallText>Do you speak it?</SmallText>
                            </>
                    )}
                </TranslateButton>

                <VideoSection>
                    <VideoEmbed>
                        <iframe
                            src="https://www.youtube.com/embed/CAy7nA4cDtI"
                            title="Acting Video 1"
                            allowFullScreen
                        />
                    </VideoEmbed>
                    <ReelText>{currentText.reelText}</ReelText>
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
