import React from 'react'

import ServicesHeroSection from "./_components/ServicesHeroSection";
import ServiceThreeCards from "./_components/ServiceThreeCards";
import ServicesProject from "./_components/ServicesProjects";
import ServicesScrollSection from "./_components/ServicesCrouselSection";
import ServicesFAQ from "./_components/ServicesFaqs";
import PartnersSection from "./_components/ServicesPartner";
import ServicesBoxSection from "./_components/ServicesBoxSection";
const cardData = [
  {
    title: "Strategy",
    description:
      "At the core of our audio services is a strategic foundation. We begin by understanding your brand's voice, target audience, and communication goals. This allows us to identify opportunities and challenges, enabling the development of a tailored audio approach that aligns with your brand's identity.",
  },
  {
    title: "Positioning",
    description:
      "With strategic insights in place, we define how your brand should sound in the competitive landscape. This phase focuses on shaping your sonic identity—positioning your audio assets to emotionally connect with your audience while standing out through originality and consistency.",
  },
  {
    title: "Creative",
    description:
      "Our creative phase brings your sonic identity to life. From composing custom music and designing sound effects to recording compelling voiceovers, we craft immersive audio experiences that enhance engagement, reinforce your brand message, and leave a lasting impression.",
  },
];

const projectImages = [
  "https://images.prismic.io/cuub/Z0R6yq8jQArT1RfO_2.jpg?ixlib=gatsbyFP&auto=format%2Ccompress&fit=max&q=75&w=920",
  "https://images.prismic.io/cuub/Z0R6zq8jQArT1RfP_3.jpg?ixlib=gatsbyFP&auto=format%2Ccompress&fit=max&q=75&w=920",
  "https://images.prismic.io/cuub/Z03cqZbqstJ979Up_410TOORAKRDV07GFLIVING&DININGFINALEDIT.jpg?ixlib=gatsbyFP&auto=format%2Ccompress&fit=max&q=75&w=1867",
];

const crouselContent = {
  mainHeading: "Professional & Clear:",
  steps: [
    {
      number: "01",
      title: "Audio Mixing & Mastering",
      description:
        "**Audio Mixing & Mastering** balances sound elements, enhances clarity, and ensures professional-quality audio for music, podcasts, films, and digital media platforms..",
    },
    {
      number: "02",
      title: "Live Audio Engineering",
      description:
        "**Live Audio Engineering** manages sound quality during live events, ensuring clear audio, proper levels, and seamless technical execution for audiences and performers.",
    },
    {
      number: "03",
      title: "Original Music Composition",
      description:
        "**Original Music Composition** creates unique, tailor-made music pieces for films, ads, games, and branding, enhancing emotional impact and audience engagement.",
    },
    {
      number: "04",
      title: "Audiobook Production",
      description:
        "**Audiobook Production** involves recording, editing, and mastering spoken content, delivering high-quality, engaging audio experiences for authors, publishers, and listeners across platforms.",
    },
  ],
};

const crouselImages = [
  "/images/Servicesimages/01 AudioServices.jpg", // Building image for step 1
  "/images/Servicesimages/02 AudioServices.avif", // Different building for step 2
  "/images/Servicesimages/03 AudioServices.avif", // Interior visualization for step 3
  "/images/Servicesimages/04 AudioServices.avif", // Final delivery visualization for step 4
];


 const faqData = [
  {
    question: "What is Interactive Voice Recording (IVR) and how do you support it?",
    answer:
      "IVR is an automated phone system that interacts with callers using voice prompts. We create professional-grade IVR recordings tailored to your brand’s tone, using clear, articulate voice talents and background music if needed.",
  },
  {
    question: "Can I provide my own script for audio commercials or IVR?",
    answer:
      "Yes, you can provide your own script. We also offer scriptwriting assistance if you need help crafting a message that aligns with your brand and converts effectively.",
  },
  {
    question: "What’s your process for creating audio commercials?",
    answer:
      "We begin with a creative brief, finalize the script, record with professional voice talent, add background music or effects, and deliver a polished commercial ready for broadcast or digital use.",
  },
  {
    question: "Do you offer custom music composing?",
    answer:
      "Yes, our music composers create original tracks for ads, videos, IVR systems, and more — tailored to your mood, genre, and brand identity.",
  },
  {
    question: "How many revisions are included in your audio services?",
    answer:
      "We offer up to 2 rounds of revisions for most audio projects to ensure you’re fully satisfied with the final output.",
  },
  {
    question: "How long does it take to deliver a project?",
    answer:
      "Most projects are completed within 3–5 business days, depending on complexity. IVRs and short commercials are usually quicker, while custom music may take slightly longer.",
  },
]


  const handleSendMessage = () => {
    console.log("Send message clicked")
    // Implement your send message functionality here
  }

  const handleScheduleCall = () => {
    console.log("Schedule call clicked")
    // Implement your schedule call functionality here
  }
    const partnersData = [
    { name: "KFK", logo: "/images/brands/brand-1.avif", alt: "KFK Logo" },
    { name: "DKO", logo: "/images/brands/brand-2.avif", alt: "DKO Logo" },
    { name: "Milieu", logo: "/images/brands/brand-3.avif", alt: "Milieu Logo" },
    { name: "Assemble", logo: "/images/brands/brand-4.avif", alt: "Assemble Logo" },
    { name: "PVA", logo: "/images/brands/brand-5.avif", alt: "PVA Logo" },
    { name: "FIELDWORK", logo: "/images/brands/brand-6.avif", alt: "FIELDWORK Logo" },
    { name: "MAIN PROJECTS", logo: "/images/brands/brand-7.avif", alt: "MAIN PROJECTS Logo" },
    { name: "MHNDU", logo: "/images/brands/brand-8.avif", alt: "MHNDU Logo" },
    { name: "PS", logo: "/images/brands/brand-9.avif", alt: "PS Logo" },
    { name: "Eldridge Anderson", logo: "/images/brands/brand-10.avif", alt: "Eldridge Anderson Logo" },
];
const AudioServices = () => {
  
  return (
    <>
      <ServicesHeroSection
        backgroundImageUrl="https://images.prismic.io/cuub/f2464877-c4f5-462a-8d2a-93a976bc7d71_CREMORNE%20V04.jpg?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&q=75&w=1920"
        title="Audio Services"
      />
      <ServiceThreeCards cards={cardData} />
      <ServicesProject projectImages={projectImages} />
      <ServicesScrollSection content={crouselContent} images={crouselImages} />
       <PartnersSection partners={partnersData} />
      <ServicesFAQ faqItems={faqData} onSendMessage={handleSendMessage} onScheduleCall={handleScheduleCall} />
      <ServicesBoxSection/>
    </>
  )
}

export default AudioServices