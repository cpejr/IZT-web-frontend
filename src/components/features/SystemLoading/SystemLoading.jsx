import Lottie from 'react-lottie';
import { useMediaQuery } from 'react-responsive';

import systemLoading from '../../../assets/systemLoading.json';
import { Container, Text } from './Styles';

export default function SystemLoading() {
  const isSmallScreen = useMediaQuery({ maxWidth: 700 });
  const isMobile = useMediaQuery({ maxWidth: 400 });

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
        height={isMobile ? 300 : isSmallScreen ? 400 : 500}
        width={isMobile ? 300 : isSmallScreen ? 400 : 500}
      />
      <Text>Seja bem vindo(a)!</Text>
    </Container>
  );
}
