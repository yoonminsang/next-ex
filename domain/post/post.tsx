import type { FC } from 'react';
import { IPost } from '@/types/post';
import { PostStyle } from './post.style';

type Props = Pick<IPost, 'title' | 'body'>;

const Post: FC<Props> = ({ title, body }) => {
  return (
    <div css={PostStyle}>
      <h1>{title}</h1>
      <div>{body}</div>
    </div>
  );
};

export default Post;
