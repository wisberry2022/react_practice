import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { SEARCH } from "./store/dataSlice";

const Search = ({ data, setData }) => {
  const searchTarget = useRef();
  const dispatch = useDispatch();
  const submitEvent = (e) => {
    const keyWord = searchTarget.current.value;
    e.preventDefault();
    dispatch(SEARCH(keyWord));
  }

  return (
    <div className="searchBox">
      <form onSubmit={(e) => (submitEvent(e))}>
        <input type="search" placeholder="이름으로 검색해보세요!" ref={searchTarget} required />
        <button type="submit">검색</button>
      </form>
    </div>
  )
}

const TableList = ({ listCnt, pageArr, setPage }) => {
  const listNum = Array.from({ length: (listCnt / 10) - 1 }, (v, k) => k + 1);
  return (
    <ul className="list">
      {listNum.map((it, idx) => {
        return (
          <li key={it} onClick={() => (setPage([0, 10].map(its => { return it === 1 ? its : its + (it * 10) })))}>
            {it}
          </li>
        )
      })}
    </ul>
  )
}

const Template = ({ data, listCnt, setData }) => {
  const theadList = ['영화인 코드', '이름', '주역할', '필모그래피'];
  const [pageArr, setPage] = useState([0, 10]);

  return (
    <div className="tableBoard">
      <Search data={data} setData={setData} />
      <table>
        <thead>
          <tr>
            {theadList.map((it, idx) => {
              return (
                <th key={idx}>
                  {it}
                </th>
              )
            })}
          </tr>
        </thead>
        <tbody>
          {data.map((it, idx) => {
            return (
              <tr key={it.id}>
                <th>{it.id}</th>
                <th>{it.name}</th>
                <th>{it.role}</th>
                <th>
                  <ul className="filmoList">
                    {it.filmo.map((its, id) => {
                      return (
                        <li key={id}>{its}</li>
                      )
                    }).slice(0, 3)}
                  </ul>
                </th>
              </tr>
            )
          }).slice(pageArr[0], pageArr[1])}
        </tbody>
      </table>
      <TableList listCnt={listCnt} pageArr={pageArr} setPage={setPage} />

    </div>
  )
}

export default Template;