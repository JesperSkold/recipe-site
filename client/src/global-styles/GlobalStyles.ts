import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
 *{
  font-family: 'Roboto Condensed', sans-serif;
 }

 p, button{
  font-family: 'ABeeZee', sans-serif; 
 }

  body{
    margin: 0;
    padding: 0;
    background-color: #e3f2e1;
    overflow: overlay;
  }
`;

export default GlobalStyles;
