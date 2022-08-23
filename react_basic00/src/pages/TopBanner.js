import { useState } from "react";
import { BsFillQuestionOctagonFill } from "react-icons/bs";

const TopBanner = () => {
  // 1. 아이콘을 클릭한다
  // 2. 아이콘을 클릭하면 TopBanner에 class "on" 을 붙인다
  // 3. 변수를 만들어서 true / false 되는 스위치를 만들고 
  // 4. true / false에 따라서 class "on" 을 붙인다 / 뗀다

  const [bool, setBool] = useState(false);

  return (
    <>
      <div className={`TopBanner ${bool ? 'on' : ''}`}>
        <h2>Lorem ipsum dolor sit. </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br />
          Nostrum beatae, nemo odit sunt asperiores et.
        </p>
        <a href="#!" onClick={
          (e) => {
            e.preventDefault();
          }
        }>MORE</a>
      </div>
      <div onClick={() => {
        setBool(!bool)
      }} className={bool ? 'btn on' : 'btn'}>
        <BsFillQuestionOctagonFill />
      </div>
    </>
  )
}

export default TopBanner;