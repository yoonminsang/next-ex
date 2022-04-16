import { ReactElement } from 'react';

import { Global, css, Theme, SerializedStyles } from '@emotion/react';

const style = (theme: Theme): SerializedStyles => css`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,
      Helvetica Neue, sans-serif;
  }

  html {
    &::-webkit-scrollbar {
      width: 6px;
      background-color: ${theme.scrollLightGray};
    }
    &::-webkit-scrollbar-track {
      background-color: ${theme.scrollLightGray};
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 3px;
      background-color: ${theme.scrollDarkGray};
    }
    &::-webkit-scrollbar-button {
      width: 0;
      height: 0;
    }
  }

  html,
  body,
  #__next {
    height: 100%;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  a,
  button {
    cursor: pointer;
  }

  * {
    box-sizing: border-box;
  }
`;

const GlobalStyle = (): ReactElement => {
  return <Global styles={style} />;
};

export default GlobalStyle;
