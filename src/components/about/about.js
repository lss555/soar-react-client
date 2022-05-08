import React, { useState } from 'react';
import { Button } from '../ButtonElement.js';
import { AboutModal } from './aboutModal.js'
import { ArrowForward, ArrowRight } from '../HeroSection/Hero.js'
import styled from 'styled-components'

import { InfoContainer, InfoWrapper, InfoRow, Column1, TextWrapper, TopLine, Heading, SubTitle, Column2, ImgWrap, Img } from '../InfoSection/Info.js';

// const AboutContainer = styled.div`
//
// `;

// const ModalCont = styled.div`
//   width: 100%;
//   height: 100%;
//   position: fixed;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   opacity: 1;
// `;

export const AboutBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;


export const homeObjOne = {
  id: 'about',
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine:'Cheri Kreitzmann, MS, LPC',
  headline: 'About Soar',
  description: 'Soar Counseling Services started in Shell Lake WI in 2003. After working in administration for several years Cheri wanted to work in direct service with individuals struggling with mental health issues.  After realizing a shortage in outpatient mental health facilities Soar was born and quickly after became incorperrated as a wisconsin state liscensed outpatient clinic for substance abuse and mental health services. Cheri is now the director and active therapist at soar counseling services with 29 years of experience. In 2011 Cheri moved to Wyoming to start a new chapter of soar, incorperating it in the state of Wyoming and contining to practice every since.',
  buttonLabel: 'Send me a message',
  imgStart: false,
  img: require('../../images/profile.jpg').default,
  alt: 'profile image',
  dark: true,
  primary: true,
  darkText: false
}

const AboutSection = ({ lightBg, id, imgStart, topLine, lightText, headline, darkText, description, buttonLabel, img, alt, primary, dark, dark2, destination, submitSuccess, setSubmitSuccess }) => {
  const [hover, setHover] = useState(false)
  const [showModal, setShowModal] = useState(false)

  const openModal = () => {
    setShowModal(prev => !prev)
  }

  const onHover = () => {
    setHover(!hover)
  }

// <Modal submitSuccess={submitSuccess} setSubmitSuccess={setSubmitSuccess} showModal={showModal} setShowModal={setShowModal} />

    return (
        <>
          <InfoContainer lightBg={lightBg} id={id}>
            <InfoWrapper>
              <InfoRow imgStart={imgStart}>
                <Column1>
                  <TextWrapper>
                    <TopLine>{topLine}</TopLine>
                    <Heading lightText={lightText}>{headline}</Heading>
                    <SubTitle darkText={darkText}>{description}</SubTitle>
                    <AboutBtnWrapper>
                      <Button
                      to='about'
                      onClick={openModal}
                      onMouseEnter={onHover}
                      onMouseLeave={onHover}
                      primary='true'
                      dark='true'
                      smooth={true}
                      duration={500}
                      spy={true}
                      exact='true'
                      offset={-80}
                      >
                        Contact {hover ? <ArrowForward /> : <ArrowRight />}
                      </Button>
                    </AboutBtnWrapper>
                  </TextWrapper>
                </Column1>
                <AboutModal submitSuccess={submitSuccess} setSubmitSuccess={setSubmitSuccess} showModal={showModal} setShowModal={setShowModal} />
                <Column2>
                  <ImgWrap>
                    <Img src={img} alt={alt}/>
                  </ImgWrap>
                </Column2>
              </InfoRow>
            </InfoWrapper>
          </InfoContainer>
        </>
    )
}

export default AboutSection
