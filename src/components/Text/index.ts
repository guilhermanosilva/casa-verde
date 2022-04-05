import styled, { css } from 'styled-components'
import { light } from 'styles'

export type Text = {
  children: React.ReactNode
  color?: keyof typeof light.color.text
  as?: string
}

export const Text = styled.span<Text>`
  color: ${({ theme, color }) => color && theme.color.text[color]};

  ${({ as }) =>
    as === 'h1' &&
    css`
      font-family: 'Elsie Swash Caps', cursive;
      font-size: 7.2rem;
    `}

  ${({ as }) =>
    as === 'p' &&
    css`
      line-height: 1.5;
    `}
`
