import { shade } from 'polished';
import styled from 'styled-components';

export const StyledButton = styled.button`
  width: 100%;
  height: 5.6rem;
  font-weight: 500;
  color: var(-color-grey-700);
  border: 0;
  border-radius: 1rem;
  background: var(--color-primary);
  padding: 0 1.6rem;
  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.2, '#ff9000')};
  }
`;
