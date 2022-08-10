import styled from 'styled-components';
import { shade } from 'polished';

import signInPageBackgroundImg from '../../assets/images/sign-in-background.png';

export const Container = styled.section`
  display: flex;
  height: 100vh;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 70rem;

  img {
    margin-bottom: 8rem;
  }

  & > a {
    transition: all 0.2s;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const ForgotPasswordLink = styled.a`
  display: block;
  color: var(--color-grey-100);
  margin: 2.4rem 0 8rem;

  &:hover {
    color: ${shade(0.2, '#f4ede8')};
  }
`;

export const SignUpLink = styled.a`
  display: flex;
  align-items: center;
  color: var(--color-primary);

  svg {
    margin-right: 1.6rem;
  }

  &:hover {
    color: ${shade(0.2, '#ff9000')};
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${signInPageBackgroundImg}) no-repeat center/cover;
`;
