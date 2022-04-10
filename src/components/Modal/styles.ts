import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${({ theme }) => theme.color.transparentBackground};

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  backdrop-filter: blur(3px);
`

export const Modal = styled.section`
  background-color: ${({ theme }) => theme.color.background};

  width: min(50rem, 90%);
  padding: 4rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 3.2rem;
`

export const ModalButton = styled.button`
  align-self: flex-end;
  min-width: 10rem;
  padding: 1.6rem;

  font-weight: 500;
  background-color: ${({ theme }) => theme.color.yellow};
  color: ${({ theme }) => theme.color.background};
`
