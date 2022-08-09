import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  color: var(--color-grey-550);
  border: 2px solid var(--color-grey-800);
  border-radius: 1rem;
  background: var(--color-grey-800);
  padding: 1.6rem;

  svg {
    fill: transparent;
    margin-right: 1.6rem;
  }
`;

export const StyledInput = styled.input`
  flex: 1;
  color: var(--color-grey-100);
  background: transparent;
  border: none;
  outline: none;

  &::placeholder {
    color: var(--color-grey-550);
  }
`;
