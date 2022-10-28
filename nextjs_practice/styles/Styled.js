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

export const RowFlexBox = props => (
  <div
    css={
      {
        display: 'flex',
        gap: '1.5rem',
        width: '100%',
        flexWrap: 'wrap',
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
  }

  p {
    font-size: 1.2rem;
    font-weight: 300;
  }

  ${mQ[0]} {
    margin: 25rem 0 0 1rem;

    h3 {
      color: #f9f9f9;
      text-shadow: 0.05rem 0.05rem 0.05rem #111;
    }

    p {
      font-weight: 500;
      text-shadow: 0.05rem 0.05rem 0.05rem #111;
    }
  }
`;

export const CustomDiv = styled.div`
  flex: ${props => props.flex};
  outline: ${props => props.outline || 'none'}; 
  padding: ${props => props.padding};
  width: ${props => props.width || '100%'};
  height: ${props => props.height || 'auto'};
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