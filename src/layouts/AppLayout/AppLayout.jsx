import { Outlet } from 'react-router-dom';
import { Header, Footer } from '../../components/features';
import {
  useLogin,
  useLogout,
  useRefreshToken,
} from '../../hooks/query/sessions';
import { useGetUsers } from '../../hooks/query/users';

function App() {
  const { isInitialLoading } = useRefreshToken();
  const { data: users } = useGetUsers({});
  const { mutateAsync: login } = useLogin();
  const { mutateAsync: logout } = useLogout();

  const onClickLogin = async () => {
    try {
      await login({ email: 'jplp100@hotmail.com', password: 'pamonha' });
    } catch (error) {
      console.error(error);
    }
  };
  console.log(users);

  const onClickLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error(error);
    }
  };
  return isInitialLoading ? (
    <h1>Carregando...</h1> // TODO: add a good looking loading state
  ) : (
    <>
      <button type="button" onClick={onClickLogin}>
        Login
      </button>
      <button type="button" onClick={onClickLogout}>
        Logout
      </button>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
