import { Link } from 'gatsby'
import React, {useState} from "react"
import styled from 'styled-components'
import { menuData } from '../data/MenuData'
import { Button } from "./Button"
import Sidebar from "./SideBar/index"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
      <Nav >
        <NavLink to="/">SEO</NavLink>
        <Sidebar isOpen={isOpen} onClick={toggle}/>
        <NavMenu>
              {menuData.map((item, index) => (
              <NavLink to={item.link} key={index}>  
                {item.title}
              </NavLink>
             ))}
        </NavMenu>
        <NavBtn>
            <Button primary="true" round="true" to="/contact">Kontakt</Button>
        </NavBtn>
      </Nav>
    )
}


export default Header



const Nav = styled.nav`
@media screen and (min-width: 550px) {
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc(100vw - 1300px) /2);
  z-index:100;
  position: relative;
}
`
const NavLink = styled(Link)`
@media screen and (min-width: 550px) {
color: #fff;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1 rem;
height: 100%;
margin-left: 20px;
cursor: pointer;
}
@media screen and (max-width: 550px) {
  display: none;
  visibility: hidden;
}
`

const NavMenu = styled.div`
@media screen and (min-width: 550px) {
  display: flex;;
  align-items: center;
  margin-right: 48px;
}
@media screen and (max-width: 550px) {
}
`
const NavBtn = styled.div`
@media screen and (min-width: 550px) {
  display: flex;
  align-items: center;
  margin-right: 24px;
}
@media screen and (max-width: 550px) {
  display: none;
}
`
