import Lottie from 'react-lottie';

import { Container, Text } from './Styles';
import homeLoading from '../../../assets/homePage/homeLoading.json';

// TESTANDO NA PÁGINA DE LISTAR CATEGORIAS

export default function HomeLoading() {
  return (
    <Container>
      <Lottie
        options={{
          loop: false,
          autoplay: true,
          rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
          },
          animationData: homeLoading,
        }}
        height={500}
        width={500}
      />
      <Text>Seja bem vindo(a)!</Text>
    </Container>
  );
}
