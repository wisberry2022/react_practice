import { useEffect, useRef, useState } from 'react';

const stylez = {
  marginRight: '10px'
}

const labelStylez = {
  marginRight: '3px'
}

const ipStylez = {
  marginRight: '15px',
  width: '50px'
}

function App() {
  const [user, setUser] = useState([
    { userId: 1, userName: 'JIHOON', userContent: '안녕하세요' },
    { userId: 2, userName: 'EUNJEONG', userContent: '안녕히 가세요' },
    { userId: 3, userName: 'YOONJU', userContent: '반갑습니다 잘 부탁드립니다~ ^^' }
  ])
  let [data, setData] = useState({});
  const id_ref = useRef(null)

  useEffect(() => {
    id_ref.current = user[user.length - 1].userId + 1;
    setData({
      'userId': id_ref.current
    })
  }, [user]);

  const nameValue = (e) => {
    const { value, name } = e.target;
    setData(
      {
        ...data,
        [name]: value
      }
    )
  }

  const contentsValue = (e) => {
    const { value, name } = e.target;
    setData({
      ...data,
      [name]: value
    })
  }

  const addData = () => {
    setUser(prev => (
      [
        ...prev,
        data
      ]
    ));
  }

  const deleteData = () => {
    console.log('hello');
  }

  return (
    <div className="App">
      <label htmlFor="name" style={labelStylez}>이름</label>
      <input type="text" name="userName" style={ipStylez} id="name" onChange={(e) => (nameValue(e))} />
      <label htmlFor="contents" style={labelStylez}>내용</label>
      <input type="text" name="userContent" style={stylez} id="contents" onChange={(e) => (contentsValue(e))} />
      <button onClick={() => (addData())}>ADD</button>
      <button onClick={() => (deleteData())}>DELETE</button>
      {console.log(data)}
      <ul className="user_list">
        {
          user.map((el, idx) => {
            return (
              <li key={idx}>
                <span style={stylez}>{el.userId}</span>
                <strong style={stylez}>{el.userName}</strong>
                <strong style={stylez}>{el.userContent}</strong>
              </li>
            )
          })
        }
      </ul>
    </div>
  );
}

export default App;
