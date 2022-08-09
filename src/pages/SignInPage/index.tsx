import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';

import logoImg from '../../assets/images/logo.svg';
import Button from '../../components/Button';
import Input from '../../components/Input';

import { Background, Container, Content } from './styles';

export default function SingInPage() {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="GoBarber" />

        <form>
          <h1>Sign In</h1>
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

          <Button type="submit">Sign In</Button>

          <a href="/">Forgot your password?</a>
        </form>

        <a href="/">
          <FiLogIn />
          Don&apos;t have an account? Sign up!
        </a>
      </Content>
      <Background />
    </Container>
  );
}
