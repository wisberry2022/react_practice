/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react';
import { listData, anyListData, NorS } from "../interfacez/Interface";
import { totalSum, padLeft } from "../funcSet/FuncSet";
import { useState } from "react";

const Test = () => {
  const [arr, setArr] = useState([0, 0, 0])
  const [result, setResult] = useState(0);
  const [bool, setBool] = useState(false);
  // generic
  let dataList: Array<listData> = [
    { id: 1, title: '첫번째 인덱스' },
    { id: 2, title: '두번째 인덱스' },
    { id: 3, title: '세번째 인덱스' },
  ]

  let anyList: Array<anyListData> = [
    { id: 1, title: 'hi' },
    { id: 2, title: 'hello' },
    { id: 3, title: 'bye' },
  ]

  const dataId: NorS = 10;

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
      <button type="button" onClick={() => (setBool(prev => !prev))}>padLeft</button>
      {bool ? padLeft('Hello World', 30, 'h1') : null}
      {anyList.map(it => <div key={it.id}>{it.title}</div>)}
    </>
  )
}

export default Test;