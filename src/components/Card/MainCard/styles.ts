import styled from 'styled-components'

export const Container = styled.section`
  background-color: ${({ theme }) => theme.color.background};
  box-shadow: ${({ theme }) => theme.color.boxShadow};
  margin: 0 auto 4.4rem;
  height: 440px;
  width: 995px;

  display: flex;
  align-items: center;
`

export const TextsWrapper = styled.div`
  padding: 2.4rem;

  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`

export const CardHeader = styled.header`
  margin-bottom: 3.2rem;

  span {
    display: inline-block;
    font-size: 2.2rem;
    margin-bottom: 1.2rem;
  }
`

export const CardSteps = styled.div`
  span {
    font-size: 2.2rem;
    margin-bottom: 3.2rem;

    display: flex;
    align-items: center;

    &::before {
      content: '';
      display: block;

      background-color: ${({ theme }) => theme.color.yellow};
      border-radius: 50%;

      width: 5.2rem;
      height: 5.2rem;
      margin-right: 1.5rem;
    }
  }
`
