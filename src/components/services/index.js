import React, { useState } from 'react';
import Icon1 from '../../images/Cherijaelin2.jpg';
import Icon2 from '../../images/Workplace1.jpg';
import Icon3 from '../../images/Workplace5.jpg';
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP
} from './Services';
import { animateScroll as scroll } from 'react-scroll'
// import styled from 'styled-components';

const Services = () => {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover)
  };

  // function setFunction() {
  //   setShowInfoModal(true);
  // };

  const toggleHome = () => {
    scroll.scrollToTop();
  }

  return (
    <ServicesContainer id='services'>
      <ServicesH1>Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard
        to='/service'
        onMouseEnter={onHover}
        onMouseLeave={onHover}
        onClick={toggleHome}
        >
          <ServicesIcon src={Icon3} />
          <ServicesH2>individual Therapy</ServicesH2>
          <ServicesP>
            Most popular and a great place to start making change for you. Click here to explore individual therapy
          </ServicesP>
        </ServicesCard>
        <ServicesCard
        to='/service'
        onMouseEnter={onHover}
        onMouseLeave={onHover}
        onClick={toggleHome}
        >
          <ServicesIcon src={Icon2} />
          <ServicesH2>Couples Therapy</ServicesH2>
          <ServicesP>
            Couple therapy can show that you're not alone. Click here to explore group therapy
          </ServicesP>
        </ServicesCard>
        <ServicesCard
        to='/service'
        onMouseEnter={onHover}
        onMouseLeave={onHover}
        onClick={toggleHome}
        >
          <ServicesIcon src={Icon1} />
          <ServicesH2>Equine Therapy</ServicesH2>
          <ServicesP>
            Work with horses. Click here to explore equine therapy
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
