/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react';
import { useSelector } from 'react-redux';
import * as Emo from '../../../../styles/Styled';

const Template = ({ dataSet }) => {
  return (
    <div className="smallBox">
      <h4 className="innerTitle">
        {dataSet.title}
      </h4>
      <p className="innerPhase">
        {dataSet.content}
      </p>
    </div>
  )
}

const Intro = () => {
  const data: object[] = useSelector(state => state.introSlice);
  return (
    <Emo.Section className="introSection">
      <Emo.DefaultContainer>
        <Emo.TitleBox textalign='center' marginbottom='10rem'>
          <h3>
            Section's Title
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.<br />
            Animi, cum. Amet non deserunt accusamus, minus assumenda inventore consectetur harum,<br /> reprehenderit temporibus sapiente nam dolores cupiditate, nihil incidunt fuga rerum iste.
          </p>
        </Emo.TitleBox>
        <div className="innerBox">
          {data.map((it, idx) => <Template key={idx} dataSet={it} />)}
        </div>
      </Emo.DefaultContainer>
    </Emo.Section>
  )
}

export default Intro;