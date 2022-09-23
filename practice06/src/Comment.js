import { useState, useRef } from 'react';
import axios from 'axios';

const Monitor = ({ resultData }) => {
  return (
    <div className="monitorBox">
      <ol className="commentList">
        {resultData.map((it, id) => {
          return (
            <li key={id}>{it.data}</li>
          )
        })}
      </ol>
    </div>
  )
}

const Form = () => {
  const [data, setData] = useState([]);
  const IP = useRef();
  const [id, setId] = useState(1);

  const updateData = (comment) => {
    setData((prev) => (
      [...prev, { data: comment }]
    ))
  }

  const deleteData = (() => {
    setData(data.filter((it, idx, arr) => (idx < arr.length - 1)))
  })

  const toServer = (e) => {
    e.preventDefault();
    axios.get('/test', {
      params: {
        data: IP.current.value,
        id: id
      }
    })
    setId(id + 1);
  }

  return (
    <div className="formMonitor">
      <form onSubmit={(e) => (toServer(e))}>
        <input type="text" placeholder="댓글을 입력하세요" ref={IP} required />
        <button type="submit" onClick={() => (updateData(IP.current.value))}>등록</button>
        <button type="button" onClick={() => (deleteData())}>삭제</button>
      </form>
      {data.length >= 1 && <Monitor resultData={data} />}
    </div>
  )
}

const Comment = () => {
  return (
    <div className="formBox">
      <h3>댓글 등록</h3>
      <Form />
    </div>
  )
}

export default Comment;