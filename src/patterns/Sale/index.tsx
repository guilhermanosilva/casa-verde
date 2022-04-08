import { usePlants } from 'hooks'
import { Text, SaleCard } from 'components'
import { SearchOptionsBox } from 'patterns/SearchOptionsBox'
import * as S from './styles'

export function Sale() {
  const { plants } = usePlants()

  return (
    <S.Container>
      <S.Header>
        <Text color='gray'>Conheça nossas</Text>
        <Text as='h1'>Plantas</Text>
      </S.Header>

      <SearchOptionsBox />

      {plants.length > 0 ? (
        plants?.map((plant) => <SaleCard key={plant.name} {...plant} />)
      ) : (
        <Text as='strong' color='gray'>
          Nenhum produto encontrado
        </Text>
      )}
    </S.Container>
  )
}
