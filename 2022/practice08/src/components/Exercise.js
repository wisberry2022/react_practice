import { legacy_createStore as createStore } from "redux";

// 초기상태값
const initialState = {
  counter: 0,
  text: '',
  list: []
};

// 액션타입 정의
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';
const CHANGE_TEXT = 'CHANGE_TEXT';
const ADD_TO_LIST = 'ADD_TO_LIST';

// 액션생성함수
const increase = () => {
  return {
    type: INCREASE
  };
}

const decrease = () => {
  return {
    type: DECREASE
  };
}

const changeText = text => {
  return {
    type: CHANGE_TEXT,
    text
  };
}

const addToList = item => {
  return {
    type: ADD_TO_LIST,
    item
  };
}

// 리듀서 함수

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREASE:
      return {
        ...state,
        counter: state.counter + 1
      };
    case DECREASE:
      return {
        ...state,
        counter: state.counter - 1
      };
    case CHANGE_TEXT:
      return {
        ...state,
        text: action.text
      }
    case ADD_TO_LIST:
      return {
        ...state,
        list: state.list.concat(action.item)
      }
    default:
      return state;
  }
}

// 스토어 만들기
const Exercise = () => {

  const store = createStore(reducer);

  // 스토어 상태 조회
  console.log(store.getState());

  // 스토어 내부 상태가 바뀔 때마다 호출되는 함수
  const listener = () => {
    const state = store.getState();
    console.log(state);
  }

  // 구독해제시 호출하는 변수
  const unsubscribe = store.subscribe(listener);

  store.dispatch(increase());
  store.dispatch(decrease());
  store.dispatch(changeText('안녕하세요'));
  store.dispatch(addToList({ id: 1, text: '와우' }));


  return (
    <div>
      {console.log(store)}
    </div>
  )
}

export default Exercise;