import styled from 'styled-components';

import Tooltip from '../Tooltip';

export const ErrorTooltip = styled(Tooltip)`
  height: 2rem;

  span {
    background-color: var(--color-error);
    color: var(--color-white);

    &::before {
      content: '';
      border-color: var(--color-error) transparent;
    }
  }

  svg {
    color: var(--color-error);
  }
`;
