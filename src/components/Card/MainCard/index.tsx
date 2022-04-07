import Image from 'next/image'
import { Text } from 'components/Text'
import mainCardPlant from 'assets/main-card-plant.png'

import * as S from './styles'

export function MainCard() {
  return (
    <S.Container>
      <Image src={mainCardPlant} alt='Folhas de uma planta samambaia' />
      <S.TextsWrapper>
        <S.CardHeader>
          <Text color='gray'>Como conseguir</Text>
          <Text as='h2'>minha planta</Text>
        </S.CardHeader>

        <S.CardSteps>
          <Text color='gray'>Escolha suas plantas</Text>
          <Text color='gray'>Faça seu pedido</Text>
          <Text color='gray'>Aguarde na sua casa</Text>
        </S.CardSteps>
      </S.TextsWrapper>
    </S.Container>
  )
}
