import Image from 'next/image'

import { Item } from './Item'

import * as S from './styles'

export function Menu() {
  return (
    <S.Header>
      <Image
        src='/img/logo.svg'
        alt='Uma folha verde seguida do nome casa verde'
        width='160'
        height='40'
      />

      <S.Navigation>
        <ul>
          <Item href='como-fazer' text='Como fazer' separator='/' />
          <Item href='ofertas' text='Ofertas' separator='/' />
          <Item href='depoimentos' text='Depoimentos' separator='/' />
          <Item href='videos' text='Videos' separator='/' />
          <Item href='meu-carrinho' text='Meu carrinho' />
        </ul>
      </S.Navigation>
    </S.Header>
  )
}
