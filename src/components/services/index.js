import React from 'react';
import Icon1 from '../../images/office.JPG';
import Icon2 from '../../images/building.JPG';
import Icon3 from '../../images/svg-2.svg';
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP
} from './Services';

const Services = () => {
  return (
    <ServicesContainer id='blog'>
      <ServicesH1>Soar Blog</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Wellness</ServicesH2>
          <ServicesP>
            place holder information place holder information
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Health</ServicesH2>
          <ServicesP>
            place holder information place holder information
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Get Started</ServicesH2>
          <ServicesP>
            place holder information place holder information
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
