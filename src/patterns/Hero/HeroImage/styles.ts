import styled from 'styled-components'

export const Figure = styled.figure`
  margin: 0;
  min-width: 55rem;

  position: relative;
  left: -15rem;
  z-index: -1;

  img {
    height: 100%;
    width: 100%;
    position: absolute;
    bottom: 0;
  }

  @media (max-width: 1080px) {
    position: absolute;
    right: 0;
    height: 100%;
    min-width: 100%;

    img {
      max-width: 55rem;
      right: 0;
    }
  }

  @media (max-width: 780px) {
    display: none;
  }
`
