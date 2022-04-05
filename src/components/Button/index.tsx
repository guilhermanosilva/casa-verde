import * as S from './styles'

type Button = {
  children: React.ReactNode
  color?: 'yellow' | 'green'
}

export function Button({ color, children }: Button) {
  return (
    <S.Button type='button' color={color}>
      {children}
    </S.Button>
  )
}
