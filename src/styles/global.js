import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyles = createGlobalStyle`
  ${normalize};

  :root {
    --main-font: 'Rubik', sans-serif;
    --first-color: hsl(0, 0%, 17%);
    --second-color: hsl(0, 0%, 59%);
  }

  html {
    box-sizing: border-box;
  }

  *, *::after, *::before {
    box-sizing: inherit;
  }

  body {
    font-family: var(--main-font);
    margin: 0;
    padding: 0;
  }

  h1, p {
    margin: 0;
    padding: 0;
  }

  ul, li {
    list-style: none;
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyles;
