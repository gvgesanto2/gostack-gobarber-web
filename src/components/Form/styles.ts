import styled from 'styled-components';

export const StyledForm = styled.form`
  width: 34rem;
  text-align: center;

  h2 {
    font-size: 2.4rem;
    color: var(--color-white);
    margin-bottom: 2.4rem;
  }

  & > div:not(:last-of-type) {
    margin-bottom: 0.8rem;
  }

  button {
    margin-top: 1.6rem;
  }
`;
