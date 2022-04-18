import type { GetServerSideProps } from 'next';
import { Main } from 'domain/main';
import { dehydrate, QueryClient } from 'react-query';
import { API_POST } from '@/apis/post';
import { NextPageWithLayout } from '@/types/common';
import { useGetPosts } from '@/hooks/queries/post';
import { QUERY_POST_KEY } from '@/constants/queries/query-post-key';

const Home: NextPageWithLayout = () => {
  const { data: posts } = useGetPosts();
  if (!posts) return null;
  return <Main posts={posts} />;
};

export default Home;

Home.layout = 'MainLayout';

export const getServerSideProps: GetServerSideProps = async () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        suspense: true,
      },
    },
  });

  await queryClient.prefetchQuery([QUERY_POST_KEY.getPosts], API_POST.getPostsApi);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
  // try {
  //   const { data } = await API_POST.getPostsApi();
  //   return {
  //     props: {
  //       posts: data,
  //     },
  //   };
  // } catch (err) {
  //   if (axios.isAxiosError(err)) {
  //     const errCode = (err?.response?.data as IError)?.errorCode;
  //     if (!errCode) {
  //       toast.error('서버 에러');
  //       return { props: { errCode: 'server error' } };
  //     }
  //     toast.error(errCode);
  //     return { props: { errCode } };
  //   }
  //   toast.error('내부 에러');
  //   return { props: { errCode: 'inner error' } };
  // }
};
// const onInfo = () => toast.info('info');
// const onSuccess = () => toast.success('success');
// const onWarn = () => toast.warn('warn');
// const onErorr = () => toast.error('error');
