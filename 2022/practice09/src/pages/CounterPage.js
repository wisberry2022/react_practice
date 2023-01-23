const CounterPage = ({ state, numberUp, numberDown }) => {

  return (
    <div className="btnBox">
      <button onClick={numberUp}>UP</button>
      <button onClick={numberDown}>DOWN</button>
      <h1>{state}</h1>
    </div>
  )
}

export default CounterPage;