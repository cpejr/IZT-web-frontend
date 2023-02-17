import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import { Catalog } from './pages';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<h1>Hello World!</h1>} />
      <Route path="catalogo" element={<Catalog />} />
    </Route>
  )
);

function Routes() {
  return <RouterProvider router={router} />;
}

export default Routes;
