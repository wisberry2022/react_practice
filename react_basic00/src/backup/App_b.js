import { useState } from "react";
import './basic.css';

const App = () => {
  let [num, setNum] = useState(1);
  const [Toggle, setToggle] = useState(true);

  const Test = () => {
    return (
      <div>
        hello
      </div>
    )
  }

  return (
    <>
      {num}
      <section className={Toggle ? '' : 'on'}>
        {Toggle ? 'loading...' : <Test />}
      </section>
      <div>000</div>
      <button onClick={
        () => (
          setNum(num + 1),
          console.log(Toggle),
          setToggle(!Toggle),
          console.log(Toggle)
        )
      }>Click</button>

    </>
  )

}



export default App;