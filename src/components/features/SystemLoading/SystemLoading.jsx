import Lottie from 'react-lottie';

import systemLoading from '../../../assets/systemLoading.json';
import { Container, Text } from './Styles';

export default function SystemLoading() {
  return (
    <Container>
      <Lottie
        options={{
          loop: false,
          autoplay: true,
          rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
          },
          animationData: systemLoading,
        }}
        height={500}
        width={500}
      />
      <Text>Seja bem vindo(a)!</Text>
    </Container>
  );
}
