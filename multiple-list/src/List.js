import { useEffect, useState } from "react";
import axios from 'axios';
import Template from "./Template";
import './List.scss';
// import { getData } from "./store/getReducer";
// import { useSelector, useDispatch } from 'react-redux';


const List = () => {
  const [data, setData] = useState();
  const [totalList, setTotal] = useState(90);
  const key = '30272d24c992f238a595ec8a2f5064b2';
  const url = 'http://www.kobis.or.kr/kobisopenapi/webservice/rest/people/searchPeopleList.json';

  // const dispatch = useDispatch();
  // const GET = (url, key, totalList) => (dispatch(getData(url, key, totalList)));
  // const pil = useSelector(state => state.getReducer);

  useEffect(() => {
    // GET(url, key, totalList);
    axios.get(url + `?key=${key}&itemPerPage=${totalList}`)
      .then((res) => (res.data.peopleListResult.peopleList))
      .then((res) => res.map((it, idx) => {
        return {
          id: idx,
          name: it.peopleNm,
          role: it.repRoleNm,
          filmo: it.filmoNames.split('|'),
        }
      }))
      .then((res) => (setData(res)))
  }, [])
  return (
    <div className="actor_list">
      <div className="container">
        <h2>
          영화인 목록
        </h2>
        {data ? <Template data={data} listCnt={totalList} setData={setData} /> : 'loading...'}
      </div>
    </div>
  )
}

export default List;