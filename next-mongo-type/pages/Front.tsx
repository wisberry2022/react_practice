import axios from 'axios';
import React, { useEffect, useRef } from 'react';

const Front = () => {
  const data = useRef<HTMLInputElement>(null);

  const submitServer = (target: string): void => {
    console.log(target)
    axios.get('/api/hello', {
      params: {
        name: target,
        age: 30,
        gender: 'female',
      }
    })
  }

  return (
    <div>
      <input type="text" placeholder="아무거나 입력해보세요!" ref={data} />
      <button type="button" onClick={() => (submitServer(data.current.value))}>확인</button>
    </div>
  )
}

export default Front;