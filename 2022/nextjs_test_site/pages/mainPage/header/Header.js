/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react';
import Link from 'next/link';
import * as Emo from '../../../styles/Styled';
import MainVisual from './MainVisual';

const Gnb = () => {
  const navData = [
    { id: 1, title: '회사소개', link: '/Intro' },
    { id: 2, title: 'IR', link: '/IR' },
    { id: 3, title: '인재채용', link: '/Recruit' },
    { id: 4, title: '고객센터', link: '/CS' },
    { id: 5, title: '외주문의', link: '/Outsorce' },
  ]
  return (
    <nav className="gnb">
      <Emo.DefaultContainer display='flex' justifycontent='space-between'>
        <h1 className="logo">
          <Link href="/">
            ELM SOFT
          </Link>
        </h1>
        <Emo.RowFlexUl>
          {navData.map(it => {
            return <li key={it.id}><Link href={it.link}>{it.title}</Link></li>
          })}
        </Emo.RowFlexUl>
      </Emo.DefaultContainer>
    </nav>
  )
}


const Header = () => {
  return (
    <header>
      <Gnb />
      <MainVisual />
    </header>
  )
}

export default Header;