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

      {plants?.map(
        (plant) => plant.ordem > 0 && <SaleCard key={plant.name} {...plant} />
      )}
    </S.Container>
  )
}
