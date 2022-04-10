import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

import { Button, Input } from 'components'
import { useEnvironments } from 'hooks/useEnvironments'

import mailIcon from 'assets/mail.svg'
import * as S from './styles'
import { Modal } from 'components/Modal'

type HeroInput = {
  serviceId: string
  templateId: string
  userId: string
}

export function HeroInput() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [email, setEmail] = useState('')
  const [isDisabled, setIsDisabled] = useState(true)
  const form = useRef(null)

  const { environments } = useEnvironments()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.value ? setIsDisabled(false) : setIsDisabled(true)
    setEmail(e.target.value)
  }

  const sendEmail = () => {
    if (form.current) {
      emailjs.sendForm(
        environments.serviceId,
        environments.templateId,
        form.current,
        environments.userId
      )
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsModalOpen(true)
    sendEmail()
  }

  return (
    <S.Container onSubmit={handleSubmit} ref={form}>
      <Input
        name='user-email'
        type='email'
        placeholder='Insira seu e-mail'
        icon={mailIcon}
        borderColor='green'
        value={email}
        onChange={handleChange}
      />
      <Button color='green' type='submit' disabled={isDisabled}>
        Assinar newsletter
      </Button>
      {isModalOpen && <Modal onClose={() => setIsModalOpen(false)} />}
    </S.Container>
  )
}
