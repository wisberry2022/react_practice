import { legacy_createStore as createStore } from 'redux';


const value = 1;

const PLUS = 'PLUS';
const MINUS = 'MINUS';


const reducer = (state = value, action) => {
  switch (action.type) {
    case 'PLUS':
      return state += 1;
    case 'MINUS':
      return state -= 1;
    default:
      return state;
  }
}


const store = createStore(reducer);

export default store;