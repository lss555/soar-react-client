import React, { useState, useEffect } from 'react'
import { FaBars } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll'
import { Nav, NavBarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from './NavBar'

const NavBar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
      if(window.scrollY > 80) {
        setScrollNav(true)
      } else {
        setScrollNav(false)
      }
    }

    useEffect(() => {
      window.addEventListener('scroll', changeNav)
    }, [])

    const toggleHome = () => {
      scroll.scrollToTop();
    }

    return (
        <React.Fragment>
          <IconContext.Provider value={{ color: '#010606' }}>
            <Nav scrollNav={scrollNav}>
              <NavBarContainer>
                <NavLogo to='/' onClick={toggleHome}>
                  SOAR
                </NavLogo>
                <MobileIcon onClick={toggle}>
                  <FaBars />
                </MobileIcon>
                <NavMenu>
                  <NavItem>
                    <NavLinks to='about'
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-80}
                    >About</NavLinks>
                  </NavItem>
                  <NavItem>
                    <NavLinks to='faq'
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-80}
                    >FAQ</NavLinks>
                  </NavItem>
                  <NavItem>
                    <NavLinks to='blog'
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-80}
                    >Blog</NavLinks>
                  </NavItem>
                  <NavItem>
                    <NavLinks to='contact'
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-80}
                    >Contact</NavLinks>
                  </NavItem>
                </NavMenu>
                <NavBtn>
                  <NavBtnLink to='sign-in'>Sign In</NavBtnLink>
                </NavBtn>
              </NavBarContainer>
            </Nav>
          </IconContext.Provider>
        </React.Fragment>
    )
}

export default NavBar
