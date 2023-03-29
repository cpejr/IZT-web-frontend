import { Outlet } from 'react-router-dom';

import { AdminMenu } from '../../components/features';
import { Container } from './Styles';

export default function AdminStoreLayout() {
  return (
    <Container>
      <AdminMenu />
      <Outlet />
    </Container>
  );
}
