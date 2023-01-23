import React from 'react';
// state와 dispatch를 위한 redux-hook을 임포트해야 한다
import { useSelector, useDispatch } from 'react-redux';
// Counter.js에서 사용할 리듀서를 임포트해야 한다
import Counter from '../components/Counter';
// 액션 생성 함수들을 임포트해야 한다
import { increase, decrease, setDiff } from '../store/modules/counter';

// useSelector : 리덕스 스토어의 상태를 조회하는 Hook
// state의 값은 store.getState() 함수를 호출했을 때 나타나는 결과물과 동일하다
const CounterContainer = () => {
  const { number, diff } = useSelector(state => (
    {
      number: state.counter.number,
      diff: state.counter.diff
    }
  ));

  // useDispatch는 리덕스 스토어의 dispatch를 함수에서 사용할 수 있게 해주는 Hook
  const dispatch = useDispatch();

  // 액션들을 디스패치 하는 함수 생성
  const onIncrease = () => dispatch(increase());
  const onDecrease = () => dispatch(decrease());
  const onSetDiff = diff => dispatch(setDiff(diff));

  return (
    <Counter
      number={number}
      diff={diff}
      onIncrease={onIncrease}
      onDecrease={onDecrease}
      onSetdiff={onSetDiff}
    />
  )
};

export default CounterContainer;