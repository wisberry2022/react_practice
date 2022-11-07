/** @jsxImportSource @emotion/react  */
import * as Emo from '../../../styles/Styled';
import { simpleDataList } from '../../../Interface/InterfaceSet';

const MainVisual = () => {
  const btnList: Array<simpleDataList> = [
    { id: 1, title: 'VIEW', link: '/view', bgColor: '#fff', color: '#000' },
    { id: 2, title: 'PRODUCT', link: '/product', bgColor: '#000', color: '#fff' },
    { id: 3, title: 'REQUEST', link: '/request', bgColor: '#fff', color: '#000' },
  ];
  return (
    <div className="mainVisual bg_set">
      <Emo.DefaultContainer position='relative'>
        <Emo.FloatingBox top='48rem' left='50%' transform='translate(-50%, -50%)'>
          <div className="title_box">
            <h3>세상에 없는 소프트웨어를 개발합니다.</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br /> Facilis nihil consequatur aspernatur est obcaecati fugiat quasi dolorem animi rerum iste?
            </p>
          </div>
          <Emo.BtnBox className="btnBox" justifycontent='center' gap='1.5rem'>
            {btnList.map(it => (
              <Emo.BTN type="button" key={it.id} color={it.color} bgcolor={it.bgColor} className="btn">{it.title}</Emo.BTN>
            ))}
          </Emo.BtnBox>
        </Emo.FloatingBox>
      </Emo.DefaultContainer>
    </div>
  )
}

export default MainVisual;