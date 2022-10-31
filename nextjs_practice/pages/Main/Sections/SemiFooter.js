import { useSelector } from 'react-redux';
import * as Emo from '../../../styles/Styled';

const InfoList = ({ footerData }) => {
  return (
    <Emo.ColFlexDiv>
      <h4>{footerData.title}</h4>
      <Emo.ColFlexUl>
        {footerData.contents.map((it, idx) => {
          return (
            <li key={idx}>{it}</li>
          )
        })}
      </Emo.ColFlexUl>
    </Emo.ColFlexDiv>
  )
}

const SemiFooter = () => {
  const footerData = useSelector(state => state.footer);
  return (
    <Emo.Section>
      {console.log(footerData)}
      <Emo.defaultContainer flex='flex' gap='2rem'>
        <Emo.RowFlexBox className="left">
          {footerData.map(it => {
            return (
              <InfoList key={it.id} footerData={it} />
            )
          })}
          {/* <InfoList /> */}
        </Emo.RowFlexBox>
        <Emo.ColFlexDiv className="right">
          right2
        </Emo.ColFlexDiv>
      </Emo.defaultContainer>
    </Emo.Section>
  )
}

export default SemiFooter;