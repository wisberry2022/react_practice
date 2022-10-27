/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react';
import MainVisual from "./MainVisual";
import * as Styled from '../../styles/Styled';
import Gnb from "../layout/Gnb";

const Total = () => {
  return (
    <Styled.ColFlexDiv>
      <Gnb />
      <MainVisual />
    </Styled.ColFlexDiv>
  )
}

export default Total;