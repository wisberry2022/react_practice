/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react';
import * as Emo from '../styles/styleSet';

const divStyle = css`
  background-color: hotpink;
  font-size: 24px;
  border-radius: 4px;
  padding: 32px;
  text-align: center;
  transition: 0.5s;
  color: #fff;

  &:hover {
    background-color: black;
    color: white;
  }
`;

const SectionStyle = css`
    font-size: 25px;
    >div {
      outline: 1px solid #000;
      background-color: #fff;
    }
`;

export default function Home() {
  return (
    <>
      <div css={divStyle}>
        hello
      </div>
      <Emo.Section css={SectionStyle}>
        SECTION CHAPTER
        <div>
          안녕하세요!
        </div>
      </Emo.Section>
    </>
  )
}
