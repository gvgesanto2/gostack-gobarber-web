import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';

import logoImg from '../../assets/images/logo.svg';
import Form from '../../components/Form';
import { getValidationSchemaFromFields } from '../../utils/validation.utils';

import {
  Background,
  Container,
  Content,
  ForgotPasswordLink,
  SignUpLink,
} from './styles';

const fields = [
  {
    icon: FiMail,
    name: 'email',
    placeholder: 'Enter your email...',
    type: 'text',
  },
  {
    icon: FiLock,
    name: 'password',
    placeholder: 'Enter your password...',
    type: 'password',
  },
];

const schema = getValidationSchemaFromFields(fields);

export default function SingInPage() {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="GoBarber" />

        <Form
          validationSchema={schema}
          title="Sign In"
          buttonText="Sign In"
          fields={fields}
        />
        <ForgotPasswordLink href="/">Forgot your password?</ForgotPasswordLink>

        <SignUpLink href="/">
          <FiLogIn />
          Don&apos;t have an account? Sign up!
        </SignUpLink>
      </Content>
      <Background />
    </Container>
  );
}
