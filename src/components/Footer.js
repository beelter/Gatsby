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
                    <FooterLinkTitle>Kontakt</FooterLinkTitle>
                    <FooterLink to="/contact">Kontakt</FooterLink>
                    <FooterLink to="/services">Usługi</FooterLink>
                    <FooterLink to="#">Performance Optimization</FooterLink>
                    <FooterLink to="#">Link Audit</FooterLink>
                    <FooterLink to="#">Link Building</FooterLink>
                    <FooterLink to="#">Structure Optimization</FooterLink>
                </FooterLinkItems>
                <FooterLinkItems>
                    <FooterLinkTitle>Usługi</FooterLinkTitle>
                    <FooterLink to="/contact">Kontakt</FooterLink>
                    <FooterLink to="/services">Usługi</FooterLink>
                    <FooterLink to="#">Performance Optimization</FooterLink>
                    <FooterLink to="#">Link Audit</FooterLink>
                    <FooterLink to="#">Link Building</FooterLink>
                    <FooterLink to="#">Structure Optimization</FooterLink>
                </FooterLinkItems>
                <FooterLinkItems>
                    <FooterLinkTitle>Social Media</FooterLinkTitle>
                    <FooterLink to="/contact">Kontakt</FooterLink>
                    <FooterLink to="/services">Usługi</FooterLink>
                    <FooterLink to="#">Performance Optimization</FooterLink>
                    <FooterLink to="#">Link Audit</FooterLink>
                    <FooterLink to="#">Link Building</FooterLink>
                    <FooterLink to="#">Structure Optimization</FooterLink>
                </FooterLinkItems>
            </FooterLinksWrapper>
        </FooterContainer>
    )
}

export default Footer

const FooterContainer = style.div`
    padding: 5rem calc((100vw - 1100px) /2);
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    color: #000;
    background: #fafafb;
`
const FooterDesc = style.div`
    padding: 0 2rem;

    h1 {
        margin-bottom: 3rem;
        color: #f26a2e;
    }

    @media screen and (max-width: 400px) {
        padding: 1rem;
    }
`
const FooterLinksWrapper = style.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);

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
const FooterLinkTitle = style.h2`
    font-size: 2rem;
    margin-bottom: 16px;
`
const FooterLink = style(Link)`
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-weight: bold;
    font-size: 1rem;
    color: #3d3d4e;

    &:hover {
        color: #f26a2e;
        transition: 0.3s ease-out;
    }
`
