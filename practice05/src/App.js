import axios from 'axios';
import { useState } from 'react';


function App() {

  const [data, setData] = useState(0)

  const getData = () => {
    axios.get('/test', {
      params: {
        id: 123,
        name: 'park-jiyoon'
      }
    })
      .then((res) => { setData(res) })
  }

  return (
    <div className="App">
      <button onClick={() => (getData())}>CLICK</button>
      <strong>{console.log(data)}</strong>
    </div>
  );
}

export default App;
