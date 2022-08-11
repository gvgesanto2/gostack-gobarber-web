import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  // Variables
  :root {
    // Color pallete
    --color-primary-300: #ff9000;

    --color-grey-100: #f4ede8;
    --color-grey-550: #666360;
    --color-grey-700: #312e38;
    --color-grey-800: #232129;
    --color-white: #ffffff;

    --color-red-300: #c53030;

    // Other color variables
    --color-primary: var(--color-primary-300);
    --color-error: var(--color-red-300);
  }

  // Resetting
  *,
  *::before,
  *::after {
    padding: 0;
    margin: 0;
    box-sizing: inherit;
  }

  // Base Styles
  html {
    font-size: 62.5%;
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto Slab', serif;
    font-size: 1.6rem;
    font-weight: 400;
    color: var(--color-white);
    background: var(--color-grey-700);
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
    -webkit-font-smoothing: antialiased;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul {
    list-style: none;
  }

  input,
  textarea,
  button {
    font-family: inherit;
    font-weight: inherit;
  }

  button {
    cursor: pointer;
  }

  svg {
    color: inherit;
  }

  textarea {
    resize: none;
  }
`;
