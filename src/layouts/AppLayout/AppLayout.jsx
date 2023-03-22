import { Outlet } from 'react-router-dom';
import { Header, Footer, HomeLoading } from '../../components/features';
import { useRefreshToken } from '../../hooks/query/sessions';

export default function AppLayout() {
  const { isInitialLoading } = useRefreshToken();
  // return <HomeLoading />;
  return isInitialLoading ? (
    <HomeLoading /> // TODO: add a good looking loading state
  ) : (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
