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
  headline: 'About Cheri',
  description: 'Cheri is a Licensed Professional Counselor in the State of Wyoming. She has been practicing in the counseling field in a variety of settings since 1993. She works with adults, children above the age of 6, adolescent, couples, and families. Cheri supports clients in their emotional journeys with evidenced based treatments to include CBT, REBT, Transpersonal, Mindfulness and Solution Focused Counseling.  She has supported individual’s in working through depression, anxiety, mood instability and relationship challenges by providing a safe space and positive coping tools to enhance resilience and celebrate each person’s authentic self.',
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
    console.log('open modal', showModal)
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
