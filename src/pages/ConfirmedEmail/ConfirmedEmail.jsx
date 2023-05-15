import Lottie from 'react-lottie';
import { useParams } from 'react-router-dom';

import lottieConfirmedEmail from '../../assets/lotties/confirmedEmail.json';
import lottieFailedEmail from '../../assets/lotties/failedEmail.json';
import Loading from '../../components/common/Loading/Loading';
import { useVerifyUser } from '../../hooks/query/users';
import { Container, Title } from './Styles';

export default function NotFound() {
  const { token } = useParams();
  const { data: userName, isLoading } = useVerifyUser({
    token,
  });

  if (isLoading) return <Loading />;
  return (
    <Container>
      <Lottie
        options={{
          loop: true,
          autoplay: true,
          rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
          },
          animationData: userName ? lottieConfirmedEmail : lottieFailedEmail,
        }}
        height={userName ? 230 : 200}
        width={userName ? 230 : 200}
      />
      <Title>
        {userName
          ? `Parabéns, ${userName}! Seu e-mail foi validado com sucesso!`
          : 'Não foi possível validar o seu e-mail'}
      </Title>
    </Container>
  );
}
