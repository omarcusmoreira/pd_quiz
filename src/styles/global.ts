import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --background: #e5e5e5;
        --header-background:#8A80B5;
        --text-color: #363F5F;
        --highlight-button: #FFF4DA;
        --highlight-button-text: #FCA82F;
        --blue-button: #8B80B6;
        --green-text: #33CC95;
        --red-text: #ff0000;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html{
        @media (max-width: 1080px) {
            font-size: 93.75%;
        }

        @media (max-width: 720px) {
            font-size: 87.5%;
        }
    }

    body{
        background-color: var(--background);
        -webkit-font-smoothing: antialiased;
        color: var(---text-color);
        
    }

    body, input, button{
        font-family: 'Poppins', sans-serif;
    }

    h1, h2, h3, h4, h5, h6{
        font-weight: 500;
    }

    button{
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed
    }

`;
