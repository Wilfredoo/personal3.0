// FilmEquipment.jsx
import React, { useState, useEffect } from 'react';
import {
  PageWrapper,
  EquipmentContainer,
  EquipmentHeader,
  Subtitle,
  LocationRow,
  LocationBadge,
  HomeBase,
  SectionTitle,
  EquipmentList,
  EquipmentItem,
  VideoGrid,
  VideoEmbed,
  VideoLabel,
  LanguageSelect,
  Divider,
  SkillsGrid,
  SkillCard,
  SkillCardTitle,
  SkillCardDesc,
  InfoRow,
  PriceStat,
  PriceAmount,
  PriceNote,
  CTAButton,
} from './Styles';

const texts = {
  EN: {
    header: "Videography & Storytelling",
    subtitle: "Berlin · Worldwide",
    currentLocation: "📍 In Portugal",
    homeBase: "Home base: Berlin, Germany",
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
      "Camera Operation: Handheld and static setups for versatile shooting.",
      "Post-Production: Expert in DaVinci Resolve — editing, audio mixing, color grading.",
      "Professional Audio: High-grade recording for crystal-clear sound.",
      "Creative Lighting: Aputure MC Lights, lightstands, and reflectors."
    ],
    videos: [
      { title: "Film Reel",        url: "https://www.youtube.com/embed/QznlG6t6W8s" },
      { title: "Additional Work",  url: "https://www.youtube.com/embed/KSrXyIQeAUo" },
      { title: "Videography Reel", url: "https://www.youtube.com/embed/OAdzy8sYx3A" }
    ],
    contact: "WhatsApp · +49 175 702 5622",
    priceNote: "per day · starting rate"
  },
  DE: {
    header: "Videografie & Storytelling",
    subtitle: "Berlin · Weltweit",
    currentLocation: "📍 In Portugal bis 18. Juni",
    homeBase: "Heimatbasis: Berlin, Deutschland",
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
      "Kameraarbeit: Handheld- und statische Aufnahmen für vielseitige Einsätze.",
      "Postproduktion: Experte in DaVinci Resolve — Schnitt, Audiomixing, Color Grading.",
      "Professioneller Ton: Hochwertige Aufnahmen für kristallklaren Klang.",
      "Kreative Beleuchtung: Aputure MC Lights, Lichtständer und Reflektoren."
    ],
    videos: [
      { title: "Film-Reel",           url: "https://www.youtube.com/embed/QznlG6t6W8s" },
      { title: "Zusätzliche Arbeiten",url: "https://www.youtube.com/embed/KSrXyIQeAUo" },
      { title: "Videografie Reel",    url: "https://www.youtube.com/embed/OAdzy8sYx3A" }
    ],
    contact: "WhatsApp · +49 175 702 5622",
    priceNote: "pro Tag · verhandelbar"
  },
  PT: {
    header: "Videografia & Storytelling",
    subtitle: "Berlim · Mundial",
    currentLocation: "📍 Em Portugal até 18 de junho",
    homeBase: "Base: Berlim, Alemanha",
    equipment: {
      Câmera: ["Blackmagic Pocket Cinema Camera 4K"],
      Lentes: [
        "Sigma 30mm F1.4 DC DN Contemporary (Micro Four Thirds)",
        "Panasonic Lumix G Vario 12-35 mm / F2.8 ASPH. / Power O.I.S. (Preto)"
      ],
      Áudio: [
        "RØDE Boom Pole 3 m",
        "Zoom H5 Recorder",
        "Sennheiser MKH 416-P48 Boom Mic"
      ],
      Acessórios: [
        "Manfrotto Befree Live Tripé de Viagem"
      ]
    },
    skills: [
      "Operação de Câmera: Gravações handheld e estáticas para máxima versatilidade.",
      "Pós-Produção: Expert em DaVinci Resolve — edição, mixagem de áudio, correção de cor.",
      "Áudio Profissional: Gravação de alta qualidade para som cristalino.",
      "Iluminação Criativa: Aputure MC Lights, tripés e refletores."
    ],
    videos: [
      { title: "Reel de Cinema",      url: "https://www.youtube.com/embed/QznlG6t6W8s" },
      { title: "Trabalhos Adicionais",url: "https://www.youtube.com/embed/KSrXyIQeAUo" },
      { title: "Reel de Videografia", url: "https://www.youtube.com/embed/OAdzy8sYx3A" }
    ],
    contact: "WhatsApp · +49 175 702 5622",
    priceNote: "por dia · negociável"
  }
};

const FilmEquipment = () => {
  const [language, setLanguage] = useState("EN");
  const t = texts[language];

  useEffect(() => {
    const prev = document.body.style.backgroundColor;
    document.body.style.backgroundColor = '#000000';
    return () => { document.body.style.backgroundColor = prev; };
  }, []);

  return (
    <PageWrapper>
    <EquipmentContainer>

      {/* ── Header ── */}
      <EquipmentHeader>{t.header}</EquipmentHeader>
      <Subtitle>{t.subtitle}</Subtitle>

      <LocationRow>
        <LocationBadge>{t.currentLocation}</LocationBadge>
        <HomeBase>{t.homeBase}</HomeBase>
      </LocationRow>

      <LanguageSelect value={language} onChange={e => setLanguage(e.target.value)}>
        <option value="EN">🇬🇧 English</option>
        <option value="DE">🇩🇪 Deutsch</option>
        <option value="PT">🇵🇹 Português</option>
      </LanguageSelect>

      <Divider />

      {/* ── Showreel ── */}
      <SectionTitle>Showreel</SectionTitle>
      <VideoGrid>
        {t.videos.map((video, i) => (
          <div key={i}>
            <VideoEmbed>
              <iframe src={video.url} title={video.title} allowFullScreen />
            </VideoEmbed>
            <VideoLabel>{video.title}</VideoLabel>
          </div>
        ))}
      </VideoGrid>

      <Divider />

      {/* ── Equipment ── */}
      {Object.keys(t.equipment).map((section, i) => (
        <div key={i}>
          <SectionTitle>{section}</SectionTitle>
          <EquipmentList>
            {t.equipment[section].map((item, j) => (
              <EquipmentItem key={j}>{item}</EquipmentItem>
            ))}
          </EquipmentList>
        </div>
      ))}

      <Divider />

      {/* ── Skills ── */}
      <SectionTitle>Skills & Services</SectionTitle>
      <SkillsGrid>
        {t.skills.map((item, i) => {
          const [title, desc] = item.split(': ');
          return (
            <SkillCard key={i}>
              <SkillCardTitle>{title}</SkillCardTitle>
              <SkillCardDesc>{desc}</SkillCardDesc>
            </SkillCard>
          );
        })}
      </SkillsGrid>

      <Divider />

      {/* ── Contact & Info ── */}
      <SectionTitle>Contact & Info</SectionTitle>
      <InfoRow>
        <PriceStat>
          <PriceAmount>€400</PriceAmount>
          <PriceNote>{t.priceNote}</PriceNote>
        </PriceStat>
        <CTAButton href="https://wa.me/491757025622" target="_blank" rel="noopener noreferrer">
          {t.contact}
        </CTAButton>
      </InfoRow>

    </EquipmentContainer>
    </PageWrapper>
  );
};

export default FilmEquipment;
