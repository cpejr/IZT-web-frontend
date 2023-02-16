
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import TestPage from './pages/TestPage/testPage';
import Header from './components/features/header/header';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<h1>Hello World!</h1>} />
      <Route path="test" element={<TestPage/>} />
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
