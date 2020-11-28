import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
* {
    font-family: 'Roboto', 'sans-serif';
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    .react-scrollbar-default {
        background: #f1f1f1;
    }

    /* width */
::-webkit-scrollbar {
  width: 13px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #fff;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #FF0F00;
}
`