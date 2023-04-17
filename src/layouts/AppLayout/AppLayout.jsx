import { useEffect, useState } from 'react';

import { Outlet } from 'react-router-dom';

import 'react-toastify/dist/ReactToastify.css';
import { AddToast } from '../../components/common';
import { Header, Footer, SystemLoading } from '../../components/features';
import { useRefreshToken } from '../../hooks/query/sessions';

export default function AppLayout() {
  const { isInitialLoading } = useRefreshToken();
  const [isLoadingScreen, setIsLoadingScreen] = useState(true);
  const timeToShowLoading = 2000; // milliseconds

  useEffect(() => {
    const loadingTimer = setTimeout(
      () => setIsLoadingScreen(false),
      timeToShowLoading
    );

    return () => clearTimeout(loadingTimer);
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
