import MainVisual from "./MainVisual";
import * as Styled from '../../styles/Styled';
import Gnb from "../layout/Gnb";

const Total = () => {
  return (
    <Styled.Wrapper>
      <Gnb />
      <MainVisual />
    </Styled.Wrapper>
  )
}

export default Total;