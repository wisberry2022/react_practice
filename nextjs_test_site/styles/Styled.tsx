/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react';
import styled from '@emotion/styled';
import { BtnInterface, TitleBoxInterface } from '../Interface/InterfaceSet';

export const Section = props => (
  <div
    css={{
      padding: '10rem 0',
    }}
    {...props}
  />
)

export const DefaultContainer = props => (
  <div
    css={{
      position: props.position,
      display: props.display,
      justifyContent: props.justifycontent,
      margin: '0 auto',
      width: '120rem',
    }}
    {...props}
  />
)

export const FloatingBox = props => (
  <div
    css={{
      position: 'absolute',
      top: props.top,
      bottom: props.bottom,
      left: props.left,
      right: props.right,
      zIndex: props.zIndex,
      transform: props.transform,
    }}
    {...props} />
)

export const BtnBox = props => (
  <div
    css={
      {
        display: 'flex',
        flexDirection: props.align,
        justifyContent: props.justifycontent,
        gap: props.gap,
      }
    }
    {...props}
  />
)


export const RowFlexUl = styled.ul`
    display: flex;

    >li {

      &:last-child {
        >a {
          margin-right: -1.5rem;
        }
      }

      >a {
        display: block;
        padding: 2.5rem 1.5rem;
        font-size: 1.7rem;
        color: #fff;
      }
    }
`;

export const TitleBox = styled.div<TitleBoxInterface>`
  margin-bottom: 2.5rem;
  text-align: ${props => props.textalign};
  h3 {
    margin-bottom: 3rem;
    font-size: 3.2rem;
    font-weight: 600;
  }

  p {
    font-size: 1.7rem;
    font-weight: 400;
  }
`;

export const BTN = styled.button<BtnInterface>`
    display: block;
    border-radius: 3rem;
    width: ${props => props.width ? props.width : '15rem'};
    height: ${props => props.height ? props.height : '5rem'};
    background-color: ${props => props.bgcolor ? props.bgcolor : '#fff'};
    color: ${props => props.color ? props.color : '#000'};
    font-size: 1.6rem;
    font-weight: 600;
    cursor: pointer;
`;