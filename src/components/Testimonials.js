import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import {IoMdCheckmarkCircleOutline} from 'react-icons/io'
import {FaRegLightbulb} from 'react-icons/fa'
import { useStaticQuery } from 'gatsby'

const Testimonials = () => {
    const data = useStaticQuery(graphql`
    query {
        allFile(
            filter: {
                ext: { regex: "/(jpg)|(png)|(jpeg)/"} 
                name: { in: ["testimonial-1", "testimonial-2"] }
            }
            ) {
          edges {
            node {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
      
      
    `)
    return (
        <TestimonialsContainer>
            <TopLine>
                Referencje
            </TopLine>
            <Description>
                Jakie są opinie moich klientów?
            </Description>
            <ContentWrapper>
                <ColumnOne>
                <Testimonial>
                    <IoMdCheckmarkCircleOutline css={`
                    color: #3fffa8;
                    font-size: 2rem;
                    margin-bottom: 1rem;
                    `}/>
                    <h3>Jezus</h3>
                    <p>Dobry chłopak, zawsze dzień dobry mówił.</p>
                </Testimonial>
                <Testimonial>
                    <FaRegLightbulb css={`
                    color: #f9b19b;
                    font-size: 2rem;
                    margin-bottom: 1rem;
                    `}/>
                    <h3>Jarosław Kaczyński</h3>
                    <p>Fajnego miał kocura, nie pwoiem że nie..</p>
                </Testimonial>
                </ColumnOne>
                <ColumnTwo>
                {data.allFile.edges.map((image, key) => (
                    <Images key={key} fluid={image.node.childImageSharp.fluid} />
                    ))}
                <Images />
                </ColumnTwo>
            </ContentWrapper>
        </TestimonialsContainer>
    )
}

export default Testimonials

const TestimonialsContainer = styled.div`
    width: 100%;
    background: linear-gradient(30deg,#ffa6d5, #6827);
    color: #FFF;
    padding: 5rem calc((100vw - 1300px) / 2);
    height: 100%;
`

const TopLine = styled.div`
    color: #FF0F00;
    font-size: 2rem;
    padding-left: 2rem;
    margin-bottom: 0.75rem;
`
const Description = styled.div`
    text-align: start;
    padding-left: 2rem;
    margin-bottom: 4rem;
    font-size: clamp(1.5rem, 5vw, 2rem);
    font-weight: bold;
`
const ContentWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`
const ColumnOne = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
`
const Testimonial = styled.div`
    padding-top: 1rem;
    padding-right: 2rem;
    
    h3 {
        margin-bottom: 1rem;
        font-size: 2rem;
        font-style: italic;
    }

    p {
        color: #fff;
        font-size: 1.1rem;
    }
`

const ColumnTwo = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 2rem;
    grid-gap: 10px;

    @media screen and (max-width: 500px) {
        grid-template-rows: 1fr;
    }
`

const Images = styled(Img)`
    border-radius: 10px;
    height: 100%;
`