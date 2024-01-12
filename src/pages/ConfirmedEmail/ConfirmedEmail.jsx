import Lottie from 'react-lottie';
import { useParams } from 'react-router-dom';

import lottieConfirmedEmail from '../../assets/lotties/confirmedEmail.json';
import lottieFailedEmail from '../../assets/lotties/failedEmail.json';
import Loading from '../../components/common/Loading/Loading';
import { useVerifyUser } from '../../hooks/query/users';
import { useGlobalLanguage } from '../../stores/globalLanguage';
import { Container, Title } from './Styles';
import { TranslateText } from './translations';

export default function ConfirmedEmail() {
  const { globalLanguage } = useGlobalLanguage();
  const translations = TranslateText({ globalLanguage });

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
          ? `${translations.congratsMessage} ${userName} ${translations.succesMessage}`
          : `${translations.errorMessage}`}
      </Title>
    </Container>
  );
}
