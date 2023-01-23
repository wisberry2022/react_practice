import { useState } from "react";

const Test01 = () => {
  const [info, setInfo] = useState([1, 2, 3]);
  const [num, setNum] = useState(4);

  const pushInfo = () => {
    setNum(num + 1);
    setInfo((prevState) => (
      [...prevState, num]
    ))
  }

  const deleteInfo = () => {
    setInfo(info.filter((it, idx, arr) => idx < arr.length - 1));
    setNum(info[info.length - 1]);
    console.log(info);
  }

  return (
    <section className="test">
      <button onClick={() => (pushInfo())}>ADD</button>
      <button onClick={() => (deleteInfo())}>DELETE</button>
      <ul>
        {info.map((el, idx) => {
          return (
            <li key={idx}>{el}</li>
          )
        })}
      </ul>
    </section >
  )
}

export default Test01;