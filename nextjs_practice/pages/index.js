import Link from 'next/link';
import Gnb from './layout/Gnb';
import * as Styled from '../styles/Styled';

export default function Home() {
  return (
    <Styled.CustomDiv>
      <Gnb />
    </Styled.CustomDiv>
  )
}
