import axios from 'axios';

function App() {
  const key = 'KcPvvyVEaqORzpTkpeX8%2Bk36SeU1KPEAdUK7gVD%2BKt6hYBONhpq0ZQ8NcPEQR6O%2FuYEdi4c030PNJp5TL66XLw%3D%3D';
  axios.get(`http://data.humetro.busan.kr/voc/api/open_api_process.tnn?serviceKey=${key}&day=1&updown=1&stime=1331&enum=5&act=json&scode=101`)
    .then((res) => { console.log(res) })

  return (
    <div className="App">

    </div>
  );
}

export default App;
