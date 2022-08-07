import { createGlobalStyle } from "styled-components";
import theme from './theme'

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Rubik', sans-serif;
    }

    body {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    #root {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .all {
        height: auto;
        min-height: 100vh;
        padding-bottom: 80px;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: ${theme.colors.veryLightGray};

        @media(max-width: 600px) {
            width: 375px;
        }
    }
`;

export default GlobalStyle;