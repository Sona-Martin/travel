import React from 'react';
import Header from '../../components/Header';
import Navigation from '../../components/Navbar/Navbar';
import HeroSection from '../../components/HeroSection';
import DestinationCard from '../../components/DestinationCard';
import Footer from '../../components/Footer';

function Home() {
  return (
    <div>
      <Header />
      <Navigation />
      <HeroSection />
      <DestinationCard />
      <Footer />
    </div>
  );
}

export default Home;
