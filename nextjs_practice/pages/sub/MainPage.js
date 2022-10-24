import Link from 'next/link';
import * as Styled from '../../styles/Styled';

export default function MainPage() {
  return (
    <Styled.Wrapper>
      <Styled.Section>
        <h1>MainPage</h1>
        <p>hello</p>
        <Link href="/">홈으로</Link>
      </Styled.Section>
    </Styled.Wrapper>
  )
}