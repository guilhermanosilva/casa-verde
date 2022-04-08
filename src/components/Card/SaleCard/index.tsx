import { Text } from 'components/Text'
import { PlantsType } from 'types/plants'

import arrow from 'assets/arrow.svg'
import * as S from './styles'
import Image from 'next/image'

interface SaleCartType extends PlantsType {}

export function SaleCard({ img, name, preco, ordem }: SaleCartType) {
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
        {ordem > 0 ? (
          <S.CardButton type='button'>
            Comprar{' '}
            <Image
              src={arrow}
              alt='Seta apontando para direita de cor amarela'
            />
          </S.CardButton>
        ) : (
          <Text color='danger'>Sem estoque</Text>
        )}
      </S.CardInfo>
    </S.Container>
  )
}
