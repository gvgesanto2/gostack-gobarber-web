import { FocusEvent, InputHTMLAttributes, useState } from 'react';
import { IconBaseProps } from 'react-icons';
import { Container, StyledInput } from './styles';

type InputFocusEvent = FocusEvent<HTMLInputElement>;

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
}

export default function Input({ icon: Icon, ...rest }: InputProps) {
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [isInputFilled, setIsInputFilled] = useState(false);

  const handleOnFocus = () => {
    setIsInputFocused(true);
  };

  const handleOnBlur = (event: InputFocusEvent) => {
    setIsInputFocused(false);
    setIsInputFilled(!!event.target.value);
  };

  return (
    <Container isInputFocused={isInputFocused} isInputFilled={isInputFilled}>
      {Icon && <Icon size={20} />}
      <StyledInput onFocus={handleOnFocus} onBlur={handleOnBlur} {...rest} />
    </Container>
  );
}
