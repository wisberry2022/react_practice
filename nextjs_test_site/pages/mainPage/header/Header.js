/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react';
import * as Emo from '../../../styles/Styled';

const Gnb = () => {
  return (
    <nav className="gnb">
      <Emo.DefaultContainer display='flex' justifyContent='space-between'>
        <h1>
          ELM SOFT
        </h1>
        Header
      </Emo.DefaultContainer>
    </nav>
  )
}


const Header = () => {
  return (
    <div>
      <Gnb />
    </div>
  )
}

export default Header;