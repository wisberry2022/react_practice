import { useEffect, useState } from 'react';
import * as Styled from './Styled';
import styled from 'styled-components';

const OnBackgroundDiv = styled(Styled.GreatDiv)`
  background-color: ${props => props.bgColor || '#f9f9f9'};  
`;

const App = () => {
  const [num, setNum] = useState(0);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      setNum(window.scrollY);
    });

    return () => {
      window.removeEventListener('scroll', () => {
        setNum(window.scrollY);
      });
    }
  }, [])

  return (
    <OnBackgroundDiv bgColor={'#ddd'}>
      <Styled.StickyDiv size={`${num}px`}>
        hd
      </Styled.StickyDiv>
    </OnBackgroundDiv>
  );
}

export default App;
