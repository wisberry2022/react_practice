import styled, { css } from "styled-components";

export const GreatDiv = styled.div`
  position: relative;
  height: 150vh;
`;

export const StickyDiv = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: ${props => props.size || '50px'};
  height: ${props => props.size || '50px'};
  background-color: #000;
  color: #fff;

  ${(props) => props.size > 70 &&
    css`
    background-color: #f00;
  `
  }
`