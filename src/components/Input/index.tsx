import { InputHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons';
import { Container, StyledInput } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
}

export default function Input({ icon: Icon, ...rest }: InputProps) {
  return (
    <Container>
      {Icon && <Icon size={20} />}
      <StyledInput {...rest} />
    </Container>
  );
}
