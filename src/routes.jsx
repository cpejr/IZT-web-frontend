/* eslint-disable prettier/prettier */
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Navigate,
  Outlet,
  useLocation,
} from 'react-router-dom';

import { AppLayout, AdminLayout } from './layouts';
import {
  Home,
  Login,
  Register,
  Catalog,
  Product,
  Profile,
  ListProduct,
  CreateProductMobile,
  EditProductMobile,
  ListCategory,
  CreateCategoryMobile,
  EditCategoryMobile,
  Course,
  AuthorizeAccessMobile,
  NotFound,
  CourseAuthorization,
  AccessDenied,
} from './pages';
import useAuthStore from './stores/auth';

function PrivateRoutes() {
  const auth = useAuthStore((state) => state?.auth);
  const { pathname: from } = useLocation();

  return !auth ? <Navigate to="/login" state={{ from }} /> : <Outlet />;
}

function AdminRoutes() {
  const user = useAuthStore((state) => state?.auth?.user);

  return !user.isAdmin ? <NotFound /> : <Outlet />;
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
        <Route
          path="acesso-negado-curso"
          element={<AccessDenied content="course" />}
        />
        <Route
          path="acesso-negado-software"
          element={<AccessDenied content="software" />}
        />
        <Route element={<PrivateRoutes />}>
          <Route path="curso" element={<Course />} />
          <Route path="perfil" element={<Profile />} />
          <Route path="administrador" element={<AdminRoutes />}>
            <Route element={<AdminLayout />}>
              <Route index element={<h1>Área do Administrador</h1>} />
              <Route path="listar-produtos" element={<ListProduct />} />
              <Route path="criar-produto" element={<CreateProductMobile />} />
              <Route path="editar-produto" element={<EditProductMobile />} />
              <Route path="listar-categorias" element={<ListCategory />} />
              <Route
                path="criar-categoria"
                element={<CreateCategoryMobile />}
              />
              <Route path="editar-categoria" element={<EditCategoryMobile />} />
              <Route
                path="autorizar-acesso"
                element={<AuthorizeAccessMobile />}
              />
              <Route
                path="liberacao-cursos"
                element={<CourseAuthorization />}
              />
            </Route>
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Route>
  )
);

export default function Routes() {
  return <RouterProvider router={router} />;
}
