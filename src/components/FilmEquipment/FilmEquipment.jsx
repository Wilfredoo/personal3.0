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
        "Panasonic Lumix G Vario 12-35 mm / F2.8 ASPH. / Power O.I.S. (Black)"
      ],
      Audio: [
        "RØDE Boom Pole 3 m",
        "Zoom H5 Recorder",
        "Sennheiser MKH 416-P48 Boom Mic"
      ],
      Accessories: [
        "Manfrotto Befree Live Travel Video Tripod"
      ]
    },
    skills: [
      "Camera Operation: Skilled in both handheld and static setups for versatile shooting.",
      "Post-Production Mastery: Expert in DaVinci Resolve for cutting, audio mixing and color grading.",
      "Professional Audio: Superior audio recording for crystal-clear sound.",
      "Creative Lighting: Innovative setups using Aputure MC Lights, lightstands, and reflectors."
    ],
    videos: [
      {
        title: "My Film Reel",
        url: "https://www.youtube.com/embed/QznlG6t6W8s"
      },
      {
        title: "Additional Work",
        url: "https://www.youtube.com/embed/KSrXyIQeAUo"
      }
    ],
    contact: "Contact me on WhatsApp: +491757025622",
    location: "Based in Berlin – available throughout Europe",
    price: "Rates starting at €250/day",
    buttonText: "Switch to German"
  },
  DE: {
    header: "Videografie & Storytelling",
    equipment: {
      Kamera: ["Blackmagic Pocket Cinema Camera 4K"],
      Objektive: [
        "Sigma 30mm F1,4 DC DN Contemporary Objektiv (Micro Four Thirds)",
        "Panasonic Lumix G Vario 12-35 mm / F2.8 ASPH. / Power O.I.S. (Schwarz)"
      ],
      Audio: [
        "RØDE Boompole 3 m",
        "Zoom H5 Recorder",
        "Sennheiser MKH 416-P48 Boom-Mikrofon"
      ],
      Zubehör: [
        "Manfrotto Befree Live Reise-Videostativ"
      ]
    },
    skills: [
      "Kameraarbeit: Erfahren in Handheld- und statischen Aufnahmen für vielseitige Einsatzmöglichkeiten.",
      "Postproduktions-Expertise: Experte in DaVinci Resolve für Schnitt, Audiomixing und Color Grading.",
      "Professioneller Ton: Überlegene Audioaufnahmen für kristallklaren Klang.",
      "Kreative Beleuchtung: Innovative Setups mit Aputure MC Lights, Lichtständern und Reflektoren."
    ],
    videos: [
      {
        title: "Mein Film-Reel",
        url: "https://www.youtube.com/embed/QznlG6t6W8s"
      },
      {
        title: "Zusätzliche Arbeiten",
        url: "https://www.youtube.com/embed/KSrXyIQeAUo"
      }
    ],
    contact: "Kontaktieren Sie mich via WhatsApp: +491757025622",
    location: "Ansässig in Berlin – europaweit verfügbar",
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

      {currentText.videos.map((video, index) => (
        <VideoEmbed key={index}>
          <iframe src={video.url} title={video.title} allowFullScreen />
        </VideoEmbed>
      ))}

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
          <ContactLink href="https://wa.me/491757025622" target="_blank" rel="noopener noreferrer">
            {currentText.contact}
          </ContactLink>
        </EquipmentItem>
      </EquipmentList>
    </EquipmentContainer>
  );
};

export default FilmEquipment;
