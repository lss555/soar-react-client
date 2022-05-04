import React, { useState } from 'react';
import Icon1 from '../../images/Cherijaelin2.jpg';
import Icon2 from '../../images/Workplace1.jpg';
import Icon3 from '../../images/Cheri.jpg';
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP
} from './Services';
import InfoModal from '../info-modal/InfoModal.js';
// import styled from 'styled-components';

const Services = () => {
  const [showInfoModal, setShowInfoModal] = useState(false);
  const [hover, setHover] = useState(false);

  const openInfoModal = () => {
    setShowInfoModal(prev => !prev);
    console.log('clicked', showInfoModal)
  };

  const onHover = () => {
    setHover(!hover)
  }

  // function setFunction() {
  //   setShowInfoModal(true);
  // };

  return (
    <ServicesContainer id='services'>
      <ServicesH1>Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard
        onClick={openInfoModal}
        onMouseEnter={onHover}
        onMouseLeave={onHover}
        >
          <ServicesIcon src={Icon1} />
          <ServicesH2>Equine Therapy</ServicesH2>
          <ServicesP>
            Work with horses
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Group Therapy</ServicesH2>
          <ServicesP>
            Group therapy can show that you're not alone.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>individual Therapy</ServicesH2>
          <ServicesP>
            Most popular and a great place to start making change for you.
          </ServicesP>
          <InfoModal showInfoModal={showInfoModal} setShowInfoModal={setShowInfoModal}/>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
