import { Select, Text } from 'components'
import { usePlants } from 'hooks'
import * as S from './styles'

export function OrderByName() {
  const { orderByName } = usePlants()

  return (
    <S.Container>
      <Text color='gray'>Ordenar: </Text>
      <Select
        onChange={(e) => orderByName(e.target.value === 'asc' ? 'asc' : 'desc')}
        defaultValue='asc'
      >
        <option value='asc'>A - Z</option>
        <option value='desc'>Z - A</option>
      </Select>
    </S.Container>
  )
}
