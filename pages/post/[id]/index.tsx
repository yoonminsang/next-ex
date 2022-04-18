import type { GetServerSideProps } from 'next';
import { Post } from 'domain/post';
import { IPost } from 'types/post';
import { dehydrate, QueryClient } from 'react-query';
import { useRouter } from 'next/router';
import { API_POST } from '@/apis/post';
import { NextPageWithLayout } from '@/types/common';
import { QUERY_POST_KEY } from '@/constants/queries/query-post-key';
import { useGetPostById } from '@/hooks/queries/post';

interface Props {
  post: IPost;
}

const PostPage: NextPageWithLayout<Props> = () => {
  const router = useRouter();
  const id = Number(router.query.id);
  const { data: post } = useGetPostById({ id });
  if (!post) return null;
  const { title, body } = post;
  return <Post title={title} body={body} />;
};

export default PostPage;

PostPage.layout = 'MainLayout';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = Number(context.query.id);
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        suspense: true,
      },
    },
  });

  await queryClient.prefetchQuery([QUERY_POST_KEY.getPost, id], () => API_POST.getPostByIdApi(id));

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};
