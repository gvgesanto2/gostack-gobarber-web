import { FiArrowLeft, FiUser, FiMail, FiLock } from 'react-icons/fi';

import logoImg from '../../assets/images/logo.svg';
import Form from '../../components/Form';
import { getValidationSchemaFromFields } from '../../utils/validation.utils';

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
    type: 'text',
  },
  {
    icon: FiLock,
    name: 'password',
    placeholder: 'Enter your password...',
    type: 'password',
  },
];

export default function SingUpPage() {
  const schema = getValidationSchemaFromFields(fields);

  return (
    <Container>
      <Background />
      <Content>
        <img src={logoImg} alt="GoBarber" />

        <Form
          validationSchema={schema}
          title="Sign Up"
          buttonText="Sign Up"
          fields={fields}
        />

        <a href="/">
          <FiArrowLeft />
          Already have an account? Sign in!
        </a>
      </Content>
    </Container>
  );
}
