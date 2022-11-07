/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react';
import * as Emo from '../../../../styles/Styled';

const Intro = () => {
  return (
    <Emo.Section>
      <Emo.DefaultContainer>
        <Emo.TitleBox textalign='center'>
          <h3>
            Section's Title
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.<br />
            Animi, cum. Amet non deserunt accusamus, minus assumenda inventore consectetur harum,<br /> reprehenderit temporibus sapiente nam dolores cupiditate, nihil incidunt fuga rerum iste.
          </p>
        </Emo.TitleBox>
      </Emo.DefaultContainer>
    </Emo.Section>
  )
}

export default Intro;