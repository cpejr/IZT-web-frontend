import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Header, Footer } from '../../components/features';
import { useRefreshToken } from '../../hooks/query/sessions';

function App() {
  const { isInitialLoading } = useRefreshToken();

  return isInitialLoading ? (
    <h1>Carregando...</h1> // TODO: add a good looking loading state
  ) : (
    <>
      <Header />
      <Toaster
        containerStyle={{
          top: 115,
        }}
      />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
