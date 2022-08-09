import styled from 'styled-components';
import { shade } from 'polished';

import signInPageBackgroundImg from '../../assets/images/sign-in-background.png';

export const Container = styled.section`
  height: 100vh;

  display: flex;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 70rem;

  form {
    margin: 8rem 0;
    width: 34rem;
    text-align: center;

    h1 {
      margin-bottom: 2.4rem;
    }

    input {
      width: 100%;
      color: var(--color-grey-100);
      border: 2px solid var(--color-grey-800);
      border-radius: 1rem;
      background: var(--color-grey-800);
      padding: 1.6rem;

      &::placeholder {
        color: var(--color-grey-550);
      }

      & + input {
        margin-top: 0.8rem;
      }
    }

    button {
      width: 100%;
      height: 5.6rem;
      font-weight: 500;
      color: var(-color-grey-700);
      border: 0;
      border-radius: 1rem;
      background: var(--color-primary);
      padding: 0 1.6rem;
      margin-top: 1.6rem;
      transition: background-color 0.2s;

      &:hover {
        background: ${shade(0.2, '#ff9000')};
      }
    }

    a {
      display: block;
      color: var(--color-grey-100);

      &:hover {
        color: ${shade(0.2, '#f4ede8')};
      }
    }
  }

  a {
    margin-top: 2.4rem;
    transition: all 0.2s;

    &:hover {
      text-decoration: underline;
    }
  }

  & > a {
    display: flex;
    align-items: center;
    color: var(--color-primary);

    svg {
      margin-right: 1.6rem;
    }

    &:hover {
      color: ${shade(0.2, '#ff9000')};
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${signInPageBackgroundImg}) no-repeat center/cover;
`;
