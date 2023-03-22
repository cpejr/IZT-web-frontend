import Lottie from 'react-lottie';
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Navigate,
  Outlet,
} from 'react-router-dom';
import useAuthStore from './stores/auth';
import { AppLayout } from './layouts';
import {
  Home,
  Login,
  Catalog,
  Product,
  SignUp,
  Profile,
  NotFound,
  Unauthorized,
  Forbidden,
} from './pages';

function AdminRoutes() {
  const user = useAuthStore((state) => state?.auth?.user);

  return !user.isAdmin ? <Navigate to="forbidden" /> : <Outlet />;
}

function PrivateRoutes() {
  const auth = useAuthStore((state) => state?.auth);

  return !auth ? <Navigate to="unauthorized" /> : <Outlet />;
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="cadastro" element={<SignUp />} />
        <Route path="catalogo" element={<Catalog />} />
        <Route path="produto/:_id" element={<Product />} />
        <Route element={<PrivateRoutes />}>
          <Route path="perfil" element={<Profile />} />
          <Route element={<AdminRoutes />}>
            <Route path="teste" element={<h1>Aqui só admin entra</h1>} />
          </Route>
        </Route>
        <Route path="/unauthorized" element={<Unauthorized />} />
        <Route path="/forbidden" element={<Forbidden />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Route>
  )
);

export default function Routes() {
  return <RouterProvider router={router} />;
}
