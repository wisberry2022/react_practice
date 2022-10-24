import * as Styled from '../../styles/Styled';
import Link from 'next/link';
import '../commonCss/Basic.scss';

export default function Gnb() {
  return (
    <Styled.CustomDiv>
      <Styled.Navigation>
        <Styled.defaultContainer flex={'flex'} justifyContent={'space-between'}>
          <h1 className="companyName">AAA Company</h1>
          <Styled.RowFlexUl align={'center'} gap={'2.5rem'}>
            <li>
              <Link href="/sub/MainPage">메인메뉴</Link>
            </li>
            <li>
              <Link href="/sub/Introduce">회사소개</Link>
            </li>
            <li>
              <Link href="/sub/Recruit">인재채용</Link>
            </li>
            <li>
              <Link href="/sub/Custom">고객센터</Link>
            </li>
          </Styled.RowFlexUl>
        </Styled.defaultContainer>
      </Styled.Navigation>
    </Styled.CustomDiv>
  )
}
