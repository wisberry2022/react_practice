const DATA = [
  { id: 1, name: '이창훈', age: 49, sleep: true },
  { id: 2, name: '박지윤', age: 31, sleep: true },
  { id: 3, name: '김현철', age: 43, sleep: false },
]

const detail = () => {
  return (
    <h2>DATA[0].title</h2>
  )
}

const List = () => {
  return (
    <ul>
      {
        DATA.map(it => <li key={it.id}>{it.name} {it.age} {it.sleep ? "sleeping" : "playing"}</li>)
      }
    </ul>
  )
}

export default List;