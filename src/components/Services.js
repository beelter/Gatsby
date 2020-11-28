import React from 'react'
import styled from 'styled-components'
import {useStaticQuery, graphql} from 'gatsby'
import { Button } from './Button'




const Services = () => {
const data = useStaticQuery(graphql`
query ServicesQuery {
    allServicesJson {
        edges {
            node {
                alt
                button
                name
                description
            }
          }
        }
      }
`)

function getServices(data) {
    const servicesArray = []
    data.allServicesJson.edges.forEach((item, index) => {
        servicesArray.push(
            <ProductCard key={index}>
                <ProductImg />
                <ProductInfo>
                    <TextWrap>
                        <ProductTitle>{item.node.name}</ProductTitle>
                    </TextWrap>
                    <ProductDescription>{item.node.description}</ProductDescription>
                    <Button to="/trips" primary="true" round="true" css={`
                    position: absolute;
                    top: 5rem;
                    font-size: 14px;
                    `}>{item.node.button}</Button>
                </ProductInfo>
            </ProductCard >
        ) 
    })
    return servicesArray
}

    return (
        <ProductsContainer>
            <ProductsHeading>Usługi</ProductsHeading>
                <ProductWrapper>{getServices(data)}</ProductWrapper>
        </ProductsContainer>
    )
}

export default Services

const ProductsContainer = styled.div`
    min-height: 50vh;
    padding: 5rem calc((50vh - 1300px) /2);
    background: #FFF;
    color: #fff;    
`
const ProductsHeading = styled.div`
    font-size: clamp(1.2rem, 5vw, 3rem);
    text-align: center;
    margin-bottom: 5rem;
    color: #FF0F00;
`
const ProductWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 10px;
    justify-items: center;
    padding: 0 2rem;

    @media screen and (max-width: 1200px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 868px) {
        grid-template-columns: 1fr;
    }
`

const ProductCard = styled.div`
    line-height: 1.6;
    width: 100%;
    height: 150px;
    position: relative;
    border-radius:: 10px;
    transition: 0.2s ease;
`

const ProductImg = styled.div`
    background: linear-gradient(30deg,#ff0081,#6827);
    height: 100%;
    max-width: 100%;
    position: relative;
    border-radius: 10px;
    filter: brightness(90%);
    transition: 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);

    &:hover {
        filter: brightness(30%);
    }
`

const ProductInfo = styled.div`
    display: flex;
    justify-content: center;
    padding: 0 2rem;

    @media screen and (max-width: 280px) {
        padding: 0 1rem;
    }
`

const TextWrap = styled.div`
    display: flex;
    align-items: center;
    position: absolute;
    top: 1rem;
`
const ProductTitle = styled.div`
    font-weight: 400;
    font-size: 2rem;
`

const ProductDescription = styled.div`
    font-weight: 400;
    font-size: 1rem;
    position: absolute;
    top: 5rem;
    width: 80%;      
`
