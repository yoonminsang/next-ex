import type { AppProps } from 'next/app';
import { ThemeProvider } from '@emotion/react';
import type { FC } from 'react';
import theme from '@/styles/theme';
import GlobalStyle from '@/styles/global-style';
import ErrorBoundary from '@/components/error-boundary/ErrorBoundary';
import { MainLayout, ManageLayout, DefaultLayout } from '@/components';
import { ChildProps, NextPageWithLayout, TLayout } from '@/types/common';

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const layouts: { [key in TLayout]: FC<ChildProps> } = {
  MainLayout,
  ManageLayout,
  DefaultLayout,
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const Layout = layouts[Component?.layout || 'DefaultLayout'];
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ErrorBoundary>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ErrorBoundary>
    </ThemeProvider>
  );
}

export default MyApp;
