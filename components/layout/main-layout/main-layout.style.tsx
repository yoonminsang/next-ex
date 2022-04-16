import { css, SerializedStyles, Theme } from '@emotion/react';

export const MainLayoutStyle = (theme: Theme): SerializedStyles => css`
  height: 100%;
  padding: 100px;
  background-color: ${theme.colorGray2};
  overflow-y: scroll;
`;

export const MainLayoutInnerStyle = css``;
