import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  Page,
  Container,
  Logo,
  Title,
  Form,
  DataEntry,
  RemeberMe,
  SignUpLink,
  Links,
} from './Styles';
import { buildLoginErrorMessage, loginValidationSchema } from './utils';
import IZTLogo from '../../assets/IZTLogo.svg';
import { AddToast, DataInput, SubmitButton } from '../../components/common';
import { useLogin } from '../../hooks/query/sessions';
import { ERROR_CODES } from '../../utils/constants';

export default function Login() {
  const navigate = useNavigate();
  const { mutate: login, isLoading } = useLogin({
    onSuccess: () => navigate('/'),
    onError: (err) => {
      const errorMessage = buildLoginErrorMessage(err);

      // Do something to the errorMessage
      alert(errorMessage);
    },
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginValidationSchema),
  });
  const [submitErrorMessage, setSubmitErrorMessage] = useState('');
  const navigate = useNavigate();

  const onSuccess = () => {
    navigate('/');
    toast.success('Usuário logado com sucesso!');
  };
  const onError = (error) => {
    switch (error.response.status) {
      case ERROR_CODES.BAD_REQUEST:
        setSubmitErrorMessage('Dados inválidos');
        toast.error('Dados inválidos');
        break;
      case ERROR_CODES.UNAUTHORIZED:
        setSubmitErrorMessage('E-mail ou senha incorretos');
        toast.error('E-mail ou senha incorretos');
        break;
      case ERROR_CODES.FORBIDDEN:
        setSubmitErrorMessage(
          'A sua conta ainda não foi ativada. Por favor verifique o e-mail'
        );
        toast.error(
          'A sua conta ainda não foi ativada. Por favor verifique o e-mail'
        );
        break;
      case ERROR_CODES.INTERNAL_SERVER:
        setSubmitErrorMessage(
          'Erro ao realizar o login. Tente novamente mais tarde'
        );
        toast.error('Erro ao realizar o login. Tente novamente mais tarde');
        break;
      default:
        break;
    }
  };
  const { mutate: login } = useLogin({ onSuccess, onError });

  const onSubmit = (data) => login(data);

  if (isLoading) return <p style={{ height: '100vh' }}>Loading...</p>;
  return (
    <Page>
      <Container>
        <Logo
          src={IZTLogo}
          alt="Logo da IZT: Um I atravessando um Z dentro de um circulo"
        />
        <DataEntry>
          <Title>Entre na sua conta</Title>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <DataInput
              label="E-mail: "
              name="email"
              placeholder="email@email.com"
              register={register}
              errors={errors}
              type="text"
            />
            <DataInput
              label="Senha: "
              name="password"
              placeholder="********"
              register={register}
              errors={errors}
              type="password"
            />
            <SubmitButton
              name="Entrar"
              // submitErrorMessage={submitErrorMessage}
              relativeWidth="70%"
            />
          </Form>
        </DataEntry>
        <Links>
          <RemeberMe to="/">Esqueceu a sua senha? Clique aqui!</RemeberMe>
          <SignUpLink>
            Ainda não tem uma conta? <Link to="/">Cadastre-se aqui!</Link>
          </SignUpLink>
        </Links>
      </Container>
      <AddToast />
    </Page>
  );
}
