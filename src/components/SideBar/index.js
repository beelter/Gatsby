import React from "react"
import { menuData } from '../../data/MenuData'
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarMenu,
    SidebarLink,
    SidebarRoute,
    SideBtnWrap
  } from './SidebarElements'


const Sidebar = ({isOpen, toggle}) => {

    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
                <Icon>
                <CloseIcon />
                </Icon>
                    <SidebarMenu>
                    {menuData.map((item, index) => (
                    <SidebarLink to={item.link} key={index}>
                    {item.title}
                    </SidebarLink>
                      ))}
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to="/contact">Kontakt</SidebarRoute>
            </SideBtnWrap>
        </SidebarContainer>
    );
};

export default Sidebar



