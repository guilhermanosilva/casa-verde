import styled from 'styled-components'

export const Container = styled.form`
  width: 100%;
  height: 7.5rem;
  box-shadow: ${({ theme }) => theme.color.boxShadow};
  background-color: ${({ theme }) => theme.color.background};

  display: flex;
  justify-content: space-between;

  button {
    margin: 0;
  }
`
