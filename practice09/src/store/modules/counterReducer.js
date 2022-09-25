const UP = 'UP';
const DOWN = 'DOWN';

export const numberUp = () => ({ type: UP });
export const numberDown = () => ({ type: DOWN });

const initialState = 0;

export default function Reducer(state = initialState, action) {
  switch (action.type) {
    case 'UP':
      return state + 1;
    case 'DOWN':
      return state - 1;
    default:
      return state;
  }
}