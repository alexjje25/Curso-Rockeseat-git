import { createGlobalStyle} from 'styled-components';

import fundo from '../assets/fundo.svg';

export default createGlobalStyle `
  * {
      margin: 0;
      padding: 0;
      outline: 0;
      box-sizing: border-box;

    }

    body{
        background: #f0f0f5 url(${fundo}) no-repeat 70% top;
        -webkit-font-smoothing: antialised;
    }
    body, input, button {
        font: 10px Roboto, sans-serif;
    }

    #root {
        max-width: 850px;
        margin: 0 auto;
        padding: 60px 60px;

    }
    button{
        cursor:pointer;
    }
`;
