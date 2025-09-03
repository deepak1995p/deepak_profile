import React from 'react';
import Hero from '../components/Hero';
import CaseStudies from '../components/CaseStudies';
import Testimonials from '../components/Testimonials';
import RecentWork from '../components/RecentWork';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Hero />
      <CaseStudies />
      <Testimonials />
      <RecentWork />
      <ContactSection />
      <Footer />
    </>
  );
}
