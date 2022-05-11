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
    background-color: white;
    overflow: overlay;
  }
  /* * { 
  outline: 1px solid red;
  outline-offset: -1px;
} */
`;

export default GlobalStyles;
