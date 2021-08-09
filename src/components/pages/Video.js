import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import Navbar from '../Navbar';
import YoutubeEmbed from '../YoutubeEmbed';

function Video() {
  return (
    <>
      <Navbar/>
      <YoutubeEmbed/>
      <Footer />
    </>
  );
}

export default Video;
