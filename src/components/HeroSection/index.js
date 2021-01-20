import React, { useState } from 'react';
import Video from '../../videos/video.mp4';
import { HeroContainer, HeroBg, VideoBg, HeroP, HeroH1, HeroContent, HeroBtnWrapper, ArrowForward, ArrowRight } from './Hero'
import { Button } from '../ButtonElement.js';
import './HeroSection.css'
import { Modal } from '../../components/Modal/Modal.js'
// import Modal from 'react-modal';
// import styled from 'styled-components';

// const Button = styled.button`
//   min-width: 100px;
//   padding: 16px 32px;
//   border-radius: 4px;
//   border: none;
//   background: #141414;
//   color: #fff;
//   font-size: 24px;
//   cursor: pointer;
// `;

const HeroSection = () => {
  const [hover, setHover] = useState(false)
  const [showModal, setShowModal] = useState(false)

  const openModal = () => {
    setShowModal(prev => !prev)
  }

  const onHover = () => {
    setHover(!hover)
  }
    return (
      <>
        <HeroContainer id='home'>
          <HeroBg>
            <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
          </HeroBg>
          <HeroContent>
            <HeroH1>Soar Counseling</HeroH1>
            <HeroP>Cody, Wyoming</HeroP>
            <HeroBtnWrapper>
              <Button
              to='home'
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
            </HeroBtnWrapper>
            <Modal showModal={showModal} setShowModal={setShowModal} />
          </HeroContent>
        </HeroContainer>
        </>
    )
}

export default HeroSection
