import { usePlus, useObject, useInput } from "./usePlus";
import { useState } from 'react';

function App() {
  const data = [
    { id: 1, title: 'hello' },
    { id: 2, title: 'world' }
  ]
  const [num, plusOne] = usePlus(0);
  const [obj, dispatch] = useObject(data);
  const [list, post, addPost, addList] = useInput();

  return (
    <div className="App">
      {num}
      <button onClick={() => (plusOne())}>+</button>
      <button onClick={() => (dispatch({ type: 'ADD', text: 'test_add' }))}>리듀서 반환!</button>
      <form onSubmit={(e) => addList(e, post)}>
        <input type="text" name="userName" onChange={addPost} placeholder="이름을 입력하세요!" />
        <input type="password" name="pwd" onChange={addPost} placeholder="비밀번호를 입력하세요!" />
        <button type="submit">확인</button>
      </form>
      {console.log('App.js에서의 list', list)}
    </div>
  );
}

export default App;
