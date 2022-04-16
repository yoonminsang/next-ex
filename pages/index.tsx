import type { GetServerSideProps } from 'next';
import { IPost } from 'types/post';
import { Main } from 'domain/main';
import { API_POST } from 'api/post';
import axios from 'axios';
import { toast } from 'react-toastify';
import { NextPageWithLayout } from '@/types/common';
import { IError } from '@/types/error';

interface Props {
  posts: IPost[];
}

const Home: NextPageWithLayout<Props> = ({ posts }) => {
  return <Main posts={posts} />;
};

export default Home;

Home.layout = 'MainLayout';

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const { data } = await API_POST.getPostsApi();
    return {
      props: {
        posts: data,
      },
    };
  } catch (err) {
    if (axios.isAxiosError(err)) {
      const errCode = (err?.response?.data as IError)?.errorCode;
      if (!errCode) {
        toast.error('서버 에러');
        return { props: { errCode: 'server error' } };
      }
      toast.error(errCode);
      return { props: { errCode } };
    }
    toast.error('');
    return { props: { errCode: 'inner error' } };
  }
};
// const onInfo = () => toast.info('info');
// const onSuccess = () => toast.success('success');
// const onWarn = () => toast.warn('warn');
// const onErorr = () => toast.error('error');
