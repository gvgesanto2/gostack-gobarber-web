import styled from 'styled-components';
import { shade } from 'polished';

import signInPageBackgroundImg from '../../assets/images/sign-up-bg.png';

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

    & > div:not(:last-of-type) {
      margin-bottom: 0.8rem;
    }

    button {
      margin-top: 1.6rem;
    }
  }

  & > a {
    display: flex;
    align-items: center;
    color: var(--color-grey-100);
    margin-top: 2.4rem;
    transition: all 0.2s;

    svg {
      margin-right: 1.6rem;
    }

    &:hover {
      color: ${shade(0.2, '#f4ede8')};
      text-decoration: underline;
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${signInPageBackgroundImg}) no-repeat center/cover;
`;
