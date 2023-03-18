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
  ListProduct,
  ListCategory,
  CreateCategory,
  AddProduct,
  EditProduct,
  Product,
  SignUp,
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
          <Route path="listar-produtos" element={<ListProduct />} />
          <Route path="listar-categorias" element={<ListCategory />} />
          <Route path="criar-categoria" element={<CreateCategory />} />
          <Route path="adicionar-produto" element={<AddProduct />} />
          <Route path="editar-produto" element={<EditProduct />} />
          <Route path="editar-categoria" element={<EditCategory />} />
        </Route>
        <Route path="cadastro" element={<SignUp />} />
        <Route path="produto/:_id" element={<Product />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

export default function Routes() {
  return <RouterProvider router={router} />;
}
