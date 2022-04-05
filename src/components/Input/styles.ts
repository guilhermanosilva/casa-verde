import Image from 'next/image'
import styled from 'styled-components'
import { light } from 'styles'

type InputGroup = {
  borderColor: keyof typeof light.color
  isFocused: boolean
}

export const InputGroup = styled.div<InputGroup>`
  background-color: ${({ theme }) => theme.color.background};

  height: 100%;
  width: 100%;
  padding-left: 1.6rem;

  display: flex;
  align-items: center;

  transition: all 0.25s;

  border: 1px solid
    ${({ isFocused, theme, borderColor }) =>
      isFocused ? theme.color[borderColor] : 'transparent'};
`

export const Icon = styled(Image)`
  height: 1rem;
`

export const Input = styled.input`
  border: none;
  background-color: transparent;

  font-size: 1.6rem;
  font-weight: 500;
  color: ${({ theme }) => theme.color.text.gray};

  height: 100%;
  width: 100%;
  padding: 0 1.6rem;

  outline: none;

  &::placeholder {
    color: ${({ theme }) => theme.color.text.gray};
    font-size: 1.6rem;
    font-weight: 400;
  }
`
