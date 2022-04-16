import type { NextPage } from 'next';
import { ReactNode } from 'react';

export type TLayout = 'DefaultLayout' | 'MainLayout' | 'ManageLayout';

// eslint-disable-next-line @typescript-eslint/ban-types
export type NextPageWithLayout<P = {}> = NextPage<P> & {
  layout?: TLayout;
};

export interface ChildProps {
  children: ReactNode;
}
