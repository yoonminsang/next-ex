import type { NextPage } from 'next';

import { HeaderStyle } from './header.style';

const Header: NextPage = () => {
  return <div css={HeaderStyle}>헤더</div>;
};

export default Header;
