// FilmEquipment.js
import React, { useState } from 'react';
import {
  EquipmentContainer,
  EquipmentHeader,
  SectionTitle,
  EquipmentList,
  EquipmentItem,
  VideoEmbed,
  ContactLink,
  TranslateButton
} from './Styles';

const texts = {
  EN: {
    header: "Film Equipment & Services",
    equipment: [
      "Blackmagic Pocket 4K",
      "Sigma 30mm F1.4 DC DN Contemporary Lens for Micro Four Thirds – Ordered on December 19, 2024",
      "Panasonic H-HSA12035E Lumix G Vario 12-35 mm / F2.8 ASPH. / Power O.I.S. Black – Ordered on May 7, 2023",
      "RØDE Boom Pole 3 m Telescopic – Ordered on May 12, 2023",
      "Tripods",
      "Zoom H5 Recorder",
      "Boom Mic Sennheiser MKH 416-P48 – Ordered on May 15, 2023"
    ],
    skills: [
      "DaVinci Resolve, audio mixing and color grading",
      "Camera operation (handheld or static)",
      "Audio recording",
      "Lighting setup (Aputure MC Lights, lightstands, reflectors)",
      "Post production"
    ],
    videoTitle: "My Film Reel",
    videoURL: "https://www.youtube.com/embed/YourVideoID", // Replace with your video ID
    contact: "Contact me on WhatsApp: +49 15781295360",
    location: "Based in Frankfurt am Main, Berlin, Leipzig – available anywhere in Germany",
    price: "Rates starting at €250 per day (negotiable)",
    buttonText: "Switch to German"
  },
  DE: {
    header: "Filmausrüstung & Dienstleistungen",
    equipment: [
      "Blackmagic Pocket 4K",
      "Sigma 30mm F1,4 DC DN Contemporary Objektiv für Micro Four Thirds – Bestellt am 19. Dezember 2024",
      "Panasonic H-HSA12035E Lumix G Vario 12-35 mm / F2.8 ASPH. / Power O.I.S. Schwarz – Bestellt am 7. Mai 2023",
      "RØDE Boompole 3 m Teleskop – Bestellt am 12. Mai 2023",
      "Stative",
      "Zoom H5 Recorder",
      "Boom-Mikrofon Sennheiser MKH 416-P48 – Bestellt am 15. Mai 2023"
    ],
    skills: [
      "DaVinci Resolve, Audio-Mixing und Color Grading",
      "Kameraarbeit (handheld oder statisch)",
      "Audioaufnahmen",
      "Lichttechnik (Aputure MC Lights, Lichtständer, Reflektor)",
      "Postproduktion"
    ],
    videoTitle: "Mein Film-Reel",
    videoURL: "https://www.youtube.com/embed/YourVideoID", // Replace with your video ID
    contact: "Kontaktieren Sie mich via WhatsApp: +49 15781295360",
    location: "Standorte: Frankfurt am Main, Berlin, Leipzig – deutschlandweit einsatzbereit",
    price: "Preise ab 250€ pro Tag (verhandelbar)",
    buttonText: "Switch to English"
  }
};

const FilmEquipment = () => {
  const [language, setLanguage] = useState("EN");
  const toggleLanguage = () => setLanguage(prev => (prev === "EN" ? "DE" : "EN"));
  const currentText = texts[language];

  return (
    <EquipmentContainer>
      <EquipmentHeader>{currentText.header}</EquipmentHeader>
      
      <SectionTitle>Equipment</SectionTitle>
      <EquipmentList>
        {currentText.equipment.map((item, index) => (
          <EquipmentItem key={index}>{item}</EquipmentItem>
        ))}
      </EquipmentList>
      
      <SectionTitle>Skills & Services</SectionTitle>
      <EquipmentList>
        {currentText.skills.map((item, index) => (
          <EquipmentItem key={index}>{item}</EquipmentItem>
        ))}
      </EquipmentList>
      
      <SectionTitle>{currentText.videoTitle}</SectionTitle>
      <VideoEmbed>
        <iframe src={currentText.videoURL} title="Film Reel" allowFullScreen />
      </VideoEmbed>
      
      <SectionTitle>Contact & Info</SectionTitle>
      <EquipmentList>
        <EquipmentItem>{currentText.location}</EquipmentItem>
        <EquipmentItem>{currentText.price}</EquipmentItem>
        <EquipmentItem>
          <ContactLink href="https://wa.me/4915781295360" target="_blank" rel="noopener noreferrer">
            {currentText.contact}
          </ContactLink>
        </EquipmentItem>
      </EquipmentList>
      
      <TranslateButton onClick={toggleLanguage}>
        {currentText.buttonText}
      </TranslateButton>
    </EquipmentContainer>
  );
};

export default FilmEquipment;
