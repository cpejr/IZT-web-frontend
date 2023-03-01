import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import App from './App';
import { Catalog } from './pages';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<h1>Home</h1>} />
      <Route path="catalogo" element={<Catalog />} />
    </Route>
  )
);

function Routes() {
  return (
    <>
      <Header />
      <RouterProvider router={router} />
    </>
  );
}

export default Routes;
