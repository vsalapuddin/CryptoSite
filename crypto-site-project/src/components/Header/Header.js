import Link from 'next/link';
import React from 'react';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2,NavLink } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: 'flex', alignItems: 'center', color:"white" }}>
          <DiCssdeck size="3rem" /> <span>Crypto Analyzer</span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#Charts">
          <NavLink>Charts</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#Data">
          <NavLink>Data</NavLink>
        </Link>
      </li>            
    </Div2>
    </Container>
);

export default Header;
