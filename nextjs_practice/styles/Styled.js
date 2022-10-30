/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react';
import styled from '@emotion/styled';

const breakpoints = [768, 1200];
const mQ = breakpoints.map(bp => `@media screen and (max-width:${bp}px)`);

export const Section = props => (
  <section
    css={
      {
        padding: '5rem 0',
        backgroundColor: props.bgcolor,
        [mQ[0]]: {
          padding: '5rem 1rem',
        }
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
        gap: props.gap,
      }
    }
    {...props}
  />
)

export const RowFlexBox = props => (
  <div
    css={
      {
        display: 'flex',
        flexWrap: props.flexwrap,
        justifyContent: props.align,
        gap: '1.5rem',
        width: '100%',
        [mQ[0]]: {
          justifyContent: 'center',
          marginBottom: '2.5rem',
        }
      }
    }
    {...props}
  />
)

export const BgFigure = props => (
  <figure
    css={
      {
        width: props.width,
        height: props.height,

        [mQ[0]]: {
          width: props.mobileWidth,
          height: props.mobileHeight,
        }
      }
    }
    {...props}
  />
)

export const PositionDiv = props => (
  <div
    css={
      {
        position: props.position,
        top: props.top,
        bottom: props.bottom,
        left: props.left,
        right: props.right,
        padding: props.padding,
        width: props.width,
        height: props.height,
      }
    }
    {...props}
  />
)

export const Navigation = props => (
  <nav
    css={
      {
        position: 'fixed',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: '999',
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

export const SemiTitleDiv = styled.div`
    // outline: 1px solid #000;
    display: ${props => props.display};
    flex-direction: ${props => props.flexDirection};
    justify-content: ${props => props.justifyContent};
    gap: ${props => props.gap || '.5rem'};
    margin-bottom: ${props => props.marginBottom};
    width: ${props => props.width};
    height: ${props => props.height};

    h4 {
      margin-bottom: 2.5rem;
      font-size: 1.5rem;
    }

    p {
      font-size: .9rem;
      line-height: 1.4;
    }
`;

export const TitleDiv = styled.div`
  display: ${props => props.display || 'block'};
  flex-direction: ${props => props.flexDirection || 'row'};
  justify-content: ${props => props.justifyContent || 'flex-start'};
  gap: ${props => props.gap || '.5rem'};
  margin-bottom: 4rem;
  color: ${props => props.color || '#333'};
  h3 {
    margin-bottom: 1rem;
    font-size: 2.4rem;
    text-align: ${props => props.textAlign || 'left'};
  }

  p {
    font-size: 1.2rem;
    font-weight: 300;
    text-align: ${props => props.textAlign || 'left'};
  }

  ${mQ[0]} {
    margin: 0 0 1.5rem 1rem;

    h3 {
      margin-bottom: 2rem;
      font-size: 1.9rem;
      color: 000;
      ${props => props.textShadow ? 'text-shadow: 0.05rem 0.05rem 0.05rem #111' : ''}
      text-align: ${props => props.textAlign ? 'center' : 'left'}
    }

    p {
      font-size: 1.1rem;
      font-weight: 500;
      ${props => props.textShadow ? 'text-shadow: 0.05rem 0.05rem 0.05rem #111' : ''}
      line-height: 1.4;
      text-align: ${props => props.textAlign ? 'center' : 'left'}
    }
  }
`;

export const CustomDiv = styled.div`
  position: relative;
  flex: ${props => props.flex};
  outline: ${props => props.outline || 'none'}; 
  padding: ${props => props.padding};
  width: ${props => props.width || '100%'};
  height: ${props => props.height || 'auto'};

  ${mQ[0]} {
    width: ${props => props.mobileWidth};
    height: ${props => props.mobileHeight};
  }
`;

export const defaultContainer = styled.div`
  display: ${props => props.flex || 'block'};
  justify-content: ${props => props.justifyContent || 'flex-start'};
  gap: ${props => props.gap || '1.5rem'};
  margin: 0 auto;
  width: 1200px;

  ${mQ[0]} {
    width: 100%;
  }
`

export const RowFlexUl = styled.ul`
  display: flex;
  justify-content: ${props => props.align || 'flex-start'};
  gap: ${props => props.gap || '1.5rem'};
  >li {
    line-height: 4rem;
    >a {
      color: #fff;
      font-size: 1rem;
    }
  }

  ${mQ[0]} {
    position: fixed;
    top: 100%;
    right: -20rem;
    z-index: 999;
    flex-direction: column;
    justify-content: flex-start;
    gap: .5rem;
    width: 60%;
    height: 100vh;
    background-color: #000;
    transition: .5s;
    
    >li {
      border-bottom: 0.1rem solid #222;
      padding: .5rem 1.5rem;
      line-height: auto;
    }

    &.show {
      right: 0;
    }
  }

`;