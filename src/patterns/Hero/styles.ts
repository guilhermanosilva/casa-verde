import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
`

export const InfoWrapper = styled.div`
  padding-top: 15rem;
  width: 50%;

  span {
    font-size: 1.8rem;
  }

  p {
    margin-bottom: 1.6rem;
  }

  h1 {
    margin: 1.6rem 0;
  }

  @media (max-width: 1000px) {
    padding-top: 6rem;
  }

  @media (max-width: 780px) {
    width: 100%;
  }
`
