import { useState } from "react";
import usePlus from "./useFetch";

function App() {
  const [num, plusOne] = usePlus(0);

  return (
    <div className="App">
      {num}
      <button onClick={() => (plusOne(num))}>+</button>
    </div>
  );
}

export default App;
