import * as Styled from '../../styles/Styled';
import Link from 'next/link';
import { useMediaQuery } from 'react-responsive';
import { useState } from 'react';
import { CiAlignRight } from 'react-icons/ci';

const Navigation = ({ propClass }) => {
  return (
    <Styled.RowFlexUl align={'center'} gap={'2.5rem'} className={propClass}>
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
  )
}

const Gnb = () => {
  const [click, setClick] = useState(false);
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  })

  return (
    <Styled.CustomDiv>
      <Styled.Navigation>
        <Styled.defaultContainer flex={'flex'} justifyContent={'space-between'}>
          {isMobile ?
            <h1 className="companyName" style={{ marginLeft: '1rem' }}>AAA Company</h1>
            :
            <h1 className="companyName">AAA Company</h1>}
          {isMobile ?
            <>
              <button type="button" onClick={() => (setClick(prev => !prev))} className="btn"><CiAlignRight className="icon" /></button>
              <Navigation propClass={click ? "show" : " "} />
            </>
            :
            <Navigation />
          }
        </Styled.defaultContainer>
      </Styled.Navigation>
    </Styled.CustomDiv>
  )
}

export default Gnb;