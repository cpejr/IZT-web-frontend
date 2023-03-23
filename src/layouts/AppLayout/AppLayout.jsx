import { Outlet } from 'react-router-dom';
import { Footer } from '../../components/features';
import Header from '../../components/features/Header/Header';
import useAuthStore from '../../stores/auth';

export default function AppLayout() {
  const { isInitialLoading } = useAuthStore();

  return isInitialLoading ? (
    <h1 style={{ height: '100vh' }}>Carregando...</h1> // TODO: add a good looking loading state
  ) : (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
