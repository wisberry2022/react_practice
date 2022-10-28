/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react';
import MainVisual from "./MainVisual";
import Introduce from './Sections/Introduce';
import * as Styled from '../../styles/Styled';
import Gnb from "../layout/Gnb";

const Total = () => {
  return (
    <Styled.ColFlexDiv>
      <Gnb />
      <MainVisual />
      <Introduce />
    </Styled.ColFlexDiv>
  )
}

export default Total;