import { Hero, Menu } from 'patterns'

import * as S from './styles'

export function Home() {
  return (
    <S.Main>
      <S.BgImage
        src='/img/hero-bg.svg'
        alt='Imagem amarela com formas arrendondas irregulares'
      />
      <Menu />
      <Hero />
    </S.Main>
  )
}
