import { Navigate, Outlet } from 'react-router-dom';
import useAuthStore from '../../stores/auth';

export default function RoleLayout() {
  const user = useAuthStore((state) => state?.auth?.user);

  return !user.isAdmin ? <Navigate to="forbidden" /> : <Outlet />;
}
