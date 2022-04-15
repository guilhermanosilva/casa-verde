import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  height: 65rem;
  width: 100%;
  position: relative;
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

  @media (max-width: 1080px) {
    width: 60%;
    height: 100%;
  }

  @media (max-width: 900px) {
    width: 70%;
  }

  @media (max-width: 780px) {
    width: 100%;

    span {
      font-weight: 500;
    }

    h1 {
      font-size: 4.8rem;
      margin: 0.4rem 0 1.6rem 0;
    }

    p {
      font-size: 1.8rem;
    }
  }
`
