import Image from 'next/image'
import { useState } from 'react'

import { Item } from './Item'

import * as S from './styles'

export function Menu() {
  const [isOpenMenu, setIsOpenMenu] = useState(false)

  const handleMenuClick = () => {
    setIsOpenMenu((prev) => !prev)
  }

  return (
    <S.Header>
      <Image
        src='/img/logo.svg'
        alt='Uma folha verde seguida do nome casa verde'
        width='160'
        height='40'
      />

      <S.MenuIcon isOpenMenu={isOpenMenu} onClick={handleMenuClick}>
        <div className='one'></div>
        <div className='two'></div>
        <div className='three'></div>
      </S.MenuIcon>

      <S.Navigation isOpenMenu={isOpenMenu}>
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
