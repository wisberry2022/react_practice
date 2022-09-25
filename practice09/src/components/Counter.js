import CounterPage from '../pages/CounterPage';
import { useSelector, useDispatch } from 'react-redux';
import { numberUp, numberDown } from '../store/modules/counterReducer';

const Counter = () => {
  // useSelector의 state => store.getState()와 동일한 결과를 출력한다.
  const number = useSelector(state => state);

  const dispatch = useDispatch();

  const increase = () => dispatch(numberUp());
  const decrease = () => dispatch(numberDown());
  return (
    <>
      {console.log(number)}
      <CounterPage
        state={number}
        numberUp={increase}
        numberDown={decrease}
      />
    </>
  )
}

export default Counter;