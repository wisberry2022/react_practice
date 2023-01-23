import { useCallback, useReducer, useState } from 'react';

export const usePlus = (num) => {
  const [cnt, setPlus] = useState(num);

  const plusOne = useCallback(() => {
    setPlus(prev => prev += 1);
  }, [])

  return [cnt, plusOne];
}

export const useObject = (objData) => {
  const stateReducer = (state, action) => {
    switch (action.type) {
      case 'ADD':
        state.map(it => it['text'] = action.text)
      default:
        return state;
    }
  }

  const [data, dispatch] = useReducer(stateReducer, objData);

  console.log('useObject 실행!', objData);

  return [data, dispatch];
}

export const useInput = () => {
  const [list, setList] = useState([]);
  const [post, setPost] = useState({});

  const addPost = useCallback((e) => {
    const { name, value } = e.target;
    setPost(prev => (
      {
        ...prev,
        [name]: value,
      }
    ))
  }, [])

  const addList = useCallback((e, target) => {
    e.preventDefault();
    setList(prev => [...prev].concat(target))
  }, [])

  return [list, post, addPost, addList];
}