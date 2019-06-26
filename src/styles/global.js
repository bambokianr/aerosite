import { createGlobalStyle } from 'styled-components';
import 'font-awesome/css/font-awesome.css';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  };

  html, body, #root {
    height: 100%;
    /* width: 100%; */
  }

  body {
    background: #999;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    font-family: 'Roboto', sans-serif;
  }
`;

export default GlobalStyle;

// amarelo1: rgb(255, 242, 0)
// laranja1: rgb(246, 195, 9)
// laranja2: rgb(248, 160, 14)
// laranja3: rgb(245, 95, 25)
// azul: rgb(46, 49, 146)