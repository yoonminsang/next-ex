/* eslint-disable react/no-unstable-nested-components */
import type { AppProps } from 'next/app';
import { ThemeProvider } from '@emotion/react';
import { FC, Suspense, useState } from 'react';
import { Hydrate, QueryClient, QueryClientProvider, QueryErrorResetBoundary } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { ErrorBoundary } from 'react-error-boundary';
import theme from '@/styles/theme';
import GlobalStyle from '@/styles/global-style';
import { MainLayout, ManageLayout, DefaultLayout } from '@/components';
import { ChildProps, NextPageWithLayout, TLayout } from '@/types/common';
import { Error } from '@/components/error';
import { Loader } from '@/components/loader';

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
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            suspense: true,
          },
        },
      }),
  );
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen />
        <QueryErrorResetBoundary>
          {({ reset }) => (
            <ErrorBoundary
              onReset={reset}
              fallbackRender={({ resetErrorBoundary }) => <Error resetErrorBoundary={resetErrorBoundary} />}
            >
              <Suspense fallback={<Loader />}>
                <Hydrate state={pageProps.dehydratedState}>
                  <Layout>
                    <Component {...pageProps} />
                  </Layout>
                </Hydrate>
              </Suspense>
            </ErrorBoundary>
          )}
        </QueryErrorResetBoundary>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default MyApp;
