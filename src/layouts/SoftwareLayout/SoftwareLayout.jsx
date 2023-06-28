import { Outlet } from 'react-router-dom';

import { Container, Menu } from './Styles';

export default function SoftwareLayout() {
  return (
    <Container>
      <Menu />
      <Outlet />
    </Container>
  );
}
