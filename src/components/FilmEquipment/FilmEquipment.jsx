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
  TranslateButton,
  Divider
} from './Styles';

const texts = {
  EN: {
    header: "Videography & Storytelling",
    equipment: {
      Camera: ["Blackmagic Pocket Cinema Camera 4K"],
      Lenses: [
        "Sigma 30mm F1.4 DC DN Contemporary Lens (Micro Four Thirds)",
        "Panasonic Lumix G Vario 12-35 mm"
      ],
      Audio: [
        "RØDE Boom Pole (3 meters long)",
        "Sennheiser MKH 416-P48 Boom Mic",
        "Zoom H5 Recorder"
      ],
      Accessories: [
        "Manfrotto Live Travel Tripod"
      ]
    },
    skills: [
      "Camera Operation: Skilled in both handheld and static setups for versatile shooting.",
      "Professional Audio: audio recording both indoor and outdoor for crystal-clear sound.",
      "Post-Production: cutting, audio mixing and color grading in Davinci Resolve Studio.",
    ],
    videoTitle: "My Film Reel",
    videoURL: "https://www.youtube.com/embed/QznlG6t6W8s",
    contact: "Contact me on WhatsApp: +49 15781295360",
    location: "Based in Frankfurt, Berlin & Leipzig – available throughout Germany",
    price: "Rates starting at €250/day for a 6-hour workday.",
    buttonText: "Switch to German"
  },
  DE: {
    header: "Videografie & Storytelling",
    equipment: {
      Camera: ["Blackmagic Pocket Cinema Camera 4K"],
      Lenses: [
        "Sigma 30mm F1.4 DC DN Contemporary Lens (Micro Four Thirds)",
        "Panasonic Lumix G Vario 12-35 mm"
      ],
      Audio: [
        "RØDE Boom Pole (3 Meter lang)",
        "Sennheiser MKH 416-P48 Boom Mikrofon",
        "Zoom H5 Recorder"
      ],
      Accessories: [
        "Manfrotto Live Travel Stativ"
      ]
    },
    skills: [
      "Kamerabedienung: Erfahren in Handheld- und statischen Aufbauten für vielseitige Aufnahmen.",
      "Professionelles Audio: Audioaufnahmen sowohl drinnen als auch draußen für kristallklaren Sound.",
      "Post-Produktion: Schneiden, Audiomischung und Farbkorrektur in Davinci Resolve Studio."
    ],
    
    videoTitle: "Mein Film-Reel",
    videoURL: "https://www.youtube.com/embed/QznlG6t6W8s",
    contact: "Kontaktieren Sie mich via WhatsApp: +49 15781295360",
    location: "Standorte: Frankfurt, Berlin & Leipzig – deutschlandweit einsatzbereit",
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

      <TranslateButton onClick={toggleLanguage}>
        {currentText.buttonText}
      </TranslateButton>
      <Divider />

      <VideoEmbed>
        <iframe src={currentText.videoURL} title="Film Reel" allowFullScreen />
      </VideoEmbed>

      {Object.keys(currentText.equipment).map((section, idx) => (
        <div key={idx}>
          <SectionTitle>{section}</SectionTitle>
          <EquipmentList>
            {currentText.equipment[section].map((item, index) => (
              <EquipmentItem key={index}>{item}</EquipmentItem>
            ))}
          </EquipmentList>
        </div>
      ))}

      <SectionTitle>Skills & Services</SectionTitle>
      <EquipmentList>
        {currentText.skills.map((item, index) => (
          <EquipmentItem key={index}>{item}</EquipmentItem>
        ))}
      </EquipmentList>

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
    </EquipmentContainer>
  );
};

export default FilmEquipment;
