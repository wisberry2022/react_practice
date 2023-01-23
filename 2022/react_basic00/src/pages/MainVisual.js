import { useRef } from 'react';
import MainSlider from 'react-slick';
import "slick-carousel/slick/slick.css";
const MainVisual = () => {
  const Settings = {
    dots: true,
  }

  //slick 메소드 사용하기 
  // 1. 슬릭에다가 이름을 붙여준다 -> useRef --> 이름.current
  // 2. 클릭하는 요소에 이벤트를 직접 달아준다

  const MS = useRef();

  return (
    <>
      <div>
        <h3>내 이름은 아이콘</h3>
        <i className="xi-bars"></i>
        <MainSlider ref={MS}{...Settings}>
          <figure>01</figure>
          <figure>02</figure>
          <figure>03</figure>
        </MainSlider>
        <div className="arrows">
          <i className="xi-arrow-left" onClick={
            () => (
              MS.current.slickPrev()
            )
          }></i>
          <i className="xi-arrow-right" onClick={
            () => (
              MS.current.slickNext()
            )
          }></i>
        </div>
      </div>
    </>
  )
}

export default MainVisual;