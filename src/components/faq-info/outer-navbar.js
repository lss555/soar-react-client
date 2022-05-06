import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';
import React, { useState, useEffect } from 'react'
import { FaBars } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll'

const OuterNav = styled.nav`
  background: ${({ scrollOuterNav }) => (scrollOuterNav ? '#189AC0' : 'transparent')};
  height: 80px;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

const OuterNavBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

const OuterNavLogo = styled(LinkR)`
  color: #010606;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
`;

const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 1.6rem;
    right: 1.6rem;
    transfrom: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #FCF3CF;
  }
`;

const OuterNavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: 10rem;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const OuterNavItem = styled.li`
  height: 80px;
`;

const OuterNavLinks = styled(LinkS)`
  color: #010606;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid rgba(188, 152, 106, 1);
  }
`;

// const OuterNavBtn = styled.nav`
//   display: flex;
//   align-items: center;
//
//   @media screen and (max-width: 768px) {
//     display: none;
//   }
// `;
//
// const OuterNavBtnLink = styled(LinkR)`
//   border-radius: 50px;
//   background: #FCF3CF;
//   white-space: nowrap;
//   padding: 10px 22px;
//   color: #010606;
//   font-size: 16px;
//   outline: none;
//   border: none;
//   cursor: pointer;
//   transition: all -.2s ease-in-out;
//   text-decoration: none;
//
//   &:hover {
//     tansition: all 0.2s ease-in-out;
//     background: #bc986a;
//     color: #010606;
//   }
// `;

const OuterNavBar = ({ toggle }) => {
    const [scrollOuterNav, setScrollOuterNav] = useState(false)


    const changeOuterNav = () => {
      if(window.scrollY > 80) {
        setScrollOuterNav(true)
      } else {
        setScrollOuterNav(false)
      }
    }

//     useEffect(() => {
//     // set our variable to true
//     let cleanUpFunc = true;
//     .then((response) => {
//         if (cleanUpFunc) {
//             // handle success
//         }
//     });
//     return () => {
//         // cancel the subscription
//         cleanUpFunc = false;
//     };
// }, []);

    useEffect(() => {

      window.addEventListener('scroll', changeOuterNav)

      return () => {
        window.removeEventListener('scroll', changeOuterNav)
      }
    }, [])

    const toggleHome = () => {
      scroll.scrollToTop();
    }

    return (
        <React.Fragment>
          <IconContext.Provider value={{ color: '#010606' }}>
            <OuterNav scrollOuterNav={scrollOuterNav}>
              <OuterNavBarContainer>
                <OuterNavLogo to='/' onClick={toggleHome}>
                  SOAR
                </OuterNavLogo>
                <MobileIcon onClick={toggle}>
                  <FaBars />
                </MobileIcon>
                <OuterNavMenu>
                  <OuterNavItem>
                    <OuterNavLinks to='about'
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-80}
                    >About</OuterNavLinks>
                  </OuterNavItem>
                  <OuterNavItem>
                    <OuterNavLinks to='faq'
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-80}
                    >FAQ</OuterNavLinks>
                  </OuterNavItem>
                  <OuterNavItem>
                    <OuterNavLinks to='services'
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-80}
                    >Services</OuterNavLinks>
                  </OuterNavItem>
                </OuterNavMenu>
              </OuterNavBarContainer>
            </OuterNav>
          </IconContext.Provider>
        </React.Fragment>
    )
}

export default OuterNavBar
