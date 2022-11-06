/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react';
import styled from '@emotion/styled';

export const DefaultContainer = props => (
  <div
    css={{
      // outline: '0.1rem solid #000',
      display: props.display,
      justifyContent: props.justifyContent,
      margin: '0 auto',
      width: '120rem',
    }}
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
