import React from 'react';
import { FooterContainer,FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkTitle, FooterLinkItems, FooterLink, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons, SocialIconLink } from './Footer'
import { FaFacebook } from 'react-icons/fa'
import { animateScroll as scroll } from 'react-scroll'

const Footer = () => {

  const toggleHome = () => {
    scroll.scrollToTop();
  };

    return (
        <FooterContainer>
          <FooterWrap>
            <FooterLinksContainer>
              <FooterLinksWrapper>
                <FooterLinkItems>
                  <FooterLinkTitle>Contact</FooterLinkTitle>
                    <FooterLink to='/sign-in'>702 Platinum Dr.</FooterLink>
                    <FooterLink to='/sign-in'>Cody, WY 82414</FooterLink>
                    <FooterLink to='/sign-in'>+1-307-250-1338</FooterLink>
                    <FooterLink to='/sign-in'>Kreitzmannco@gmail.com</FooterLink>
                </FooterLinkItems>
                <FooterLinkItems>
                  <FooterLinkTitle>Links and Media</FooterLinkTitle>
                    <FooterLink href='https://www.facebook.com/SOAR-Counseling-Service-104003708022475/' target='_blank'>Soar Facebook</FooterLink>
                    <FooterLink href='https://nami.org/Home' target='_blank'>NAMI</FooterLink>
                    <FooterLink href='https://acim.org/' target='_blank'>A Course In Miracles</FooterLink>
                    <FooterLink href='https://www.psychologytoday.com/us' target='_blank' >Psychology Today</FooterLink>
                    <FooterLink href='https://www.hearttoheartwy.org/' target='_blank' >Heart to Heart WY</FooterLink>
                </FooterLinkItems>
              </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMedia>
              <SocialMediaWrap>
                <SocialLogo to='/' onClick={toggleHome}>
                  SOAR
                </SocialLogo>
                  <WebsiteRights>Soar Counseling Services Inc. © {new Date().getFullYear()}</WebsiteRights>
                  <SocialIcons>
                    <SocialIconLink href='https://www.facebook.com/SOAR-Counseling-Service-104003708022475/' target='_blank' aria-label='Facebook'><FaFacebook /></SocialIconLink>
                  </SocialIcons>
              </SocialMediaWrap>
            </SocialMedia>
          </FooterWrap>
        </FooterContainer>
    )
}

export default Footer;
