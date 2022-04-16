import Head from 'next/head';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import type { FC } from 'react';
import { Header, Menu } from '@/components/common';
import { ManageLayoutInnerStyle, ManageLayoutStyle } from './default-layout.style';
import { ChildProps } from '@/types/common';

type Props = ChildProps;

const ManageLayout: FC<Props> = ({ children }) => {
  return (
    <>
      <Head>
        <title>My Blog</title>
      </Head>
      <div css={ManageLayoutStyle}>
        <Header />
        <Menu />
        <div css={ManageLayoutInnerStyle}>{children}</div>
        <ToastContainer
          position="bottom-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable
          pauseOnHover={false}
        />
      </div>
    </>
  );
};

export default ManageLayout;
