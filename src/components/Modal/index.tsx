import { Button } from 'components/Button'
import { Text } from 'components/Text'
import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import * as S from './styles'

type ModalType = {
  onClose: () => void
}

export function Modal({ onClose }: ModalType) {
  const [modalRoot, setModalRoot] = useState<HTMLElement>()

  const handleOnClose = () => {
    setTimeout(() => {
      onClose()
    }, 200)
  }
  useEffect(() => {
    setModalRoot(document.getElementById('modal-root')!)
  }, [])

  if (modalRoot) {
    return ReactDOM.createPortal(
      <S.Container onClick={handleOnClose}>
        <S.Modal onClick={(event) => event.stopPropagation()}>
          <Text as='p'>
            Obrigado pela sua assinatura, você receberá nossas novidades no
            e-mail.
          </Text>
          <S.ModalButton onClick={handleOnClose}>Ok</S.ModalButton>
        </S.Modal>
      </S.Container>,
      modalRoot
    )
  } else {
    return null
  }
}
