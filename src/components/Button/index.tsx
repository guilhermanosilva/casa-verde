import { ButtonHTMLAttributes } from 'react'
import * as S from './styles'

interface Button extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  color?: 'yellow' | 'green'
}

export function Button({ color, children, ...rest }: Button) {
  return (
    <S.Button type='button' color={color} {...rest}>
      {children}
    </S.Button>
  )
}
