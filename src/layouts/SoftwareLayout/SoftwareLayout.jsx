import { Navigate, Outlet } from 'react-router-dom';

import useAuthStore from '../../stores/auth';
import { Container, Menu } from './Styles';

export default function SoftwareLayout() {
  const user = useAuthStore((state) => state.auth?.user);
  if (!user.hasAccessToSoftware)
    return <Navigate to="/acesso-negado-software" />;
  return (
    <Container>
      <Menu />
      <Outlet />
    </Container>
  );
}
