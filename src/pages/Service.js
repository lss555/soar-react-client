import Footer from '../components/Footer';
import OuterNavBar from '../components/faq-info/outer-navbar.js';
import OuterSideBar from '../components/faq-info/outer-sidebar.js';
import React, { useState } from 'react';
import ServiceInfo from '../components/services-info/services-info.js';

const Service = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => {
    setIsOpen(!isOpen)
  }

    return (
        <>
          <OuterSideBar isOpen={isOpen} toggle={toggle}/>
          <OuterNavBar toggle={toggle}/>
          <ServiceInfo />
          <Footer />
        </>
    )
}

export default Service;
