import { useState, useEffect } from 'react';

import Lottie from 'react-lottie';
import { useParams } from 'react-router-dom';

import lottieConfirmedEmail from '../../assets/lotties/lottieConfirmedEmail.json';
import lottieFailedEmail from '../../assets/lotties/lottieFailedEmail.json';
import Loading from '../../components/common/Loading/Loading';
import { useVerifyUser } from '../../hooks/query/users';
import { Container, Title } from './Styles';

export default function NotFound() {
  const { token } = useParams();
  const { data: user, isLoading } = useVerifyUser({
    token,
  });
  const message = user
    ? `Parabéns ${user?.name}! Seu email foi validado com sucesso. Agora você será redirecionado(a) para a página de Login.`
    : 'Não foi possível validar o seu email.';

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      window.location.href = '/login';
      console.log(timeoutId);
    }, 7000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <Container>
      {message === 'Não foi possível validar o seu email.' ? (
        <Lottie
          options={{
            loop: true,
            autoplay: true,
            rendererSettings: {
              preserveAspectRatio: 'xMidYMid slice',
            },
            animationData: lottieFailedEmail,
          }}
          height={200}
          width={200}
        />
      ) : (
        <Lottie
          options={{
            loop: true,
            autoplay: true,
            rendererSettings: {
              preserveAspectRatio: 'xMidYMid slice',
            },
            animationData: lottieConfirmedEmail,
          }}
          height={230}
          width={230}
        />
      )}

      {isLoading ? (
        <h1
          style={{
            height: '660px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Loading />
        </h1>
      ) : (
        <Title>{message}</Title>
      )}
    </Container>
  );
}
