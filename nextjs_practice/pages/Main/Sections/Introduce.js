/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react';
import { useSelector } from 'react-redux';
import * as Emo from '../../../styles/Styled';

const TemplateBox = ({ title, desc }) => {
  return (
    <Emo.CustomDiv flex="1" width='24rem' padding='2.5rem 1.5rem' className="borderRadius boxShadow">
      <Emo.SemiTitleDiv>
        <h4>
          {title}
        </h4>
        <p>
          {desc}
        </p>
      </Emo.SemiTitleDiv>
    </Emo.CustomDiv>
  )
}

const Introduce = () => {
  const introData = useSelector(state => state.intro);
  return (
    <Emo.Section>
      <Emo.defaultContainer>
        <Emo.TitleDiv>
          <h3>Technology For People</h3>
          <p>
            사람을 생각하는 기술<br />
            사람과 함께 나아가기 위해 혁신과 성장을 멈추지 않습니다
          </p>
        </Emo.TitleDiv>
        <Emo.RowFlexBox>
          {introData.map(it => {
            return (
              <li key={it.id}>
                <TemplateBox title={it.title} desc={it.desc} />
              </li>
            )
          })}
        </Emo.RowFlexBox>
      </Emo.defaultContainer>
    </Emo.Section>
  )
}

export default Introduce;