import { listData } from "../interfacez/Interface";
import { totalSum } from "../funcSet/FuncSet";
import { useState } from "react";

const Test = () => {
  const [arr, setArr] = useState([0, 0, 0])
  const [result, setResult] = useState(0);
  // generic
  let dataList: Array<listData> = [
    { id: 1, title: '첫번째 인덱스' },
    { id: 2, title: '두번째 인덱스' },
    { id: 3, title: '세번째 인덱스' },
  ]

  const increase = (id: number): void => {
    setArr(prev => prev.map((it, idx) => id - 1 === idx ? it + 1 : it))
  }

  const decrease = (id: number): void => {
    setArr(prev => prev.map((it, idx) => id - 1 === idx ? it - 1 : it))
  }

  return (
    <>
      <div className="greatBox">
        {dataList.map(it =>
          <div key={it.id} className="innerBox">
            <h3>{it.title}</h3>
            <div className="btnBox">
              <button onClick={() => increase(it.id)}>+1</button>
              <button onClick={() => decrease(it.id)}>-1</button>
            </div>
            <strong className="indexMonitor">{arr[it.id - 1]}</strong>
          </div>
        )}
      </div>
      <div className="lastBtn">
        <strong>합산하기</strong>
        <button onClick={() => setResult(totalSum(arr))}>SUM</button>
      </div>
      <div className="totalNum">{result}</div>
    </>
  )
}

export default Test;