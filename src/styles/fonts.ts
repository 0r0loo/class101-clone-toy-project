import { css } from 'styled-components';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: css`
    font-size: 24px;
    font-weight: bold;
    color: ${({ theme }) => theme.ui01};
    line-height: 34px;
    letter-spacing: -0.4px;
  `,
};
