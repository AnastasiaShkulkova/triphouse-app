import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
   box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
   
    font-family: 'Roboto', sans-serif;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }
`;

export default GlobalStyle;

export const AppContainer = styled.div`
width: 80%;
margin: 0 auto;
`