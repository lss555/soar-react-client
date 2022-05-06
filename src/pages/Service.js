import Footer from '../components/Footer';
import OuterNavBar from '../components/faq-info/outer-navbar.js';
import SideBar from '../components/SideBar';
import React, { useState } from 'react';
import ServiceInfo from '../components/services-info/services-info.js';

const Service = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => {
    setIsOpen(!isOpen)
  }

    return (
        <>
          <SideBar isOpen={isOpen} toggle={toggle}/>
          <OuterNavBar toggle={toggle}/>
          <ServiceInfo />
          <Footer />
        </>
    )
}

export default Service;
