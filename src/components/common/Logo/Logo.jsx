import imageLogo from '../../../assets/IZTLogo.svg';
import { LinkContainer, Image } from './Styles';

export default function Logo() {
  return (
    <LinkContainer to="/">
      <Image src={imageLogo} alt="Logo" />
      <h1>iZT Core</h1>
    </LinkContainer>
  );
}
