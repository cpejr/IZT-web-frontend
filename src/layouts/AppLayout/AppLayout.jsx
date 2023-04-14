import { useEffect, useState } from 'react';

import { Outlet } from 'react-router-dom';

import 'react-toastify/dist/ReactToastify.css';
import { AddToast } from '../../components/common';
import { Header, Footer, SystemLoading } from '../../components/features';
import { useRefreshToken } from '../../hooks/query/sessions';

export default function AppLayout() {
  const [isLoadingScreen, setIsLoadingScreen] = useState(true);
  const { isInitialLoading } = useRefreshToken();

  useEffect(() => {
    setTimeout(() => setIsLoadingScreen(false), 2000);
  }, []);

  return isInitialLoading || isLoadingScreen ? (
    <SystemLoading />
  ) : (
    <>
      <Header />
      <Outlet />
      <AddToast />
      <Footer />
    </>
  );
}
