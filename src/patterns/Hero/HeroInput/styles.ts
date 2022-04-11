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

  @media (max-width: 780px) {
    flex-direction: column;
    gap: 0.8rem;
    height: initial;
    margin: 4rem 0;
  }
`
