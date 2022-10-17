import { useState } from 'react';
import styled from 'styled-components';
import Button from './Button';
import { StyledBox, StyledH1, StyledStrong, StyledSpan } from './Styled';

let StyledDiv = styled.div`
border: 1px solid #f00;
padding: 2rem;
`
let StyledTitle = styled.h1`
  width: ${props => props.width};
  font-size: ${props => props.fontSize};
  color: ${props => props.color};
`;

let StyledList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 2.5rem;
  list-style-type: none;
`;

let StyledSubList = styled.li`
  padding: 0 1.5rem;
`;

let StyledBtn = styled.button`
  display: block;
  margin: 0 auto;
  font-size: 1.5rem;
`;

const App = () => {
  const [num, setNum] = useState(-1);

  const theadList = [
    { id: 1, title: 'Hello World!', width: '260px', fontSize: '35px', color: '#f00' },
    { id: 2, title: 'Hello Jungho!', width: '260px', fontSize: '35px', color: '#0f0' },
    { id: 3, title: 'Hello Jihoon!', width: '260px', fontSize: '35px', color: '#f0f' },
    { id: 4, title: 'Hello Smith!', width: '260px', fontSize: '35px', color: '#e41' },
    { id: 5, title: 'Hello Hoseok!', width: '260px', fontSize: '35px', color: '#f0f' },
  ]

  const paletteSet = [
    { id: 1, title: '파랑', color: '#00f' },
    { id: 2, title: '초록', color: '#0f0' },
    { id: 3, title: '빨강', color: '#f00' },
  ];

  const colorSet = ['#00f', '#0f0', '#f00'];

  return (
    <div className="App">
      <StyledDiv>
        {theadList.map(it => {
          return (
            <StyledTitle key={it.id} width={it.width} fontSize={it.fontSize} color={it.color}>{it.title}</StyledTitle>
          )
        })}
      </StyledDiv>
      <Button></Button>
      <StyledBox>
        <StyledH1 width={'300px'} color={'#f00'} align={false}>
          Hello WORLD!
        </StyledH1>
        <StyledStrong fontSize={'16px'}>안녕하세요 적당히 바람이 시원해</StyledStrong>
      </StyledBox>
      <StyledBox>
        {/* <StyledBtn onClick={() => (setNum(num + 1))}>색상 바꾸기</StyledBtn> */}
        <StyledList>
          {paletteSet.map((it, idx) => {
            return (
              <StyledBtn onClick={() => (setNum(idx))}>{it.title}</StyledBtn>
            )
          })}
        </StyledList>
        <StyledList>
          {paletteSet.map(it => {
            return (
              <StyledSubList>
                <StyledSpan color={colorSet[num]}>HELLO</StyledSpan>
              </StyledSubList>
            )
          })}
        </StyledList>
      </StyledBox>
    </div>
  );
}

export default App;
