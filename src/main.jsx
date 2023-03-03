import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyles from './styles/GlobalStyles';
import Theme from './styles/Theme';
import Routes from './routes';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyles />
    <Theme>
      <Routes />
    </Theme>
  </React.StrictMode>
);
