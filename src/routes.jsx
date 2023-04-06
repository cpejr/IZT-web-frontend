import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Navigate,
  Outlet,
} from 'react-router-dom';

import { AppLayout, AdminStoreLayout } from './layouts';
import {
  Home,
  Login,
  Register,
  Catalog,
  Product,
  Profile,
  ListProduct,
  CreateProduct,
  EditProduct,
  ListCategory,
  CreateCategory,
  EditCategory,
  NotFound,
  Unauthorized,
  Forbidden,
} from './pages';
import useAuthStore from './stores/auth';

function PrivateRoutes() {
  const auth = useAuthStore((state) => state?.auth);

  return !auth ? <Navigate to="unauthorized" /> : <Outlet />;
}

function AdminRoutes() {
  const user = useAuthStore((state) => state?.auth?.user);

  return !user.isAdmin ? <Navigate to="forbidden" /> : <Outlet />;
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
        <Route element={<PrivateRoutes />}>
          <Route path="perfil" element={<Profile />} />
          <Route path="administrador" element={<AdminRoutes />}>
            <Route index element={<CarouselTest />} />
            <Route path="loja" element={<AdminStoreLayout />}>
              <Route index element={<ListProduct />} />
              <Route path="criar-produto" element={<CreateProduct />} />
              <Route path="editar-produto" element={<EditProduct />} />
              <Route path="listar-categorias" element={<ListCategory />} />
              <Route path="criar-categoria" element={<CreateCategory />} />
              <Route path="editar-categoria" element={<EditCategory />} />
            </Route>
          </Route>
        </Route>
        <Route path="/unauthorized" element={<Unauthorized />} />
        <Route path="/forbidden" element={<Forbidden />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Route>
  )
);
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Controller } from 'swiper';
import carouselData from './assets/homePage/carousel/data';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import styled from 'styled-components';
import { useCallback, useRef, useState } from 'react';

const StyledSwiper = styled(Swiper)`
  aspect-ratio: 1 / 1;
  width: 100%;
  max-width: 1300px;
  max-height: 500px;
`;
const StyledSwiperSlide = styled(SwiperSlide)`
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const NavContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    display: flex;
    justify-content: center;
    align-items: center;

    width: auto !important;
  }
`;
import * as ReactDOMServer from 'react-dom/server';
import { Dots } from './components/features/Carousel/Styles';
function CarouselTest() {
  const swiperRef = useRef(null);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const handlePrev = useCallback(() => {
    if (!swiperRef.current) return;
    swiperRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!swiperRef.current) return;
    swiperRef.current.swiper.slideNext();
  }, []);

  return (
    <>
      <StyledSwiper
        speed={750}
        modules={[Navigation, Pagination]}
        pagination={{
          el: '.my-custom-pagination-div',
          clickable: true,
          // renderBullet: (index, className) => {
          //   return ReactDOMServer.renderToStaticMarkup(
          //     <Dots className={className} />
          //   );
          // },
        }}
        ref={swiperRef}
        loop
      >
        {carouselData.map(({ src, name, alt }) => (
          <StyledSwiperSlide key={name}>
            <img src={src} alt={alt} />
          </StyledSwiperSlide>
        ))}
      </StyledSwiper>
      <NavContainer>
        <button type="button" onClick={handlePrev}>
          Prev
        </button>
        <div className="my-custom-pagination-div" />
        <button type="button" onClick={handleNext}>
          Next
        </button>
      </NavContainer>
    </>
  );
}

export default function Routes() {
  return <RouterProvider router={router} />;
}
