import axios from 'axios';
import { useState, useEffect } from 'react';
function App() {

  const key = '50aaa007-4790-4ac2-b113-2228b2aa393a';

  axios.get(`https://openapi.naver.com/v1/search/movie.json`, {
    headers: {
      "X-Naver-Client-Id": 'sp4_5CZOPaDaXu10QRQ_',
      "X-Naver-Client-Secret": 'qTyZjcU3vX'
    }
  })
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
