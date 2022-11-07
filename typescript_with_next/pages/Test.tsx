import { listData } from "../interfacez/Interface";
import { Console, checkListData } from "../funcSet/FuncSet";

const Test = () => {
  // generic
  let dataList: Array<listData> = [
    { id: 1, title: '첫번째 데이터' },
    { id: 2, title: '두번째 데이터' },
    { id: 3, title: '세번째 데이터' },
    { id: 4, title: '네번째 데이터' },
  ]

  Console(dataList);
  let result = checkListData(dataList);
  console.log(result);

  let strArr: Array<string> = ['hello', 'world'];
  console.log(strArr);

  return (
    <div>
      {dataList.map(it =>
        <div key={it.id}>{it.title}</div>
      )}
    </div>
  )
}

export default Test;