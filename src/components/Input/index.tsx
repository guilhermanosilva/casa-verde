import { useState } from 'react'
import * as S from './styles'

type Input = {
  type?: string
  icon?: string
  placeholder?: string
  borderColor?: 'yellow' | 'green'
}

export function Input({
  borderColor = 'yellow',
  type = 'text',
  icon,
  placeholder = ''
}: Input) {
  const [isFocused, setIsFocused] = useState(false)

  return (
    <S.InputGroup isFocused={isFocused} borderColor={borderColor}>
      {icon && <S.Icon src={icon} alt='Icone' />}
      <S.Input
        type={type}
        placeholder={placeholder}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </S.InputGroup>
  )
}
