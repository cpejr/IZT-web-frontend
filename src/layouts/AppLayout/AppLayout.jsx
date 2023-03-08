import { Outlet } from 'react-router-dom';
import { Header, Footer } from '../../components/features';
import { useRefreshToken } from '../../hooks/query/sessions';
import {
  UseCreateUser,
  UseDeleteUser,
  useGetUsers,
} from '../../hooks/query/users';

function App() {
  const { isFetching } = useRefreshToken();
  const { data: users } = useGetUsers();
  const { mutateAsync: registerUser } = UseCreateUser();
  const { mutateAsync: deleteUser } = UseDeleteUser();

  // eslint-disable-next-line no-underscore-dangle
  const userId = users?.[0]?._id;
  console.log(userId);

  const onClickCreate = async () => {
    try {
      await registerUser({
        name: 'João Pedro Lima Pirajá',
        email: 'jplp100@hotmail.com',
        password: 'pamonha',
        country: 'Brasil',
        telephone: '+5571999258225',
        state: 'Bahia',
        city: 'Salvador',
        address: 'Alameda dos Sombreiros',
        number: '113',
        complement: 'Ladeira',
        zipCode: '41820-420',
      });
    } catch (registerError) {
      console.error(registerError);
    }
  };
  const onClickDelete = async () => {
    try {
      await deleteUser(userId);
    } catch (deleterError) {
      console.error(deleterError);
    }
  };

  return isFetching ? (
    <h1>Carregando...</h1> // TODO: add a good looking loading state
  ) : (
    <>
      <button type="button" onClick={onClickCreate}>
        CRIAR
      </button>
      <button type="button" onClick={onClickDelete}>
        DELETAR
      </button>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
