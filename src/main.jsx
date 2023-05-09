import React from 'react';

import { disableReactDevTools } from '@fvilers/disable-react-devtools';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import ReactDOM from 'react-dom/client';

import Routes from './routes';
import GlobalStyles from './styles/GlobalStyles';
import Theme from './styles/Theme';

if (import.meta.env.VITE_NODE_ENV === 'production') {
  disableReactDevTools();
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      staleTime: import.meta.env.VITE_STALE_TIME || 300000,
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyles />
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <QueryClientProvider client={queryClient}>
        <Theme>
          <Routes />
        </Theme>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </LocalizationProvider>
  </React.StrictMode>
);
