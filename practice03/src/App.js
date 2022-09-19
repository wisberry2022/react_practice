import axios from 'axios';
import { useState, useEffect } from 'react';
function App() {

  axios.get('http://localhost:8080/test').then((response) => {
    console.log(response);
  })

  return (
    <div className="App">
      hello
    </div>
  );
}

export default App;
