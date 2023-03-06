import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import { AppLayout, AdminLayout } from './layouts';
import {
  Home,
  Login,
  Catalog,
  NotFound,
  EditProduct,
  EditCategory,
} from './pages';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="catalogo" element={<Catalog />} />
        <Route path="administrador" element={<AdminLayout />}>
          <Route path="editar-produtos" element={<EditProduct />} />
          <Route path="editar-categorias" element={<EditCategory />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function Routes() {
  return <RouterProvider router={router} />;
}

export default Routes;
