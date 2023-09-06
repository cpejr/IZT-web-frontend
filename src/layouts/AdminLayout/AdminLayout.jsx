import { Outlet } from 'react-router-dom';

// import { AdminMenu } from '../../components/features';
import { NotFound } from '../../pages';
import useAuthStore from '../../stores/auth';
import { Container } from './Styles';

export default function AdminLayout() {
  const user = useAuthStore((state) => state.auth?.user);

  return !user?.isAdmin ? (
    <NotFound />
  ) : (
    <Container>
      {/* <AdminMenu /> */}
      <Outlet />
    </Container>
  );
}
