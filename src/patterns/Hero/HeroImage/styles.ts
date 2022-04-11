import styled from 'styled-components'

export const Figure = styled.figure`
  margin: 0;
  width: 50%;

  position: relative;
  left: -15rem;
  z-index: -1;

  @media (max-width: 1000px) {
    left: -10rem;
    display: flex;
    align-items: flex-end;
  }

  @media (max-width: 780px) {
    display: none;
  }
`
