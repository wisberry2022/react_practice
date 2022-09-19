import axios from 'axios';
import { useState, useEffect } from 'react';
function App() {

  const key = 'KcPvvyVEaqORzpTkpeX8%2Bk36SeU1KPEAdUK7gVD%2BKt6hYBONhpq0ZQ8NcPEQR6O%2FuYEdi4c030PNJp5TL66XLw%3D%3D';

  axios.get(`/test`)
    .then((res) => {
      console.log(res);

    })

  return (
    <div className="App">
      hello
    </div>
  );
}

export default App;
