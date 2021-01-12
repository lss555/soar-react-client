import React from 'react';
import Video from '../../videos/video.mp4';
import { HeroContainer, HeroBg, VideoBg } from './Hero'

const HeroSection = () => {
    return (
        <HeroContainer id='home'>
          <HeroBg>
            <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
          </HeroBg>
        </HeroContainer>
    )
}

export default HeroSection
