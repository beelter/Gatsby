import React from 'react'
import style from 'styled-components'
import {Link} from 'gatsby'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterLinksWrapper>
                <FooterDesc>
                    <h1>SEO</h1>
                    <p>Narazie jestem freelancerem, a nie agencja SEO, ale pamietajmy ze nie zawsze rozmiar ma znaczenie. Bo nawet wielki czarny SUV od BMW moze zle skonczyc przy spotkaniu z perła polskiej motoryzacji jaką jest "Syrena".</p>
                </FooterDesc>
                <FooterLinkItems>
                    <FooterLinkTitle to="/services">Usługi</FooterLinkTitle>
                    <FooterLink to="#">Content Marketing</FooterLink>
                    <FooterLink to="#">Performance Optimization</FooterLink>
                    <FooterLink to="#">Link Audit</FooterLink>
                    <FooterLink to="#">Link Building</FooterLink>
                    <FooterLink to="#">Structure Optimization</FooterLink>
                </FooterLinkItems>
                <FooterLinkItems>
                    <FooterLinkTitle>Social Media</FooterLinkTitle>
                    <FooterLink to="#">Facebook</FooterLink>
                    <FooterLink to="#">Instagram</FooterLink>
                    <FooterLink to="#">Likedin</FooterLink>
                    <FooterLink to="#">Twitter</FooterLink>
                </FooterLinkItems>
                <FooterLinkItems>
                    <FooterLinkTitle to="/contact">Kontakt</FooterLinkTitle>
                    <FooterLinkTitle to="/about">O nas</FooterLinkTitle>
                    <FooterLinkTitle to="/blog">Blog</FooterLinkTitle>
                </FooterLinkItems>
            </FooterLinksWrapper>
        </FooterContainer>
    )
}

export default Footer

const FooterContainer = style.div`
    padding: 2rem calc((100vw - 1100px) /2);
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    color: #000;
    background: #f4f5f7;
`
const FooterDesc = style.div`
    padding: 0 1rem;

    h1 {
        margin-bottom: 1rem;
        color: #FF0F00;
    }

    p {
        margin-bottom: 3rem;
        color: #3d3d4e;
    }


    @media screen and (max-width: 400px) {
        padding: 1rem;
    }
`
const FooterLinksWrapper = style.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);

    @media screen and (max-width: 820px) {
        grid-template-columns: 1fr;
    }
`
const FooterLinkItems = style.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem 2rem;

    @media screen and (max-width: 400px) {
        padding: 1rem;
    }
`
const FooterLinkTitle = style(Link)`
    text-decoration: none;
    font-size: 2rem;
    margin-bottom: 16px;
    font-weight: bold;
    color: #3d3d4e;

    &:hover {
        color: #FF0F00;
        transition: 0.2s ease-out;
    }
`
const FooterLink = style(Link)`
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-weight: bold;
    font-size: 1rem;
    color: #3d3d4e;

    &:hover {
        color: #FF0F00;
        transition: 0.2s ease-out;
    }
`
