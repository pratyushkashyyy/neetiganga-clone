import React from 'react';
import Hero from '../components/Hero';
import PhilosophySection from '../components/PhilosophySection';
import AboutSection from '../components/AboutSection';
import ServicesGrid from '../components/ServicesGrid';
import TeamSection from '../components/TeamSection';
import ContactForm from '../components/ContactForm';

const Home = () => {
  return (
    <>
      <Hero />
      <PhilosophySection />
      <AboutSection />
      <ServicesGrid />
      <TeamSection />
      <ContactForm />
    </>
  );
};

export default Home;
