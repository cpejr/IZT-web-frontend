import { Outlet } from 'react-router-dom';
import { AdminMenu } from '../../components/features';
import { Container } from './Styles';

function AdminLayout = () => {
  <Container>
    <AdminMenu />
    <Outlet />
  </Container>;
};
