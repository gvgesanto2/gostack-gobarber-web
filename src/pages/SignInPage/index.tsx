import { FiLogIn } from 'react-icons/fi';

import logoImg from '../../assets/images/logo.svg';

import { Background, Container, Content } from './styles';

export default function SingInPage() {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="GoBarber" />

        <form>
          <h1>Sign In</h1>
          <input placeholder="Enter your email..." type="text" />
          <input placeholder="Enter your password..." type="password" />

          <button type="submit">Sign In</button>

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
