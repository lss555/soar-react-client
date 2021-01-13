import React, { useState } from 'react';
import Video from '../../videos/video.mp4';
import { HeroContainer, HeroBg, VideoBg, HeroP, HeroH1, HeroContent, HeroBtnWrapper, ArrowForward, ArrowRight } from './Hero'
import { Button } from '../ButtonElement.js'

const HeroSection = () => {
  const [hover, setHover] = useState(false)

  const onHover = () => {
    setHover(!hover)
  }
    return (
        <HeroContainer id='home'>
          <HeroBg>
            <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
          </HeroBg>
          <HeroContent>
            <HeroH1>Soar Counseling, Cody, Wyoming</HeroH1>
            <HeroP></HeroP>
            <HeroBtnWrapper>
              <Button to='contact'
              onMouseEnter={onHover}
              onMouseLeave={onHover}
              primary='true'
              dark='true'
              >
                Get in touch {hover ? <ArrowForward /> : <ArrowRight />}
              </Button>
            </HeroBtnWrapper>
          </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
