import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import { Container, Text, LoadingGif } from './Styles';
import homeLoading from '../../../assets/homePage/homeLoading.json';

// TESTANDO NA PÁGINA DE LISTAR CATEGORIAS

export default function HomeLoading() {
  const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: homeLoading,
    });
  }, []);

  return (
    <Container>
      <LoadingGif ref={container} />
      <Text>Seja bem vindo(a)!</Text>
    </Container>
  );
}
