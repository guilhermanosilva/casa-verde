import { Text } from 'components'
import { FilterByRangePrice } from './FilterByRangePrice'
import { OrderByName } from './OrderByName'
import * as S from './styles'

export function SearchOptionsBox() {
  return (
    <S.Container>
      <Text color='gray'>Filtros: </Text>
      <OrderByName />
      <FilterByRangePrice />
    </S.Container>
  )
}
