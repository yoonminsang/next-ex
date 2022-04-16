import type { GetServerSideProps } from 'next';

import { API_POST } from 'api/post';
import { Post } from 'domain/post';
import { IPost } from 'types/post';
import { NextPageWithLayout } from '@/types/common';

interface Props {
  post: IPost;
}

const PostPage: NextPageWithLayout<Props> = ({ post }) => {
  const { title, body } = post;
  return <Post title={title} body={body} />;
};

export default PostPage;

PostPage.layout = 'MainLayout';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = Number(context.params?.id as unknown as string);
  const { data } = await API_POST.getPostApi({ id });
  return {
    props: {
      post: data,
    },
  };
};
