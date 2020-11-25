import React from 'react'
import styled from 'styled-components'
import { Button } from './Button'

const Email = () => {
    return (
        <EmailContainer>
            <EmailContent>
                <h4>Zapisz się do naszego newslettera</h4>
                <p>Bądź na bierząco z naszą ofertą!</p>
                <form action="#">
                    <FormWrap>
                        <label htmlFor="email">
                            <input type="email" placeholder="Wpisz swój email" id="email"/>
                        </label>
                        <Button 
                        as="button" 
                        type="submit" 
                        primary="true" 
                        round="true"
                        css={`
                        height: 48px;

                        @media screen and(max-width: 768px) {
                            width: 100%;
                            min-width: 350px;
                        }

                        @media screen and(max-width: 400px) {
                            width: 100%;
                            min-width: 250px;
                        }
                        `}
                        >Wyslij</Button>
                    </FormWrap>
                </form>
            </EmailContent>
        </EmailContainer>
    )
}

export default Email

const EmailContainer = styled.div`
    background: linear-gradient(217deg, #8f87a6, rgba(355,0,0,0) 70.71%),
    linear-gradient(127deg, #bbf8e1, rgba(0,155,0,0) 70.71%),
    linear-gradient(336deg, rgba(0,0,155,.8), rgba(0,0.55,0) 70.71%);;
        background-size:cover;
        height: 450px;
        width: 100%;
        padding: 5rem calc ((100vw - 1300px) / 2);
        color: #FFF;
        display: flex;
        justify-content: center;
        align-items: center;
`
const EmailContent = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;

        h4 {
            text-align: center;
            margin-bottom: 1rem;
            font-size: clamp(3rem, 5vvw, 3rem);
            padding: 0 1rem;
        }

        p {
            text-align: center;
            font-size: clamp(1rem, 2.5vw, 1.5rem);
            padding: 0 1rem;
            margin-bottom: 2rem;

        form {
            z-index: 10;
        }
        }
`
const FormWrap = styled.div`
        input {
            padding: 1rem 1.5rem;
            outline: none;
            width: 350px;
            height: 48px;
            border-radius: 50px;
            margin-right: 1rem;

            @media screen and (max-width: 768px) {
                display: flex;
                flex-direction: column;
                padding: 0 1rem;


                input {
                    margin-bottom: 1rem;
                    width: 100%;
                    margin-right: 0;
                }
            }

        }
`

