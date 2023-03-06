import { Outlet } from 'react-router-dom';
import { AdminMenu } from '../../components/features';

const AdminLayout = () => {
  <Container>
    <AdminMenu />
    <Outlet />
  </Container>;
};
