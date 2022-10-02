import { useSelector, useDispatch } from 'react-redux';
import { useRef } from 'react';
import { up, down } from './store/counterSlice';
import { ADD } from './store/inputSlice';
import Test from './Test';

const Counter = () => {
  const count = useSelector(state => { return state.counter.value });
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => (
        dispatch(up(2))
      )}>+</button>
      <button onClick={() => (
        dispatch(down(1))
      )}>-</button>
      {count}
    </div >
  )
}

const InputBox = () => {
  const dispatch = useDispatch();
  const iRef = useRef();
  const iData = useSelector(state => state.input.users);
  const submitHandle = (e) => {
    e.preventDefault();
    dispatch(ADD(iRef.current.value));
  }

  return (
    <div>
      {console.log('App.js inner:', iData)}
      <form onSubmit={(e) => (submitHandle(e))}>
        <input type="text" ref={iRef} />
        <button type="submit">등록</button>
      </form>
      <ul>
        {iData.map((it, idx) => {
          return (
            <li key={idx}>{it}</li>
          )
        })}
      </ul>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Counter />
      <InputBox />
      <Test />
    </div>
  );
}

export default App;
