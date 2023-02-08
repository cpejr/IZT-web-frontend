import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
:root {
 // Variáveis CSS aqui
}

* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14px;
  background: var(--primary);
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
}

html,
body,
#root {
  height: 100%;
}
`;
