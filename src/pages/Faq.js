
import Footer from '../components/Footer';
import OuterNavBar from '../components/faq-info/outer-navbar.js';
import SideBar from '../components/SideBar';
import React, { useState } from 'react';
import FaqPage from '../components/faq-info/faq-info.js';

const Faq = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => {
    setIsOpen(!isOpen)
  }

    return (
        <>
          <SideBar isOpen={isOpen} toggle={toggle}/>
          <OuterNavBar toggle={toggle}/>
          <FaqPage />
          <Footer />
        </>
    )
}

export default Faq;
