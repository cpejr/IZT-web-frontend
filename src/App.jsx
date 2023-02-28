// import Routes from './routes';

import { Outlet } from 'react-router-dom';
import { Footer } from './components/common';

function App() {
  return (
    <>
      <h1>Header</h1>
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
