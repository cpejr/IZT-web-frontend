import { Outlet } from 'react-router-dom';

import { SoftwareMenu } from '../../components/features';
import { Container } from './Styles';

export default function AdminLayout() {
  return (
    <Container>
      <SoftwareMenu />
      <Outlet />
    </Container>
  );
}
