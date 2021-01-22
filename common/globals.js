import "normalize.css";
import { createGlobalStyle } from "styled-components";
import { theme } from "constants/index";

const { fonts, colors, sizes } = theme;

const GlobalStyled = createGlobalStyle`
    :root {
        box-sizing: border-box;
        font-size: calc(2px + (4 - 2) * (100vw - 320px) / (1366 - 320));
    }

    *,
    *::before,
    *::after {
        box-sizing: inherit;
    }

    html,
    body {
        font-weight: 600;
        line-height: 1.25;

        font-size: ${sizes.font.body};
        background: ${colors.gray1};
        font-family: ${fonts.base}, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
        Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;        
    }

    body {
        overflow: hidden;
    }

    #__next {
        height: 100vh;
        padding-right: 5.5rem;
	    margin-right: -5.5rem;
	    overflow-y: auto;
    }

    header {
        display: flex;
        align-items: flex-start;
        margin: 0 0 14.5rem;
    }

    h1, h2, h3, h4, h5 {
        font-weight: 600;
        margin: 0;
    }

    h1 {
        flex: 0 1 120rem;
        max-width: 125rem;
        font-weight: bold;

        font-size: ${sizes.h1};
    }

    h2 {
        font-size: ${sizes.h2};
    }

    h3 {
        margin: 0 0 10rem;
        font-weight: 700;
        
        font-size: ${sizes.h3};
        color: ${colors.dark01}
    }

    h4 {
        margin: 0 0 4.5rem;

        font-size: ${sizes.h4};
    }

    h5 {
        margin: 0 0 5.5rem;

        font-size: ${sizes.h5};
        color: ${colors.gray01};
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    * {
        box-sizing: border-box;
    }

`;

export default GlobalStyled;
