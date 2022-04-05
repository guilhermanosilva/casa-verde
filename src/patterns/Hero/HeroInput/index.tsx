import React, { useState } from 'react'

import { Button, Input } from 'components'

import mailIcon from 'assets/mail.svg'

import * as S from './styles'

export function HeroInput() {
  const [email, setEmail] = useState('')
  const [isDisabled, setIsDisabled] = useState(true)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.value ? setIsDisabled(false) : setIsDisabled(true)
    setEmail(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert(
      'Obrigado pela sua assinatura, você receberá nossas novidades no e-mail ' +
        email
    )
  }

  return (
    <S.Container onSubmit={handleSubmit}>
      <Input
        type='email'
        placeholder='Insira seu e-mail'
        icon={mailIcon}
        borderColor='green'
        value={email}
        onChange={handleChange}
        onClick={(e) => console.log}
      />
      <Button color='green' type='submit' disabled={isDisabled}>
        Assinar newsletter
      </Button>
    </S.Container>
  )
}
