import type { FC } from 'react';
import { IPost } from '@/types/post';
import MainEmpty from './main-empty';
import MainPost from './main-post';
import { MainStyle } from './main.style';

interface Props {
  posts: IPost[];
}

const Main: FC<Props> = ({ posts }) => {
  return (
    <div css={MainStyle}>
      {posts.length ? (
        posts.map(({ id, title, body, userId }) => (
          <MainPost key={id} id={id} title={title} body={body} userId={userId} />
        ))
      ) : (
        <MainEmpty />
      )}
    </div>
  );
};

export default Main;
