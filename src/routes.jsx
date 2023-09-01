import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Navigate,
  Outlet,
  useLocation,
} from 'react-router-dom';

import { Footer } from './components/features';
import { AppLayout, AdminLayout, SoftwareLayout } from './layouts';
import {
  Home,
  Login,
  Register,
  ConfirmedEmail,
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
  CourseAuthorizationMobile,
  EditAuthorizeAccessMobile,
  NotFound,
  RedefinePassword,
  CourseAuthorization,
  AccessDenied,
  VerifyEmail,
  StabilityAnalysis,
  SoftwareAuthorization,
  SoftwareAuthorizationMobile,
  EditAuthorizeSoftwareAccessMobile,
  ReportSection,
  ProfileAnalysis,
} from './pages';
import useAuthStore from './stores/auth';

// For the routes that need the user to be logged in
function PrivateRoutes() {
  const auth = useAuthStore((state) => state.auth);
  const { pathname: from } = useLocation();

  return !auth ? <Navigate to="/login" state={{ from }} /> : <Outlet />;
}
// For the routes that need footer
function HasFooterRoutes() {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
}

const language = 'EN';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<AppLayout />}>
        <Route element={<HasFooterRoutes />}>
          <Route index element={<Home language={language} />} />
          <Route path="email-confirmado/:token" element={<ConfirmedEmail />} />
          <Route path="verificar-email" element={<VerifyEmail />} />
          <Route path="catalogo" element={<Catalog />} />
          <Route path="produto/:_id" element={<Product />} />
          <Route path="redefinir-senha/:token" element={<RedefinePassword />} />
          <Route element={<PrivateRoutes />}>
            <Route path="curso" element={<Course />} />
            <Route path="perfil" element={<Profile />} />
          </Route>
        </Route>

        <Route path="login" element={<Login />} />
        <Route path="cadastro" element={<Register />} />
        <Route
          path="acesso-negado-curso"
          element={<AccessDenied content="course" />}
        />
        <Route
          path="acesso-negado-software"
          element={<AccessDenied content="software" />}
        />

        <Route element={<PrivateRoutes />}>
          <Route path="analise-perfil" element={<ProfileAnalysis />} />
          <Route path="software" element={<SoftwareLayout />}>
            <Route index element={<StabilityAnalysis />} />
            <Route
              path="analise-estabilidade"
              element={<StabilityAnalysis />}
            />
            <Route path="perfil" element={<ProfileAnalysis />} />
            <Route path="secao-relatorio" element={<ReportSection />} />
          </Route>
          <Route path="administrador" element={<AdminLayout />}>
            <Route index element={<Profile />} />
            <Route path="listar-produtos" element={<ListProduct />} />
            <Route path="criar-produto" element={<CreateProductMobile />} />
            <Route path="editar-produto" element={<EditProductMobile />} />
            <Route path="listar-categorias" element={<ListCategory />} />
            <Route path="criar-categoria" element={<CreateCategoryMobile />} />
            <Route path="editar-categoria" element={<EditCategoryMobile />} />
            <Route
              path="autorizar-acesso"
              element={<CourseAuthorizationMobile />}
            />
            <Route
              path="editar-autorizacao-de-acesso"
              element={<EditAuthorizeAccessMobile />}
            />
            <Route path="liberacao-cursos" element={<CourseAuthorization />} />
            <Route
              path="autorizar-acesso-software"
              element={<SoftwareAuthorizationMobile />}
            />
            <Route
              path="editar-autorizacao-de-acesso-software"
              element={<EditAuthorizeSoftwareAccessMobile />}
            />
            <Route
              path="liberacao-software"
              element={<SoftwareAuthorization />}
            />
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
