import styled from 'styled-components'

export const Header = styled.header`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`

export const Navigation = styled.nav`
  ul {
    list-style: none;
    margin: 0;

    display: flex;
    align-items: center;
    gap: 1rem;

    a {
      font-weight: 500;
    }

    span {
      font-size: 1.4rem;
    }
  }
`
