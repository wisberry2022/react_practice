/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react';
import styled from '@emotion/styled';
import media from 'styled-media-query';

export const Section = props => (
  <section
    css={
      {
        padding: '10rem 0',
      }
    }
    {...props}
  />
)

export const ColFlexDiv = props => (
  <div
    css={
      {
        display: 'flex',
        flexDirection: 'column',
      }
    }
    {...props}
  />
)

export const TitleDiv = styled.div`
  display: ${props => props.display || 'block'};
  flex-direction: ${props => props.flexDirection || 'row'};
  justify-content: ${props => props.justifyContent || 'flex-start'};
  gap: ${props => props.gap || '.5rem'};
  color: ${props => props.color || '#333'};
  h3 {
    margin-bottom: 1.5rem;
    font-size: 2.4rem;
  }
`;

export const CustomDiv = styled.div`
  outline: ${props => props.outline || 'none'};
  width: ${props => props.width || '100%'};
  height: ${props => props.height || 'auto'};
`;

export const defaultContainer = styled.div`
  display: ${props => props.flex || 'block'};
  justify-content: ${props => props.justifyContent || 'flex-start'};
  gap: ${props => props.gap || '1.5rem'};
  margin: 0 auto;
  width: 1200px;
  // width: 100%;

    ${media.lessThan('medium')`
      width: 100%;
    `}
`

export const Navigation = props => (
  <nav
    css={
      {
        position: 'fixed',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        gap: '2.5rem',
        width: '100%',
        backgroundColor: '#111',
        color: '#fff'
      }
    }
    {...props}
  />
)

export const RowFlexUl = styled.ul`
  display: flex;
  justify-content: ${props => props.align || 'flex-start'};
  gap: ${props => props.gap || '1.5rem'};
  >li {
    line-height: 4rem;
    >a {
      color: #fff;
    }
  }

  // ${media.lessThan('medium')`
  //   position: fixed;
  //   top: 100%;
  //   right: -20rem;
  //   z-index: 999;
  //   flex-direction: column;
  //   justify-content: flex-start;
  //   gap: .5rem;
  //   width: 60%;
  //   height: 100vh;
  //   background-color: #000;
  //   transition: .5s;
    
  //   >li {
  //     border-bottom: 0.1rem solid #222;
  //     padding: .5rem 1.5rem;
  //     line-height: auto;
  //   }

  //   &.show {
  //     right: 0;
  //   }
  // `}
`;