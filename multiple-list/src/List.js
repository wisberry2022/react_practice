import { useEffect, useState } from "react";
import Template from "./Template";
import './List.scss';
import { getData } from "./store/dataSlice";
import { useSelector, useDispatch } from 'react-redux';

const List = () => {
  const dispatch = useDispatch();
  const movieData = useSelector(state => {
    return state.data.data;
  })
  const [data, setData] = useState();
  const [totalList, setTotal] = useState(90);
  const key = '30272d24c992f238a595ec8a2f5064b2';
  const url = 'http://www.kobis.or.kr/kobisopenapi/webservice/rest/people/searchPeopleList.json';

  useEffect(() => {
    dispatch(getData({ key, url, totalList }));
  }, [])
  return (
    <div className="actor_list">
      <div className="container">
        <h2>
          영화인 목록
        </h2>
        {/* {console.log(`list.js inner:`, movieData)} */}
        {movieData ? <Template data={movieData} listCnt={totalList} setData={setData} /> : 'loading...'}
      </div>
    </div>
  )
}

export default List;