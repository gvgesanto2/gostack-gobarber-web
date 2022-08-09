import { FiArrowLeft, FiUser, FiMail, FiLock } from 'react-icons/fi';

import logoImg from '../../assets/images/logo.svg';
import Button from '../../components/Button';
import Input from '../../components/Input';

import { Background, Container, Content } from './styles';

export default function SingUpPage() {
  return (
    <Container>
      <Background />
      <Content>
        <img src={logoImg} alt="GoBarber" />

        <form>
          <h1>Sign Up</h1>
          <Input
            icon={FiUser}
            name="name"
            placeholder="Enter your name..."
            type="text"
          />
          <Input
            icon={FiMail}
            name="email"
            placeholder="Enter your email..."
            type="text"
          />
          <Input
            icon={FiLock}
            name="password"
            placeholder="Enter your password..."
            type="password"
          />

          <Button type="submit">Sign Up</Button>
        </form>

        <a href="/">
          <FiArrowLeft />
          Already have an account? Sign in!
        </a>
      </Content>
    </Container>
  );
}
