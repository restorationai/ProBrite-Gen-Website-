
import React from 'react';
import Hero from './Hero';
import TrustStrip from './TrustStrip';
import About from './About';
import Services from './Services';
import Process from './Process';
import Gallery from './Gallery';
import Reviews from './Reviews';
import FAQ from './FAQ';
import ServiceAreas from './ServiceAreas';
import FinalCTA from './FinalCTA';
import { PageType } from '../App';

interface HomePageProps {
  onNavigate: (page: PageType) => void;
  onOpenQuote: () => void;
}

const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenQuote }) => {
  return (
    <>
      <Hero />
      <TrustStrip />
      <About />
      <Services onNavigate={onNavigate} />
      <Process />
      <Gallery onNavigate={onNavigate} />
      <FAQ />
      <ServiceAreas />
      <FinalCTA onOpenQuote={onOpenQuote} />
    </>
  );
};

export default HomePage;
