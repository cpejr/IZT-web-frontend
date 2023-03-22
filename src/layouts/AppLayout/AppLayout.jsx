import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Header, Footer, HomeLoading } from '../../components/features';
import { useRefreshToken } from '../../hooks/query/sessions';

export default function AppLayout() {
  const { isInitialLoading } = useRefreshToken();

  const [isLoadingScreen, setIsLoadingScreen] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoadingScreen(false), 2000);
  }, []);

  return isLoadingScreen || isInitialLoading ? (
    <HomeLoading /> // TODO: add a good looking loading state
  ) : (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
