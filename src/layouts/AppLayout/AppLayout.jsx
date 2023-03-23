import { Outlet } from 'react-router-dom';
import { Footer } from '../../components/features';
import HeaderLogout from '../../components/features/Header/HeaderLogout/HeaderLogout';
import HeaderLogin from '../../components/features/Header/HeaderLogin/HeaderLogin';
import useAuthStore from '../../stores/auth';

export default function AppLayout() {
  const { isInitialLoading } = useAuthStore();
  const { auth } = useAuthStore();

  return isInitialLoading ? (
    <h1 style={{ height: '100vh' }}>Carregando...</h1> // TODO: add a good looking loading state
  ) : (
    <>
      {auth ? <HeaderLogin /> : <HeaderLogout />}
      <Outlet />
      <Footer />
    </>
  );
}
