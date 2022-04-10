import styled from 'styled-components'

export const Main = styled.main`
  max-width: 1200px;
  margin: 0 auto;
`

export const BgImage = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  z-index: -1;

  width: 50vw;

  @media (max-width: 1366px) {
    width: min(80rem, 70%);
  }
`
