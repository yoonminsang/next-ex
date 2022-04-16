import type { FC } from 'react';
import Link from 'next/link';
import { IPost } from '@/types/post';
import { MainPostStyle } from './main-post.style';

type Props = IPost;

const MainPost: FC<Props> = ({ id, title, body, userId }) => {
  return (
    <Link href={`/post/${id}`}>
      <a css={MainPostStyle}>
        <h1>{title}</h1>
        <div>{body}</div>
        <span>{userId}</span>
      </a>
    </Link>
  );
};

export default MainPost;
