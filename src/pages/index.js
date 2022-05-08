import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import { homeObjTwo, homeObjFour } from '../components/InfoSection/Data'
import Services from '../components/services';
import Footer from '../components/Footer';
import AboutSection, { homeObjOne } from '../components/about/about.js'

const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

    return (
        <>
          <SideBar isOpen={isOpen} toggle={toggle}/>
          <NavBar toggle={toggle}/>
          <HeroSection />
          <InfoSection {...homeObjFour}/>
          <AboutSection {...homeObjOne}/>
          <InfoSection {...homeObjTwo}/>
          <Services />
          <Footer />
        </>
    )
}

export default Home
