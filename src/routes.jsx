import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<h1>Hello World!</h1>} />
    </Route>
  )
);

function Routes() {
  return <RouterProvider router={router} />;
}

export default Routes;
