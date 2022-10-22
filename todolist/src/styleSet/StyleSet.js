import styled from 'styled-components';

export const Section = styled.section`
  padding: 5rem 0;
`

export const Div = styled.div`
  outline: ${props => props.outline ? '0.1rem solid #000' : 'none'};
  padding: 2rem;
`

export const RowFlexBox = styled.div`
  display: flex;
  justify-content: ${props => props.row || 'flex-start'};
  gap: ${props => props.gap || '.5rem'};
`;

export const ColFlexBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: ${props => props.col || 'flex-start'};
  align-items: center;
  gap: ${props => props.gap || '.5rem'};
`

export const Button = styled.button`
  border: none;
  padding: .5rem 1rem;
  font-size: 1.5rem;
  background-color: #ddd;
  cursor: pointer;
`

export const ColFlexUl = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: ${props => props.col || 'flex-start'};
  gap: ${props => props.gap || '.5rem'};
`

export const RowFlexLI = styled.li`
  display: flex;
  justify-content: ${props => props.row || 'flex-start'};
  gap: ${props => props.gap || '.5rem'};
  border-radius: 1.5rem;
  padding: 5rem 2rem;
  width: 100rem;
  font-size: 1.5rem;
  background-color: #f9f9f9;
`;