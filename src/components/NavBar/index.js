import React, { useState, useEffect } from 'react'
import { FaBars } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib';
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

    return (
        <React.Fragment>
          <IconContext.Provider value={{ color: '#010606' }}>
            <Nav scrollNav={scrollNav}>
              <NavBarContainer>
                <NavLogo to='/'>
                  SOAR
                </NavLogo>
                <MobileIcon onClick={toggle}>
                  <FaBars />
                </MobileIcon>
                <NavMenu>
                  <NavItem>
                    <NavLinks to='about'>About</NavLinks>
                  </NavItem>
                  <NavItem>
                    <NavLinks to='blog'>Blog</NavLinks>
                  </NavItem>
                  <NavItem>
                    <NavLinks to='faq'>FAQ</NavLinks>
                  </NavItem>
                  <NavItem>
                    <NavLinks to='contact'>Contact</NavLinks>
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
