import { Outlet } from 'react-router-dom';
import { Header, Footer } from '../components/features';

export default function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
