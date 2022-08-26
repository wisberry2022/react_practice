import { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";

const SlickCustom = () => {
  const fS = useRef();
  const [num, setNum] = useState();

  useEffect(() => {
    setNum(0)
  }, [])

  const Settings = {
    arrows: false,
    afterChange: idx => (
      setNum(idx)
    )
  }

  const SlideEle = [
    { id: 1, h2: 'JEWELLERY COLLECTION EVENT01', p: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto voluptate rerum eius omnis porro adipisci soluta molestiae, labore sint illo sit expedita. Dolores labore earum accusantium placeat suscipit debitis assumenda.' },
    { id: 2, h2: 'JEWELLERY COLLECTION EVENT02', p: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto voluptate rerum eius omnis porro adipisci soluta molestiae, labore sint illo sit expedita. Dolores labore earum accusantium placeat suscipit debitis assumenda.' },
    { id: 3, h2: 'JEWELLERY COLLECTION EVENT03', p: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto voluptate rerum eius omnis porro adipisci soluta molestiae, labore sint illo sit expedita. Dolores labore earum accusantium placeat suscipit debitis assumenda.' },
    { id: 4, h2: 'JEWELLERY COLLECTION EVENT04', p: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto voluptate rerum eius omnis porro adipisci soluta molestiae, labore sint illo sit expedita. Dolores labore earum accusantium placeat suscipit debitis assumenda.' },
  ];

  return (
    <>

      <Slider ref={fS} {...Settings} className="MainVisual">
        {
          SlideEle.map((itm, idx) => <figure
            key={itm.id}
            className={`itm0${idx + 1} ${idx == num ? 'on' : ''}`}
            style={{ background: 'url("../public/assets/mainvisual01.jpg")' }}
          >
            {itm.id}
          </figure>)
        }
      </Slider>

      <div className="num">
        {num + 1} / {SlideEle.length}
      </div>

      <div className="slideArrow">
        <i className="xi-arrow-left" onClick={
          () => (fS.current.slickPrev())
        }></i>
        <i className="xi-arrow-right" onClick={
          () => (fS.current.slickNext())
        }></i>
      </div>

      <ul className="slideDot">
        {SlideEle.map((dots, idx) => <li key={dots.id} onClick={
          () => (
            fS.current.slickGoTo(idx)
          )
        }
          className={idx == num ? 'on' : ''}
        >{dots.id}</li>)}
      </ul>
    </>
  )
}

export default SlickCustom;