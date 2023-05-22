import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Navigate,
  Outlet,
} from 'react-router-dom';

import { AppLayout, AdminStoreLayout } from './layouts';
import {
  Home,
  Login,
  Register,
  Catalog,
  Product,
  Profile,
  ListProduct,
  CreateProduct,
  EditProduct,
  ListCategory,
  CreateCategory,
  EditCategory,
  NotFound,
  Unauthorized,
  Forbidden,
} from './pages';
import useAuthStore from './stores/auth';

function PrivateRoutes() {
  const auth = useAuthStore((state) => state?.auth);

  return !auth ? <Navigate to="unauthorized" /> : <Outlet />;
}

function AdminRoutes() {
  const user = useAuthStore((state) => state?.auth?.user);

  return !user.isAdmin ? <Navigate to="forbidden" /> : <Outlet />;
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="cadastro" element={<Register />} />
        <Route path="catalogo" element={<Catalog />} />
        <Route path="produto/:_id" element={<Product />} />
        <Route element={<PrivateRoutes />}>
          <Route path="perfil" element={<Profile />} />
          <Route path="administrador" element={<AdminRoutes />}>
            <Route path="loja" element={<AdminStoreLayout />}>
              <Route index element={<ListProduct />} />
              <Route path="criar-produto" element={<CreateProduct />} />
              <Route path="editar-produto" element={<EditProduct />} />
              <Route path="listar-categorias" element={<ListCategory />} />
              <Route path="criar-categoria" element={<CreateCategory />} />
              <Route path="editar-categoria" element={<EditCategory />} />
            </Route>
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
