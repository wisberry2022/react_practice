import React, { useState } from "react";

const TypeStudy = () => {
  // type 지정자와 union type
  type Basic = string | number;

  const [days, setDay] = useState(null);

  // interface 지정자
  interface customObj {
    [key: string]: Basic;
  }


  const dataObj: customObj = {
    id: 1,
    title: 'hello',
  }

  const dataList: customObj[] = [
    { id: 1, title: 'hello' },
    { id: 2, title: 'good' },
    { id: 3, title: 'bye' },
  ]

  const data: Basic = 'hello_World';
  const data2: Basic = 3;
  const daysList: Array<string> = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'TRE'];

  // typescript로 이벤트 붙이기
  // const daysFunc: (x: React.SyntheticEvent) => void =
  //   (e: React.SyntheticEvent): void => {
  //     setDay(e.target.innerText);
  //   }

  const daysFunc: (x: Event) => void =
    (e: Event): void => {
      setDay(e.target.innerText);
    }

  return (
    <div>
      <ul className="daysList">
        {daysList.map((it, idx) =>
          <li key={idx}>
            <button onClick={daysFunc}>{it}</button>
          </li>
        )}
      </ul>
      <strong>{days}</strong>
    </div>
  )
}

export default TypeStudy;