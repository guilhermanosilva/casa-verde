import { Button, Input } from 'components'

import mailIcon from 'assets/mail.svg'

import * as S from './styles'

export function HeroInput() {
  return (
    <S.Container>
      <Input
        type='email'
        placeholder='Insira seu e-mail'
        icon={mailIcon}
        borderColor='green'
      />
      <Button color='green'>Assinar newsletter</Button>
    </S.Container>
  )
}
