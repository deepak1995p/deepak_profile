import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import CaseStudies from '../components/CaseStudies';
import Testimonials from '../components/Testimonials';
import RecentWork from '../components/RecentWork';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <CaseStudies />
      <Testimonials />
      <RecentWork />
      <ContactSection />
      <Footer />
    </>
  );
}
