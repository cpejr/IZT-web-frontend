import { Outlet } from 'react-router-dom';
import { Footer } from '../../components/features';
import HeaderLogout from '../../components/features/Header/HeaderLogout/HeaderLogout';
import HeaderLogin from '../../components/features/Header/HeaderLogin/HeaderLogin';
import useAuthStore from '../../stores/auth';

export default function AppLayout() {
  const { isAuthenticated, isInitialLoading } = useAuthStore();

  return isInitialLoading ? (
    <h1 style={{ height: '100vh' }}>Carregando...</h1> // TODO: add a good looking loading state
  ) : (
    <>
      {isAuthenticated ? <HeaderLogout /> : <HeaderLogin />}
      <Outlet />
      <Footer />
    </>
  );
}
