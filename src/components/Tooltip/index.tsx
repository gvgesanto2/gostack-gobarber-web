import { ReactNode } from 'react';

import { Container } from './styles';

interface TooltipProps {
  title: string;
  children: ReactNode;
  className?: string;
}

export default function Tooltip({ children, className, title }: TooltipProps) {
  return (
    <Container className={className}>
      <span>{title}</span>
      {children}
    </Container>
  );
}
