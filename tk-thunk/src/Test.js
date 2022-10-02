import { useDispatch, useSelector } from 'react-redux';
import { up } from './store/counterSlice';
import { asyncUpFetch } from './store/counterSlice';

const Test = () => {
  const dispatch = useDispatch();
  const count = useSelector(state => {
    return state.counter.value;
  });
  const status = useSelector(state => {
    return state.counter.status;
  })
  return (
    <div>
      <button onClick={() => (dispatch(up(2)))}>+</button>
      <button onClick={() => (dispatch(asyncUpFetch()))}>+ async fetch</button>

      <div>{count} | {status}</div>
    </div>
  )
}

export default Test;