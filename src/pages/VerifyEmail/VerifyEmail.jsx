import { Navigate, useLocation } from 'react-router-dom';

import { useGlobalLanguage } from '../../stores/globalLanguage';
import { Container, Text } from './Styles';
import { TranslateText } from './translations';

export default function VerifyEmail() {
  // Translation
  const { globalLanguage } = useGlobalLanguage();
  const translations = TranslateText({ globalLanguage });

  const email = useLocation().state;

  if (!email) return <Navigate to="/" replace />;

  return (
    <Container>
      <h1>
        {translations.checkEmail} {email}
      </h1>
      <Text>{translations.emailSent}</Text>
    </Container>
  );
}
