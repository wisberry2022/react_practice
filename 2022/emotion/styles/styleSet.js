/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react';

export const P = props => (
  <p
    css={{
      margin: 0,
      fontSize: 12,
      lineHeight: '1.5',
      fontFamily: 'sans-serif',
      color: 'blue',
    }}
    {...props}
  />
)

export const Section = props => (
  <section
    css={
      {
        padding: '100px 0',
        backgroundColor: '#f9f9f9',
        color: '#111',
      }
    }
    {...props}
  />
)