/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react';
import MainVisual from "./MainVisual";
import Introduce from './Sections/Introduce';
import * as Styled from '../../styles/Styled';
import Portfolio from './Sections/Portfolio';
import Gnb from "../layout/Gnb";
import SemiFooter from './Sections/Semifooter';

const Total = () => {
  return (
    <Styled.ColFlexDiv>
      <Gnb />
      <MainVisual />
      <Introduce />
      <Portfolio />
      <SemiFooter />
    </Styled.ColFlexDiv>
  )
}

export default Total;