import styled from "styled-components";

const StyledBox = styled.div`
  border: 0.1rem solid #f00;
  padding: 2rem;
`
export { StyledBox }

const StyledH1 = styled.h1`
  margin: ${props => props.align ? '0 auto' : '0'};
  padding: .5rem;
  text-align: center;
  width: ${props => props.width};
  color: ${props => props.color};
  
`;

export { StyledH1 }

const StyledStrong = styled.strong`
  display: block;
  text-align: center;
  font-size: ${props => props.fontSize};
`;

export { StyledStrong }


const StyledSpan = styled.span`
  display: block;
  font-size: 1.5rem;
  color: ${props => props.color};
`;

export { StyledSpan };
