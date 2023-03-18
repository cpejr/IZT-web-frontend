import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import { AppLayout } from './layouts';
import {
  Home,
  Login,
  Catalog,
  NotFound,
  Product,
  SignUp,
  Profile,
} from './pages';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="catalogo" element={<Catalog />} />
        <Route path="cadastro" element={<SignUp />} />
        <Route path="produto/:_id" element={<Product />} />
        <Route path="perfil" element={<Profile />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

export default function Routes() {
  return <RouterProvider router={router} />;
}
