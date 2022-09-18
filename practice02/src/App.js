import { useEffect, useRef, useState } from "react";




const App = () => {
  // const [bool, setBool] = useState(false);
  const [local, setLocal] = useState(0);
  const [info, setInfo] = useState([]);
  const key = 'KcPvvyVEaqORzpTkpeX8%2Bk36SeU1KPEAdUK7gVD%2BKt6hYBONhpq0ZQ8NcPEQR6O%2FuYEdi4c030PNJp5TL66XLw%3D%3D';

  const optionEvent = (e) => {
    setLocal(e.target.value);
  }

  useEffect(() => {
    fetch(`http://apis.data.go.kr/1360000/WthrWrnInfoService/getWthrInfo?serviceKey=${key}&numOfRows=3&pageNo=1&stnId=${local}&dataType=JSON&fromTmFc=20220915&toTmFc=20220917`)
      .then(async (response) => {
        let js = await response.json();
        return js['response']['body']['items']['item'];
      })
      .then((data) => {
        setInfo(data);
      })
  }, [local])

  return (
    <section className="weather">
      <h2>기상정보문 확인</h2>
      {console.log(info)}
      <select onChange={(e) => (optionEvent(e))}>
        <option value="">지역</option>
        <option value="159">부산</option>
        <option value="109">서울</option>
      </select>
      {local ? info.map((it, idx) => {
        return (
          <li key={idx}>{it.t1.split('\n')}</li>
        )
      }) : false}
    </section>
  );
}

export default App;