import Image from 'next/image'
import styled from 'styled-components'

export const Container = styled.section`
  background-color: ${({ theme }) => theme.color.background};
  box-shadow: ${({ theme }) => theme.color.boxShadow};
  margin: 0 auto 4.4rem;
  height: 440px;
  width: min(995px, 100%);

  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  @media (max-width: 640px) {
    height: fit-content;
  }
`

export const ImageWrapper = styled.picture`
  width: 60%;
  height: 100%;
  overflow: hidden;

  @media (max-width: 780px) {
    position: absolute;
    width: 100%;
  }
`

export const ImageCard = styled(Image)`
  @media (max-width: 780px) {
    width: 100%;
    opacity: 0.05;
  }
`

export const TextsWrapper = styled.div`
  padding: 2.4rem;

  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  height: 100%;
  width: 40%;

  @media (max-width: 780px) {
    width: 100%;
    justify-content: center;
    height: fit-content;
  }
`

export const CardHeader = styled.header`
  margin-bottom: 3.2rem;

  span {
    display: inline-block;
    font-size: 2.2rem;
    margin-bottom: 1.2rem;
  }

  @media (max-width: 970px) {
    h2 {
      font-size: 3.4rem;
    }
  }

  @media (max-width: 640px) {
    span {
      font-size: 1.8rem;
    }
  }
`

export const CardSteps = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 3.2rem;

  span {
    font-size: 2.2rem;

    display: flex;
    align-items: center;

    &::before {
      content: '';
      display: block;
      flex: none;

      background-color: ${({ theme }) => theme.color.yellow};
      border-radius: 50%;

      width: 4.8rem;
      height: 4.8rem;
      margin-right: 1.6rem;
    }
  }

  @media (max-width: 970px) {
    gap: 2.4rem;
    span {
      font-size: 2rem;
    }
  }

  @media (max-width: 780px) {
    span {
      font-weight: 500;
    }
  }

  @media (max-width: 640px) {
    span::before {
      width: 3.2rem;
      height: 3.2rem;
    }
  }
`
