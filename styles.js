import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    list-style: none;
    margin: 0;
    padding: 0;
    text-decoration: none;
  }

  body {
    margin: 0;
    font-family: system-ui;
  }
`;
