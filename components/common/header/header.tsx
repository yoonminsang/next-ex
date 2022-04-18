import type { NextPage } from 'next';

import { HeaderStyle } from './header.style';

const Header: NextPage = () => {
  return <header css={HeaderStyle}>헤더</header>;
};

export default Header;
