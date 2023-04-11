import { Outlet } from 'react-router-dom';

import { AddToast } from '../../components/common';
import { Header, Footer } from '../../components/features';
import { useRefreshToken } from '../../hooks/query/sessions';

export default function AppLayout() {
  const { isInitialLoading } = useRefreshToken();

  return isInitialLoading ? (
    <h1 style={{ height: '100vh' }}>Carregando...</h1> // TODO: add a good looking loading state
  ) : (
    <>
      <Header />
      <Outlet />
      <AddToast />
      <Footer />
    </>
  );
}
