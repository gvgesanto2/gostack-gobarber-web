import styled, { css } from 'styled-components';

interface ContainerProps {
  isInputFocused: boolean;
  isInputFilled: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  width: 100%;
  color: var(--color-grey-550);
  border: 2px solid var(--color-grey-800);
  border-radius: 1rem;
  background: var(--color-grey-800);
  padding: 0 1.6rem;
  transition: all 0.2s;

  svg {
    fill: transparent;
    margin-right: 1.6rem;
  }

  ${({ isInputFocused }) =>
    isInputFocused &&
    css`
      border-color: var(--color-primary);
      color: var(--color-primary);
    `}

  ${({ isInputFilled }) =>
    isInputFilled &&
    css`
      color: var(--color-primary);
    `}
`;

export const StyledInput = styled.input`
  flex: 1;
  color: var(--color-grey-100);
  background: transparent;
  border: none;
  outline: none;
  padding: 1.6rem 0;

  &::placeholder {
    color: var(--color-grey-550);
  }
`;
