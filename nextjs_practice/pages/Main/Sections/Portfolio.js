import * as Emo from '../../../styles/Styled';
import { useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';

const ImageSet = ({ data }) => {
  return (
    <Emo.CustomDiv width="100%" height="35rem" mobileWidth='100%' mobileHeight='19rem' className="feature">
      <Emo.BgFigure width="100%" height="100%" mobileWidth='100%' mobileHeight='19rem' className={`bg_set bgItm0${data.id}`}></Emo.BgFigure>
      <Emo.PositionDiv position='absolute' top='1rem' left='1rem' width='20rem' height='100%' padding='3rem 2rem' className="boxDeco">
        <h4>{data.title}</h4>
        <p>{data.contents}</p>
        <button type="button" className="normalBtn">더 보기</button>
      </Emo.PositionDiv>
    </Emo.CustomDiv>
  )
}

const Portfolio = () => {
  const portfolioData = useSelector(state => state.portfolio);
  const isMobile = useMediaQuery({
    query: '(max-width: 768px)'
  })
  return (
    <Emo.Section bgcolor="#f9f9f9">
      <Emo.defaultContainer>
        <Emo.TitleDiv textAlign='center'>
          <h3>AAA's Portfolio</h3>
          <p>고객이 만족하는 성과를 위해 항상 노력합니다</p>
        </Emo.TitleDiv>
        {isMobile ?
          <Emo.ColFlexDiv gap='1.5rem'>
            {portfolioData.map(it => {
              return (
                <ImageSet idx={it.id} data={it} />
              )
            })}
          </Emo.ColFlexDiv>
          :
          <Emo.RowFlexBox alignt='center' flexwrap='nowrap'>
            {portfolioData.map(it => {
              return (
                <ImageSet idx={it.id} data={it} />
              )
            })}
          </Emo.RowFlexBox>
        }

      </Emo.defaultContainer >
    </Emo.Section >
  )
}

export default Portfolio;