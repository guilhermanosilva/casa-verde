import { OrderByName } from './OrderByName'
import * as S from './styles'

type SelectType = {
  value: 'asc' | 'desc'
}

export function SearchOptionsBox() {
  return (
    <S.Container>
      <OrderByName />
    </S.Container>
  )
}
