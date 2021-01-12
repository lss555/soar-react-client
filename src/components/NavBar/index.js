import React from 'react'
import { FaBars } from 'react-icons/fa'
import { Nav, NavBarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from './NavBar'

const NavBar = ({ toggle }) => {
    return (
        <React.Fragment>
          <Nav>
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
        </React.Fragment>
    )
}

export default NavBar
