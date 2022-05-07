import React from 'react';
// import { Modal } from '../Modal/Modal.js'
import { Link } from "react-router-dom";
import styled from 'styled-components';
import { InfoContainer, InfoWrapper, InfoRow, Column1, TextWrapper, TopLine, Heading, SubTitle, BtnWrap, Column2, ImgWrap, Img } from './Info.js';
import './faq-home.css'
import { animateScroll as scroll } from 'react-scroll'

const Button = styled.div`
  border-radius: 3px;
  background: ${({primary}) => (primary ? '#bc986a' : '#189AC0')};
  white-space: nowrap;
  padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
  color: ${({dark}) => (dark ? '#010606' : '#fff')};
  font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({primary}) => (primary ? '#bc986a' : '#bc986a')};
    background-color: #189AC0;
  }
  
`;

const toggleHome = () => {
  scroll.scrollToTop();
}

const InfoSection = ({ lightBg, id, imgStart, topLine, lightText, headline, darkText, description, buttonLabel, img, alt, primary, dark, dark2, destination}) => {
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
                    <BtnWrap>
                    <Link to='/cq' className='faq-link'>
                    <Button
                    to='/cq'
                    onClick={toggleHome}
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    dark2={dark2 ? 1 : 0}
                    >{buttonLabel}</Button>
                    </Link>
                    </BtnWrap>
                  </TextWrapper>
                </Column1>
                <Column2>
                  <ImgWrap>
                    <Img className={id} src={img} alt={alt}/>
                  </ImgWrap>
                </Column2>
              </InfoRow>
            </InfoWrapper>
          </InfoContainer>
        </>
    )
}

export default InfoSection
