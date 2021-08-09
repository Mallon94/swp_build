import React from 'react';
import '../../App.css';
import PortalCards from '../PortalCards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import PortalNavbar from '../PortalNavbar';

function Portal() {
  return (
    <>
    
    <PortalNavbar/>
      <HeroSection />
      <PortalCards />
      <Footer />
    </>
  );
}

export default Portal;
