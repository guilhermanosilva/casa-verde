import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${({ theme }) => theme.color.background};
  box-shadow: ${({ theme }) =>
    `${theme.color.boxShadow}, 10px 10px 30px rgba(0, 0, 0, 0.06)`};
  width: 38rem;
  height: 20rem;

  display: flex;

  transition: box-shadow 0.25s;

  &:hover {
    box-shadow: ${({ theme }) =>
      `${theme.color.boxShadow}, 10px 10px 30px rgba(0, 0, 0, 0.2)`};
  }
`

export const BgImage = styled.div<{ bgImage: string }>`
  background: ${({ bgImage }) => `url(${bgImage}) no-repeat`};
  background-size: cover;
  width: 100%;
  height: 100%;
`

export const CardInfo = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1.6rem 0;
  gap: 0.8rem;
  margin-right: 1.6rem;

  span {
    margin-top: 2.4rem;
  }
`

export const CardButton = styled.button`
  background-color: transparent;
  color: ${({ theme }) => theme.color.yellow};
  font-weight: 500;

  padding: 0;
  margin-top: 2.4rem;
  margin-bottom: 0;
  width: fit-content;

  display: flex;
  align-items: center;
  gap: 2.5rem;

  transition: all 0.25s;

  &:hover {
    text-decoration: underline;
  }
`
