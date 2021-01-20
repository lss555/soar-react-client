import React from 'react'
import { SideBarContainer, Icon, CloseIcon, SideBarWrapper, SideBarMenu, SideBarLink } from './SideBar'

const SideBar = ({ toggle, isOpen }) => {
    return (
        <SideBarContainer isOpen={isOpen} onClick={toggle}>
          <Icon onClick={toggle}>
            <CloseIcon />
          </Icon>
            <SideBarWrapper>
              <SideBarMenu>
                <SideBarLink to='about' onClick={toggle}>
                  About
                </SideBarLink>
                <SideBarLink to='blog' onClick={toggle}>
                  Blog
                </SideBarLink>
                <SideBarLink to='faq' onClick={toggle}>
                  FAQ
                </SideBarLink>
                <SideBarLink to='contact' onClick={toggle}>
                  Contact
                </SideBarLink>
              </SideBarMenu>
            </SideBarWrapper>
        </SideBarContainer>
    )
}

export default SideBar
