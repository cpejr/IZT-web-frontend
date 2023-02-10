import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
:root {
  --primary: #d6ceaa;
  --success: #79b5ac;
  --reject: #c75233;
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

html {
  scroll-behavior: smooth;
  @media (prefers-reduced-motion: reduce) {
	  scroll-behavior:auto;
  }
}
`;
