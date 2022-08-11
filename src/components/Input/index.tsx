import { InputHTMLAttributes, useState } from 'react';
import { IconBaseProps } from 'react-icons';
import InputError from '../InputError';
import { Container, StyledInput } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  value: string;
  icon?: React.ComponentType<IconBaseProps>;
  errorMsg?: string;
}

export default function Input({
  icon: Icon,
  value,
  errorMsg,
  ...rest
}: InputProps) {
  const [isInputFocused, setIsInputFocused] = useState(false);

  const handleOnFocus = () => {
    setIsInputFocused(true);
  };

  const handleOnBlur = () => {
    setIsInputFocused(false);
  };

  return (
    <Container
      hasError={!!errorMsg}
      isInputFocused={isInputFocused}
      isInputFilled={!!value}
    >
      {Icon && <Icon size={20} />}
      <StyledInput
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
        value={value}
        {...rest}
      />
      {errorMsg && <InputError message={errorMsg} />}
    </Container>
  );
}
