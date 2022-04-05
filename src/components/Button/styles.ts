import styled from 'styled-components'
import { light } from 'styles'

type Button = {
  color?: keyof typeof light.color
}

export const Button = styled.button<Button>`
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ color, theme }) =>
    color ? theme.color[color] : theme.color.text.gray};

  min-width: 18rem;
  padding: 0 1.6rem;
`
