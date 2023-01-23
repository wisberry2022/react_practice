/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react';
import Link from 'next/link';
import * as Emo from '../../../styles/Styled';

const Footer = () => {
  const footerList = ['이용약관', '개인정보처리방침', '고객센터', '인재채용', '회사소개']
  return (
    <footer>
      <Emo.DefaultContainer>
        <Emo.CustomFlexDiv flexdirection='row' justifycontent='space-between'>
          <ul className="footerList">
            {footerList.map((it, idx) => {
              return (
                <li>
                  <Link href="#">
                    {it}
                  </Link>
                </li>
              )
            })}
          </ul>
          <h2>
            <Link href="/">
              ELM SOFT
            </Link>
          </h2>
        </Emo.CustomFlexDiv>
      </Emo.DefaultContainer>
    </footer>
  )
}

export default Footer;