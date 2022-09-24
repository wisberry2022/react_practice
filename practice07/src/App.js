import React, { useReducer, useRef } from 'react';


const initialState = {
  new: {
    id: '',
    name: '',
    age: '',
  },
  user: [{
    id: 1,
    name: 'ji-yoon',
    age: 25
  },
  {
    id: 2,
    name: 'tae-ji',
    age: 28
  },
  {
    id: 3,
    name: 'jeong-hwa',
    age: 31
  }]
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'INPUT_DATA':
      return {
        ...state,
        user: [
          ...state.user,
          {
            id: 3,
            name: action.name,
            age: action.age
          }
        ]
      }
    case 'DELETE_DATA':
      return {
        ...state,
        user: state.user.filter((it, idx, arr) => (idx < arr.length - 1))
      }
    default:
      return state;
  }
}

function App() {
  const [data, dispatch] = useReducer(reducer, initialState);
  const { name, age } = data.new;
  const nameRef = useRef(null);
  const ageRef = useRef(null);

  const addData = (name, age) => {
    console.log(name, age);
    dispatch({
      type: 'INPUT_DATA',
      name,
      age
    })
  }

  const deleteData = () => {
    dispatch({ type: 'DELETE_DATA' })
  }

  return (
    <div className="App">
      {console.log(data)}
      <label htmlFor="name">이름</label>
      <input type="text" name="name" ref={nameRef} required />
      <label htmlFor="age">나이</label>
      <input type="text" name="age" ref={ageRef} required />
      <button onClick={() => (addData(nameRef.current.value, ageRef.current.value))}>CLICK</button>
      <button onClick={() => (deleteData())}>삭제</button>
      <ul className="user_list">
        {data.user.map((it, idx) => {
          return (
            <li key={idx}>
              <strong>{it.id}</strong>
              <span>{it.name}</span>
              <span>{it.age}</span>
            </li>
          )
        })}
      </ul>
    </div>
  );
}

export default App;
