import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  // Variables
  :root {
    // Color pallete
    --color-grey-700: #312e38;
    --color-white: #ffffff;
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
    fill: currentColor;
  }

  textarea {
    resize: none;
  }
`;
