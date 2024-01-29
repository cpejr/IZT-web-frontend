import { Navigate, Outlet } from 'react-router-dom';

import { SoftwareMenu } from '../../components/features';
import useAuthStore from '../../stores/auth';
import {
  Container,
  ErrorMessage,
  ErrorMessageArea,
  ImageArea,
  Image,
} from './Styles';
import { useMediaQuery } from 'react-responsive';
import { useGlobalLanguage } from '../../stores/globalLanguage';
import { TranslateTextSoftwareLayouts } from './translations';
import ErrorimageMobile from '../../assets/ErrorImageMobile/ErrorImageMobile.png';

export default function SoftwareLayout() {
  const user = useAuthStore((state) => state.auth?.user);
  const { globalLanguage } = useGlobalLanguage();
  const translation = TranslateTextSoftwareLayouts({ globalLanguage });

  const isMobile = useMediaQuery({ maxWidth: 767 });

  if (!user.hasAccessToSoftware)
    return <Navigate to="/acesso-negado-software" />;
  return (
    <Container>
      {isMobile ? (
        <Container>
          <ErrorMessageArea>
            <ErrorMessage>{translation.textMobile1}</ErrorMessage>
            <ErrorMessage>{translation.textMobile2}</ErrorMessage>
          </ErrorMessageArea>
          <ImageArea>
            <Image src={ErrorimageMobile} alt="ImageBuildingWeb" />
          </ImageArea>
        </Container>
      ) : (
        <>
          <SoftwareMenu />
          <Outlet />
        </>
      )}
    </Container>
  );
}
