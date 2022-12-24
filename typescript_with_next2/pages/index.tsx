import { objData, funcType } from "../typeset/varType";
import { useState } from "react";
import Link from "next/link";

const Home = () => {
  const [uidx, setIdx] = useState<number>(0);
  const [bools, setBool] = useState<boolean[]>([true, false, false, false]);
  const dataList: objData[] = [
    { id: 1, contents: "M E N U 1", cpn: <FirstMenu /> },
    { id: 2, contents: "M E N U 2", cpn: <SecondMenu /> },
    { id: 3, contents: "M E N U 3", cpn: <ThirdMenu /> },
    { id: 4, contents: "M E N U 4", cpn: <FourthMenu /> },
  ];

  const selectMenu: funcType = (idx: number): void => {
    setBool(prev => prev.map((_, id) => { return id === idx ? true : false }));
  }

  return (
    <section className="container">
      <div className="top">
        <h1>Title</h1>
        <nav className="gnb">
          <ul>
            {dataList.map((it, idx) => {
              return (
                <li key={it.id} onClick={() => { selectMenu(idx), setIdx(idx) }} className={uidx === idx ? "on" : ""}>
                  <Link href="">
                    {it.contents}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
      <div className="bottom">
        {dataList.map((it, idx) => {
          return (
            bools[idx] ?
              it.cpn
              :
              null
          )
        })}
      </div>
    </section>
  )
}

const FirstMenu = () => {
  return (
    <div className="contents">
      <div className="topBox">
        <h3>SubTitle</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga in blanditiis qui? Esse vitae earum debitis quam dolore culpa numquam, repudiandae eaque reprehenderit nihil doloremque laboriosam, dolores, praesentium saepe ipsa repellat iure quos ipsam. Quas fugiat totam ducimus illo a laborum sunt ea beatae aliquid dolor est, ratione eveniet ex?
        </p>
      </div>
      <div className="bottomBox">
        <div className="imgBox">
          {Array.from({ length: 4 }, (v, k) => k + 1).map((it) => {
            return (
              <figure key={it} className={`bg_set itm0${it}`}></figure>
            )
          })}
        </div>
      </div>
    </div>
  )
}

const SecondMenu = () => {
  return (
    <div className="contents">
      hello2
    </div>
  )
}

const ThirdMenu = () => {
  return (
    <div className="contents">
      hello3
    </div>
  )
}

const FourthMenu = () => {
  return (
    <div className="contents">
      hello4
    </div>
  )
}

export default Home;
