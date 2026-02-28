import React, { useEffect, useState } from 'react';
import {
    Container,
    Header,
    Tagline,
    TaglineEmphasis,
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
    SmallText,
    JobUpdates,
    JobLabel,
    JobLine,
    ResumeDownloadButton,
    LinksSection,
    LinksTitle,
    LinksContainer,
    ProfileLink,
    RepresentationCard,
    RepresentationLink,
    ContactCta,
    ContactCtaText,
    GateCard,
    GateTitle,
    GateText,
    GateForm,
    GateInput,
    GateButton,
    GateError
} from './Styles';

import wilfredo1 from '../../assets/images/wilfredo_1.png';
import wilfredo2 from '../../assets/images/wilfredo_2.png';
import wilfredo3 from '../../assets/images/wilfredo_3.png';
import wilfredo4 from '../../assets/images/wilfredo_4.jpeg';
import wilfredo5 from '../../assets/images/wilfredo_5.jpeg';
import wilfredo7 from '../../assets/images/wilfredo_7.png';
import wilfredo8 from '../../assets/images/wilfredo_8.jpg';
import wilfredo9 from '../../assets/images/wilfredo_9.jpeg';
import wilfredo13 from '../../assets/images/wilfredo_13.jpg';
import wilfredo14 from '../../assets/images/wilfredo_14.jpg';
import wilfredo15 from '../../assets/images/wilfredo_15.jpg';
import wilfredo16 from '../../assets/images/wilfredo_16.jpg';
import wilfredo17 from '../../assets/images/wilfredo_17.jpg';
import wilfredo18 from '../../assets/images/wilfredo_18.jpg';
import wilfredo19 from '../../assets/images/wilfredo_19.jpg';
import wilfredo21 from '../../assets/images/wilfredo_21.jpg';
import wilfredo22 from '../../assets/images/wilfredo_22.jpg';
import wilfredo23 from '../../assets/images/wilfredo_23.jpg';
import wilfredo24 from '../../assets/images/wilfredo_24.jpg';


const photos = [
  wilfredo1,
  wilfredo2,
  wilfredo3,
  wilfredo4,
  wilfredo5,
  wilfredo7,
  wilfredo8,
  wilfredo9,
  wilfredo13,
  wilfredo14,
  wilfredo15,
  wilfredo16,
  wilfredo17,
  wilfredo18,
  wilfredo19,
  wilfredo21,
  wilfredo22,
  wilfredo23,
  wilfredo24,

];

const ACCESS_PASSWORD = "gingertea";
const ACCESS_STORAGE_KEY = "acting_page_unlocked";
const ENABLE_PASSWORD_PROTECTION = true;


const texts = {
    EN: {
        header: "Wilfredo Casas",
        tagline1:
            "Emerging Indigenous-Peruvian actor with improvisational skills and a wide acting range.",
        tagline2: "Looking for challenging roles.",
        lastJobLabel: "Last Job",
        lastJob: "First Love (Pierwsza Miłość) — Role: Prisoner 2 — ATM Grupa / Polsat — February 2026",
        nextJobLabel: "Next Job",
        nextJob: "The Human Experience (upcoming feature) — Role: The Human Tiger — Direction: Natalie McMahon — June 2026",
        resumeButton: "Download Acting Resume (PDF)",
        availability: "🎬 AVAILABILITY: Currently travelling but available for shootings in Germany from September 26th to October 20th. November and December - to be confirmed.",
        moreAbout: "More about me",
        reelText: "The clips in this reel feature film acting jobs from 2025 for short films in Berlin, Aachen and Cologne. Material of 2026 coming soon. Enjoy the glimpse!",
                professionalProfiles: "Collaborations with agencies (non-exclusive):",
        representation: "Alison Goodwin Talent",
representation2: "YourActor Agency",
        directContact: "Direct contact via Signal, Telegram, or WhatsApp: +491757025622",

        professionalProfiles2: "MORE LINKS",
        info: [
            "Height: 175 cm",
            "Build: Athletic",
            "Ethnic Appearance: Indigenous Peruvian / Hispanic",
            "Languages: German, English, Spanish, Quechua, German Sign Language (DGS)",
            "Sports: Parkour, Martial Arts",
            "Dance: Contemporary, Improvisational, Salsa, Tango, Ballet",
            "Driver's License: B (EU)",
            "Location: Traveling across Europe, usually in Berlin. Open to work anywhere.",
        ]
    },
    DE: {
        header: "Wilfredo Casas",
        tagline1:
            "Indigen-peruanischer Schauspieler mit Improvisationsfähigkeiten und breiter schauspielerischer Bandbreite.",
        tagline2: "Auf der Suche nach herausfordernden Rollen.",
        lastJobLabel: "Last Job",
        lastJob: "First Love (Pierwsza Miłość) — Role: Prisoner 2 — ATM Grupa / Polsat — February 2026",
        nextJobLabel: "Next Job",
        nextJob: "The Human Experience — Role: The Human Tiger — Direction: Natalie McMahon — June 2026",
        resumeButton: "Schauspiel-Lebenslauf herunterladen (PDF)",
        availability: "🎬 VERFÜGBARKEIT: Aktuell auf Reisen, aber verfügbar für Dreharbeiten in Deutschland vom 26. September bis 20. Oktober. November und Dezember - noch zu bestätigen.",
        moreAbout: "Mehr über mich",
        reelText: "Die Clips in diesem Reel zeigen meine ersten Schauspiel-Auditions für Filmprojekte im Jahr 2025, darunter Kurzfilme in Berlin, Offenburg, Aachen und Köln. Die meisten Auditions führten zu Rollen in Projekten, die sich derzeit in der Postproduktion befinden – mit einer Mischung aus improvisierten und geskripteten Szenen. Viel Spaß beim Anschauen!",
                professionalProfiles: "Zusammenarbeit mit Agenturen (nicht exklusiv):",
     
        representation: "Alison Goodwin Talent",
representation2: "Agentur YourActor",        directContact: "Direkter Kontakt via Signal, Telegram oder WhatsApp: +491757025622",

        professionalProfiles2: "MEHR LINKS",
        info: [
            "Größe: 175 cm",
            "Körperbau: Athletisch",
            "Ethnisches Erscheinungsbild: Indigen peruanisch / hispanisch",
            "Sprachen: Deutsch, Englisch, Spanisch, Quechua, Deutsche Gebärdensprache (DGS)",
            "Musikalische Fähigkeiten: Gesang, Gitarre, Keyboard, Schlagzeug",
            "Tanz: Zeitgenössisch, Improv, Ballett, Salsa, Tango, Lindy Hop",
            "Führerschein: B (EU)",
            "Standort: In ganz Europa unterwegs, meist in Berlin. Offen für Einsätze überall.",
        ]
    }
};

const Acting = () => {
    // hello world
    const [isUnlocked, setIsUnlocked] = useState(false);
    const [passwordInput, setPasswordInput] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [language, setLanguage] = useState("EN");
    const toggleLanguage = () => setLanguage((prev) => (prev === "EN" ? "DE" : "EN"));
    const currentText = texts[language];
    const [currentIndex, setCurrentIndex] = useState(0);
    const handleNext = () => setCurrentIndex((prev) => (prev + 1) % photos.length);
    
    useEffect(() => {
        if (sessionStorage.getItem(ACCESS_STORAGE_KEY) === "true") {
            setIsUnlocked(true);
        }
    }, []);

    const handleUnlock = (event) => {
        event.preventDefault();
        if (passwordInput === ACCESS_PASSWORD) {
            sessionStorage.setItem(ACCESS_STORAGE_KEY, "true");
            setIsUnlocked(true);
            setPasswordError("");
            return;
        }
        setPasswordError("Wrong password.");
    };

    if (ENABLE_PASSWORD_PROTECTION && !isUnlocked) {
        return (
            <ParentContainer>
                <Container>
                    <GateCard>
                        <GateTitle>Acting Page</GateTitle>
                        <GateText>Enter password to continue.</GateText>
                        <GateForm onSubmit={handleUnlock}>
                            <GateInput
                                type="password"
                                value={passwordInput}
                                onChange={(event) => setPasswordInput(event.target.value)}
                                placeholder="Password"
                                autoComplete="current-password"
                            />
                            <GateButton type="submit">Unlock</GateButton>
                        </GateForm>
                        <GateText>Request password to inbox@wilfredocasas.com</GateText>
                        {passwordError && <GateError>{passwordError}</GateError>}
                    </GateCard>
                </Container>
            </ParentContainer>
        );
    }

    return (
        <ParentContainer>
            <Container>
                <Header>{currentText.header}</Header>
                   
                <Tagline>
                    {language === "EN" ? (
                        <>
                            <TaglineEmphasis>EMERGING</TaglineEmphasis> Indigenous Actor
                            <br />
                            with IMPROVISATIONAL Skills
                            <br />
                            and a WIDE Acting Range.
                        </>
                    ) : (
                        currentText.tagline1
                    )}
                </Tagline>
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
                            src="https://www.youtube.com/embed/1EH66VoBrZY"
                            title="Acting Video - Latest Work"
                            allowFullScreen
                        />
                    </VideoEmbed>
                    <ReelText>{currentText.reelText}</ReelText>
                </VideoSection>
               
                <ResumeDownloadButton
                    href={`${process.env.PUBLIC_URL}/Resume_Acting_Wilfredo_Casas.pdf`}
                    download="Resume_Acting_Wilfredo_Casas.pdf"
                >
                    {currentText.resumeButton}
                </ResumeDownloadButton>
                <JobUpdates>
                    <JobLabel>{currentText.lastJobLabel}</JobLabel>
                    <JobLine>{currentText.lastJob}</JobLine>
                    <JobLabel>{currentText.nextJobLabel}</JobLabel>
                    <JobLine>{currentText.nextJob}</JobLine>
                </JobUpdates>
            

              
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
                <LinksSection>
                   <LinksTitle>{currentText.professionalProfiles}</LinksTitle>
                    <RepresentationCard>
                        <div>
                        <RepresentationLink
                            href="https://www.alisongoodwintalent.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {currentText.representation}
                        </RepresentationLink>
                        </div>
                        <div>
     
                          <RepresentationLink
                            href="  https://youractor.pl/impressum/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                   
                      {currentText.representation2}
                        </RepresentationLink>
                        </div>
                    </RepresentationCard>
                    <LinksTitle>{currentText.professionalProfiles2}</LinksTitle>
                    <LinksContainer>
                        <ProfileLink 
                            href="https://www.filmmakers.eu/en/actors/wilfredo-casas" 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            Filmmakers.eu Profile
                        </ProfileLink>
                        <ProfileLink 
                            href="https://www.etalenta.eu/members/profile/wilfredo-casas" 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            etalenta.eu Profile
                        </ProfileLink>
                        <ProfileLink
                            href="https://www.instagram.com/wilfredocasas.actor/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Instagram Profile
                        </ProfileLink>
                    </LinksContainer>
                    <ContactCta>
                        <ContactCtaText>{currentText.directContact}</ContactCtaText>
                    </ContactCta>
                </LinksSection>
            </Container>
        </ParentContainer>
    );
};

export default Acting;
