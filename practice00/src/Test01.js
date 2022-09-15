import { useState } from "react";

const Test01 = () => {
  const [info, setInfo] = useState([1, 2, 3]);
  const [num, setNum] = useState(info[info.length - 1]);
  // const [num, setNum] = useState(0);

  const pushInfo = () => {
    setInfo((prevState) => (
      [...prevState, num]
    ))
  }

  return (
    <section className="test">
      <button onClick={() => (pushInfo())}>ADD</button>
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