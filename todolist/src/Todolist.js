import { useState, useRef, useEffect } from 'react';
import * as Custom from './styleSet/StyleSet';
import './Todolist.scss';

const TemplateList = ({ todos, setTodo }) => {
  const isObject = (todos) => {
    return typeof todos === 'object' && todos.length === undefined;
  }

  const deleteList = (currentNum) => {
    console.log(currentNum);
    setTodo(
      prev => (
        prev.filter(it => { return it.id !== currentNum }).map((its, idx) => ({ ...its, 'id': idx + 1 }))
      )
    )
  }

  return (
    isObject(todos) ?
      <Custom.RowFlexLI row={'space-between'} gap={'2.5rem'}>
        <Custom.RowFlexBox gap={'3.5rem'} row={'flex-start'} className="todoSet">
          <span>{todos.id}</span>
          <h3>{todos.title}</h3>
          <strong>{todos.todo}</strong>
        </Custom.RowFlexBox>
        <Custom.RowFlexBox gap={'1.5rem'} className="btnBox">
          <Custom.Button>수정</Custom.Button>
          <Custom.Button onClick={() => (deleteList(todos.id))}>삭제</Custom.Button>
        </Custom.RowFlexBox>
      </Custom.RowFlexLI>
      :
      <li>
        <Custom.Div>
          아무것도 등록되어있지 않습니다!
        </Custom.Div>
      </li>
  )
}

const Todolist = () => {
  const id = useRef(1);
  const [todo, setTodo] = useState([]);
  const [post, setPost] = useState({
    id: id.current,
    title: '',
    todo: '',
  });

  useEffect(() => {
    if (todo.length === 0) {
      console.log('todo의 길이가 0!');
      id.current = 1;
      setPost(prev => ({
        ...prev,
        id: id.current,
      }))
    }
  }, [todo])

  const addTitle = (e) => {
    const { name, value } = e.target;
    setPost(prev => (
      {
        ...prev,
        [name]: value,
      }
    ))
  }

  const addTodo = (e) => {
    const { name, value } = e.target;
    setPost(prev => (
      {
        ...prev,
        [name]: value,
      }
    ))
  }

  const addPost = () => {
    id.current += 1;
    setPost(prev => (
      {
        ...prev,
        id: id.current,
      }
    ))
    setTodo(prev => (prev.concat(post)));
  }

  return (
    <Custom.Section>
      {console.log('Todolist 컴포넌트', todo)}
      <Custom.RowFlexBox row={'center'} gap={'1.5rem'} className="borderBottom paddingBottom">
        <Custom.RowFlexBox row={'center'} gap={'1rem'}>
          <input type="text" placeholder="제목을 입력하세요!" name="title" onChange={addTitle} />
          <input type="text" placeholder="할 일을 입력하세요!" name="todo" onChange={addTodo} />
        </Custom.RowFlexBox>
        <Custom.Button onClick={() => (addPost())}>등록</Custom.Button>
      </Custom.RowFlexBox>
      <Custom.Div>
        <Custom.ColFlexUl gap={'2.5rem'}>
          {
            todo.length !== 0 ?
              todo.map((it, idx) => {
                return <TemplateList key={idx} todos={it} setTodo={setTodo} />
              }) :
              <Custom.Div>아무것도 등록되어있지 않습니다!</Custom.Div>
          }
        </Custom.ColFlexUl>
      </Custom.Div>
    </Custom.Section>
  )
}

export default Todolist;