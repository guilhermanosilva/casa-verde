import styled, { css, keyframes } from 'styled-components'
import { enterMenu } from 'styles/animations'

export const Header = styled.header`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`

export const Navigation = styled.nav<{ isOpenMenu: boolean }>`
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

  @media (max-width: 780px) {
    background-color: ${({ theme }) => theme.color.yellow};
    display: ${({ isOpenMenu }) => (isOpenMenu ? 'block' : 'none')};
    padding: 4rem;
    overflow: hidden;

    position: fixed;
    top: 0;
    right: -50%;
    bottom: 0;
    left: 50%;
    opacity: 0;
    z-index: 1;

    animation: ${enterMenu} 0.3s forwards;

    ul {
      flex-direction: column;
      align-items: flex-start;

      li {
        margin-bottom: 1.6rem;
      }

      small {
        display: none;
      }
    }
  }
`

export const MenuIcon = styled.button<{ isOpenMenu: boolean }>`
  background-color: transparent;
  width: 4rem;
  height: 3rem;
  opacity: 0.75;
  transition-duration: 0.5s;
  display: none;

  &:hover {
    cursor: pointer;
    opacity: 1;
  }

  .one,
  .two,
  .three {
    background-color: ${({ theme }) => theme.color.text.primary};
    height: 0.5rem;
    width: 100%;
    margin: 0.6rem auto;

    transition-duration: 0.5s;

    position: relative;
  }

  @media (max-width: 780px) {
    display: block;
  }

  ${({ isOpenMenu }) =>
    isOpenMenu &&
    css`
      position: fixed;
      top: 1.6rem;
      right: 1.6rem;
      z-index: 2;

      .one {
        transform: rotate(45deg) translateY(16px);
      }
      .two {
        opacity: 0;
      }
      .three {
        transform: rotate(-45deg) translateY(-16px);
      }
    `}
`
