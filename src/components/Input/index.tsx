import { InputHTMLAttributes, useState } from 'react'
import * as S from './styles'

interface Input extends InputHTMLAttributes<HTMLInputElement> {
  type?: string
  icon?: string
  placeholder?: string
  borderColor?: 'yellow' | 'green'
}

export function Input({
  borderColor = 'yellow',
  icon,
  placeholder = '',
  ...rest
}: Input) {
  const [isFocused, setIsFocused] = useState(false)

  return (
    <S.InputGroup isFocused={isFocused} borderColor={borderColor}>
      {icon && <S.Icon src={icon} alt='Icone' />}
      <S.Input
        placeholder={placeholder}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        {...rest}
      />
    </S.InputGroup>
  )
}
