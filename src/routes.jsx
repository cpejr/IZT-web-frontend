import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import { AppLayout } from './layouts';
import AuthLayout from './layouts/AuthLayout/AuthLayout';
import RoleLayout from './layouts/RoleLayout/RoleLayout';
import {
  Home,
  Login,
  Catalog,
  NotFound,
  Product,
  SignUp,
  Profile,
} from './pages';
import Forbidden from './pages/Forbidden/Forbidden';
import Unauthorized from './pages/Unauthorized/Unauthorized';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="catalogo" element={<Catalog />} />
        <Route path="cadastro" element={<SignUp />} />
        {/* <Route path="produto/:_id" element={<Product />} /> */}
        <Route element={<AuthLayout />}>
          <Route path="perfil" element={<Profile />} />
          <Route element={<RoleLayout />}>
            <Route path="produto/:_id" element={<Product />} />
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
