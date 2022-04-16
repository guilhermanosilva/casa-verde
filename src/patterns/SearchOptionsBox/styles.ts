import styled from 'styled-components'

export const Container = styled.div`
  box-shadow: ${({ theme }) => theme.color.boxShadow};
  padding: 0.8rem 1.6rem;
  width: 100%;

  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 0.8rem;

  span {
    font-size: 1.2rem;
    font-weight: 700;
  }

  @media (max-width: 780px) {
    display: block;
    flex-direction: column;
    text-align: center;

    span {
      display: inline-block;
      font-size: 1.6rem;
      text-align: center;
      margin-bottom: 0.8rem;
      width: 100%;
    }

    select {
      width: 40%;
      & + select {
        margin-left: 0.8rem;
      }
    }
  }

  @media (max-width: 480px) {
    display: flex;
    flex-direction: column;
    text-align: center;

    select {
      width: 100%;
      & + select {
        margin-left: 0;
      }
    }
  }
`
