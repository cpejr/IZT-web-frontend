import React from 'react';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { disableReactDevTools } from '@fvilers/disable-react-devtools';
import ReactDOM from 'react-dom/client';
import GlobalStyles from './styles/GlobalStyles';
import Theme from './styles/Theme';
import Routes from './routes';

if (process.env.NODE_ENV === 'production') {
  disableReactDevTools();
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyles />
    <QueryClientProvider client={queryClient}>
      <Theme>
        <Routes />
      </Theme>
      <ReactQueryDevtools />
    </QueryClientProvider>
  </React.StrictMode>
);
