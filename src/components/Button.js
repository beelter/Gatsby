import styled from 'styled-components'
import { Link } from 'gatsby'

export const Button = styled(Link)`
    background: linear-gradient(30deg,#000, #FFF);
    background: ${({primary}) => (primary ? 'linear-gradient(30deg,#FF0F00, #FF0000)' : '#00008b')};;
    white-space: nowrap;
    padding ${({ big }) => (big ? "16px 40px" : "10px 32px")};
    color: #fff;
    font-size: ${({ big }) => (big ? "20px" : "16px")};
    outline: none;
    border: none;
    min-width: 100px;
    cursor: pointer;
    text-decoration: none;
    transition: 0.3s !important;
    border-radius: ${({ round }) => (round ? "50px" : "none")};

    &:hover {
        background: ${({ primary }) => ( primary ? "#E23636" : "#00008b")};
        transform: translateY(-2px);
    }
`