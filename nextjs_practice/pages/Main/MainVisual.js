import * as Styled from '../../styles/Styled';
import { useMediaQuery } from 'react-responsive';

const MainVisual = () => {
  return (
    <Styled.CustomDiv height='100vh' className="bg_set mainBg">
      <Styled.defaultContainer>
        <Styled.TitleDiv display='flex' flexDirection='column' justifyContent='center' color='#fff' className="absoluteBox">
          <h3>여러분과 함께하는 기업</h3>
          <p>
            항상 여러분들의 옆에서<br />
            고객님들과 발을 맞추는 서비스를 제공합니다
          </p>
        </Styled.TitleDiv>
      </Styled.defaultContainer>
    </Styled.CustomDiv>
  )
}

export default MainVisual;