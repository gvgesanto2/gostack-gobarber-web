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

  img {
    margin-bottom: 8rem;
  }

  & > a {
    display: flex;
    align-items: center;
    color: var(--color-grey-100);
    margin-top: 8rem;
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
