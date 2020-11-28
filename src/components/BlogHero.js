import React from 'react'
import styled from 'styled-components'
import { Button } from "./Button"

const BlogHero = () => {
    return (
       <HeroContainer>
           <HeroBg>
               
           </HeroBg>
           <HeroContent>
               <HeroItems>
                   <HeroH1>Blog</HeroH1>
                   <HeroP>Jeżeli potrzebny ci specialista SEO, to dobrze trafiłeś</HeroP>
                   <Button primary="true" big="true" round="true" to="/services">Usługi</Button>
               </HeroItems>
           </HeroContent>
       </HeroContainer>
    )
}

export default BlogHero

const HeroContainer = styled.div`
    content: '';
    display: flex;
    background: linear-gradient(30deg,#0FCC00, #DDD000);
    border-radius: 0 0 90% 90%/0 0 100% 100%;
    transform:scaleX(1,5);
    justify-content: center;
    align-items: center;
    height: 50vh;
    padding: 0 1rem;
    position: relative;
    margin-top: -80px;
    color: #FFF;

`

const HeroBg = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`

const HeroContent = styled.div`
    z-index: 3;
    height: calc(100vh - 80px);
    max-height: 100%;;
    padding: 0rem calc((100vw - 1300px) / 2);
`

const HeroItems = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-aligin: center;
    height: 100vh;
    max-height: 100%;
    padding: 0;
    color: #fff;
    line-height: 1.1;
    font-weight: bold;;
`

const HeroH1 = styled.h1`
    font-size: clamp(1.5rem, 6vvw, 4rem);
    margin-bottom: 1.5rem;
    letter-spacing: 3px;
    padding: 0 1rem;
`

const HeroP = styled.p`
    font-size: clamp(1rem, 3vvw, 3rem);
    margin-bottom: 2rem;
`
