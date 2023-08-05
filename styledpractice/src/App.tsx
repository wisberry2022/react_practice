import React, { forwardRef, useRef } from 'react';
import Test from './Test';
import { StyledInput } from './StyledTest';

interface TestRefInputProps {
  font?: string;
}

const TestRefInput = forwardRef<HTMLInputElement, { font?: string }>((props, ref) => {
  const { font } = props;
  return <StyledInput ref={ref} font={font} />
});


const TestInput = forwardRef<HTMLInputElement>((props, ref) => {
  return <Test ref={ref} />
})

function App() {
  const testRef = useRef<HTMLInputElement>(null);
  return (
    <div className="App">
      <TestRefInput font="1.5rem" ref={testRef} />
      <button onClick={() => { console.log(testRef.current) }}>확인</button>
    </div>
  );
}

export default App;
