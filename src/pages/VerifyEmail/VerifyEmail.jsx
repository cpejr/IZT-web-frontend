import { useState } from 'react';

import { Navigate, useLocation } from 'react-router-dom';

import { Header } from '../../components/features';
import { Container, Text } from './Styles';
import { TranslateText } from './translations';

export default function VerifyEmail() {
  const [currentLanguage, setCurrentLanguage] = useState('PT');
  const translations = TranslateText({ currentLanguage });
  const email = useLocation().state;

  if (!email) return <Navigate to="/" replace />;

  return (
    <>
      <Header setCurrentLanguage={setCurrentLanguage} />
      <Container>
        <h1>
          {translations.checkEmail} {email}
        </h1>
        <Text>{translations.emailSent}</Text>
      </Container>
    </>
  );
}
