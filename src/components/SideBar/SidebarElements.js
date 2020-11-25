import styled from 'styled-components'
import { Link } from 'gatsby'
import { FaBars } from 'react-icons/fa'


export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: linear-gradient(30deg,#000000,#B00000);
    display: grid;
    align-items: center;
    top: 0;
    transition: 0.3s ease-in-out;
    right: ${({ isOpen }) => (isOpen ? '0' : '0')};  
}
@media screen and (min-width: 550px) {
    display: none;
    visibility: hidden;
  }

`

export const CloseIcon = styled(FaBars)`
    color: #FFF ;
`

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    border: transparent;
    font-size: 2rem;
    cursor: pointer;
    outLine: none;
`

export const SidebarMenu = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows:: repeat(3, 60px);
    text-align: center;

`

export const SidebarLink = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    text-decoration: none;
    color: #FFF;
    cursor: pointer;

    &hover {
        color: #e31837;
        transition: 0.2s ease-in-out;
    }

`

export const SideBtnWrap = styled.div`
    display: flex;
    justify-content: center;
`

export const SidebarRoute = styled.div`
    background: linear-gradient(30deg,#000000,#B00000);
    white-space: nowrap;
    padding: 16px 64px;
    color: #fff;
`