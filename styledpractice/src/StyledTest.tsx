import Test from "./Test";
import styled from "styled-components";

const StyledInput = styled(Test) <{ font?: string }>`
  border: .1rem solid #eee;
  font: ${props => props?.font ? props.font : "1.5rem"}
`

export { StyledInput };