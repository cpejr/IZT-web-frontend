import { LinkContainer, Image } from './Styles';
import imageLogo from '../../../assets/logoIZT.svg';

export default function Logo() {
  return (
    <LinkContainer to="/">
      <Image src={imageLogo} alt="Logo" />
      <h1>iZT Core</h1>
    </LinkContainer>
  );
}
