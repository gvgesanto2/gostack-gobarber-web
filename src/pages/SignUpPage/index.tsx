import { FiArrowLeft, FiUser, FiMail, FiLock } from 'react-icons/fi';

import logoImg from '../../assets/images/logo.svg';
import Form from '../../components/Form';

import { Background, Container, Content } from './styles';

const fields = [
  {
    icon: FiUser,
    name: 'name',
    placeholder: 'Enter your name...',
    type: 'text',
  },
  {
    icon: FiMail,
    name: 'email',
    placeholder: 'Enter your email...',
    type: 'email',
  },
  {
    icon: FiLock,
    name: 'password',
    placeholder: 'Enter your password...',
    type: 'password',
  },
];

export default function SingUpPage() {
  return (
    <Container>
      <Background />
      <Content>
        <img src={logoImg} alt="GoBarber" />

        <Form title="Sign Up" buttonText="Sign Up" fields={fields} />

        <a href="/">
          <FiArrowLeft />
          Already have an account? Sign in!
        </a>
      </Content>
    </Container>
  );
}
