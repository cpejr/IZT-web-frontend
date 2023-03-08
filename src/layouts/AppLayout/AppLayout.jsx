import { Outlet } from 'react-router-dom';
import { Header, Footer } from '../../components/features';
import { useRefreshToken } from '../../hooks/query/sessions';

function App() {
  const { isFetching } = useRefreshToken();

  return isFetching ? (
    <h1>Carregando...</h1> // TODO: add a good looking loading state
  ) : (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
