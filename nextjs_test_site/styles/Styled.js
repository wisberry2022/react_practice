/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react';

export const DefaultContainer = props => (
  <div
    css={{
      outline: '0.1rem solid #000',
      display: props.display,
      justifyContent: props.justifyContent,
      margin: '0 auto',
      width: '120rem',

    }}
    {...props}
  />
)