import styled from 'styled-components'

export const Container = styled.div`
  box-shadow: ${({ theme }) => theme.color.boxShadow};
  padding: 0.8rem 1.6rem;
  width: 100%;

  display: flex;
  justify-content: flex-end;
`
