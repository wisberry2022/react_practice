import axios from 'axios'
import { forwardRef, useRef, useState } from 'react';

const FormBox = forwardRef((props, ref) => {
  const { type, placeholder } = props;

  return (
    <div>
      <input type={`${type}`} name={`${placeholder}`} placeholder={`${placeholder}을 입력하세요!`} ref={ref} required />
    </div>
  )
})


const Test = () => {
  const nameRef = useRef();
  const commentRef = useRef();
  const [customInfo, setInfo] = useState({});

  const formHandling = (e) => {
    e.preventDefault();
    axios.post('/addComment', {
      name: customInfo['이름'],
      comment: customInfo['댓글'],
    })
    setInfo({});
  }

  const addInfo = () => {
    setInfo(
      {
        [nameRef.current.name]: nameRef.current.value,
        [commentRef.current.name]: commentRef.current.value,
      }
    )
  }

  return (
    <div>
      <div>
        <form onSubmit={(e) => (formHandling(e))}>
          <FormBox type={"text"} placeholder={"이름"} ref={nameRef} setInfo={setInfo} />
          <FormBox type={"text"} placeholder={"댓글"} ref={commentRef} />
          <button type="submit" onClick={() => (addInfo())}>제출</button>
          {console.log(customInfo)}
        </form>
      </div>
    </div>
  )
}

export default Test;