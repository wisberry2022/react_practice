import { useState } from 'react';
import Test from '../list.js';
const App = () => {
  const [num, setNum] = useState(1);
  const numHandler = () => (setNum(num + 1))
  return (
    <>
      <h1>{num}</h1>
      {/* <button onClick={numHandler}>num  plus</button> */}
      <Test list='우영우' name="lawyer" age={29} onClick={numHandler} />
      <Test list='박새로이' name="chef" age={26} onClick={numHandler} />
      <Test list='서강준' name="actor" age={29} />
      <Test list='엄정화' name="singer" age={34} />
      <div>{num}</div>
      <div>02</div>
    </>
  )
}

export default App;