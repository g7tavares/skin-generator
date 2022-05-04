import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
        --background: #121212;
        /* --background: #fff; */
        --shape: #272727;
        --text-title: #fff;
        --text-body: #cac5d9;
        --purple: #57007E;
        --test: red;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html{
        // font-size: 16px; //default (desktop)
        @media (max-width: 1000px) {
            font-size: 93.75%; //15px
        }
        @media (max-width: 720px) {
            font-size: 87.5%; //14px
        }
    }

    body{ 
        background-color: var(--background);
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button{
        font-family: 'Quicksand', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong{
        font-weight: 600;
    }

    button{
        cursor: pointer;
    }


    [disabled]{
        opacity: 0.6;
        cursor: not-allowed;
    }
`;
