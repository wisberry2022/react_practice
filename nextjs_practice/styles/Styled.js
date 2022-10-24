import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Section = styled.section`
  padding: 10rem 0;
`;

export const CustomDiv = styled.div`
  outline: none;
`;

export const defaultContainer = styled.div`
  outline: 1px solid #000;
  display: ${props => props.flex || 'block'};
  justify-content: ${props => props.justifyContent || 'flex-start'};
  gap: ${props => props.gap || '1.5rem'};
  margin: 0 auto;
  width: 1200px;
`

export const Navigation = styled.nav`
  display: flex;
  gap: 2.5rem;
`

export const RowFlexUl = styled.ul`
  display: flex;
  justify-content: ${props => props.align || 'flex-start'};
  gap: ${props => props.gap || '1.5rem'};
`;