import React from 'react';
import Icon1 from '../../images/office.JPG';
import Icon2 from '../../images/building.JPG';
import Icon3 from '../../images/yellowstone.jpg';
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
    <ServicesContainer id='services'>
      <ServicesH1>Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Equine Therapy</ServicesH2>
          <ServicesP>
            place holder information place holder information
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Group Therapy</ServicesH2>
          <ServicesP>
            place holder information place holder information
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>individual Therapy</ServicesH2>
          <ServicesP>
            place holder information place holder information
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
