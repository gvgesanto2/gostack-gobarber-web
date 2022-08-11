import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  span {
    position: absolute;
    bottom: calc(100% + 1.2rem);
    left: 50%;
    transform: translateX(-50%);
    width: 16rem;
    font-size: 1.4rem;
    font-weight: 500;
    border-radius: 0.4rem;
    background: var(--color-primary);
    opacity: 0;
    visibility: hidden;
    padding: 0.8rem;
    transition: all 0.35s;

    &::before {
      content: '';
      position: absolute;
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
      border-style: solid;
      border-width: 0.6rem 0.6rem 0 0.6rem;
      border-color: var(--color-primary) transparent;
    }
  }

  &:hover span {
    opacity: 1;
    visibility: visible;
  }
`;
