import { Text } from 'components/Text'
import { PlantsType } from 'types/plants'

import arrow from 'assets/arrow.svg'
import * as S from './styles'
import Image from 'next/image'

interface SaleCartType extends PlantsType {}

export function SaleCard({ img, name, preco }: SaleCartType) {
  return (
    <S.Container>
      <S.BgImage bgImage={`./img/sale/${img}.png`}></S.BgImage>
      <S.CardInfo>
        <Text as='h3'>{name}</Text>
        <Text as='strong' color='gray'>
          {new Intl.NumberFormat('pt-br', {
            style: 'currency',
            currency: 'BRL'
          }).format(preco)}
        </Text>
        <S.CardButton type='button'>
          Comprar{' '}
          <Image src={arrow} alt='Seta apontando para direita de cor amarela' />
        </S.CardButton>
      </S.CardInfo>
    </S.Container>
  )
}
