
import Footer from '../components/Footer';
import OuterNavBar from '../components/faq-info/outer-navbar.js';
import OuterSideBar from '../components/faq-info/outer-sidebar.js';
import React, { useState } from 'react';
import FaqPage from '../components/faq-info/faq-info.js';

const Faq = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => {
    setIsOpen(!isOpen)
  }

    return (
        <>
          <OuterSideBar isOpen={isOpen} toggle={toggle}/>
          <OuterNavBar toggle={toggle}/>
          <FaqPage />
          <Footer />
        </>
    )
}

export default Faq;
