import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  ::selection {
    color: #fff;
    background: #8C6FF0;
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Work Sans', sans-serif;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    color: #3D464D;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }

  .rounded {
      text-align: center;
      border-radius: 8px;
    }

  .rounded.success {
    background-color: #3DB69A;
  }
  
  .rounded.error {
    background-color: #EB424D;
  }
`;
