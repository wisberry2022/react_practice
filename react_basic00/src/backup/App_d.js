import TopBanner from '../pages/TopBanner.js';
import List from '../pages/List.js';
import MainVisual from '../pages/MainVisual.js';
import './basic.css';
import { useEffect, useState } from 'react';


const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => setData(json))
  }, [])

  return (
    <ul>
      {data.map(it => <li key={it.id}>
        {it.id} {it.title}
      </li>).slice(0, 10)}
    </ul>
  )
}

export default App;