import styled from 'styled-components';

import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

${'' /* #051937 */}

*{
  box-sizing:inherit;
  margin:0 ;
  padding:0 ;
}

html{
  box-sizing: border-box;
  font-size: 62.5%;
}


body{
 background-color:#051937 ;
  font-family: 'Smooch Sans', sans-serif;
  color:#fff ;
  line-height: 1.5;
  font-size: 1.8rem;
}


.container{
  max-width: 144rem;
  margin: 0 auto;
  padding: 0 3rem;
}

ul{
  list-style: none;
}

a{
  text-decoration: none;
  color: #fff;
}





`;

export default GlobalStyles;
