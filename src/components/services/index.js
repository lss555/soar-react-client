import React from 'react';
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

const Services = () => {
  return (
    <ServicesContainer id='services'>
      <ServicesH1>Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Equine Therapy</ServicesH2>
          <ServicesP>
            Work with horses and heal.
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
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
