import styled, { keyframes, DefaultTheme } from 'styled-components'

const borderToRight = (theme: DefaultTheme) => keyframes`
  to {
    width: 100%;
    border-bottom: 1px solid ${theme.color.text.primary};
  }
`

export const Link = styled.a`
  border-width: 0px;
  position: relative;

  &::before {
    display: inline-block;
    content: '';
    position: absolute;
    top: 0;
    z-index: 10;
    width: 0%;
    height: 100%;
    border-bottom: 1px solid transparent;
  }

  &:hover::before {
    animation: ${({ theme }) => borderToRight(theme)} 0.35s forwards;
  }
`
