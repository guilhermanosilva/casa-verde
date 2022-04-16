import styled, { css } from 'styled-components'

export const Select = styled.select`
  ${({ theme }) => css`
    appearance: none;
    background-color: ${theme.color.background};
    border: 1px solid ${theme.color.text.gray};
    color: ${theme.color.text.gray};
    font-weight: 500;
    padding: 0.4rem 0.8rem;
    outline: ${theme.color.text.gray};
  `}

  @media (max-width: 780px) {
    padding: 1.2rem;
    font-size: 1.4rem;
  }
`
