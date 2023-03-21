import { Navigate, Outlet } from 'react-router-dom';
import useAuthStore from '../../stores/auth';

export default function AuthLayout() {
  const auth = useAuthStore((state) => state?.auth);

  return !auth ? <Navigate to="unauthorized" /> : <Outlet />;
}
