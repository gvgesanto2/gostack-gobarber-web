import { FiAlertCircle } from 'react-icons/fi';
import { ErrorTooltip } from './styles';

interface InputErrorProps {
  message: string;
}

export default function InputError({ message }: InputErrorProps) {
  return (
    <ErrorTooltip title={message}>
      <FiAlertCircle size={20} />
    </ErrorTooltip>
  );
}
