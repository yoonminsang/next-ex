import type { FC } from 'react';

import { MainEmptyStyle } from './main-empty.style';

const MainEmpty: FC = () => {
  return <div css={MainEmptyStyle}>글이 존재하지 않습니다</div>;
};

export default MainEmpty;
