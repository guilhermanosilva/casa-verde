import { MainCard } from 'components/Card/MainCard'
import { Sale } from 'patterns/Sale'
import { Hero, Menu } from '..'
import * as S from './styles'

export function Layout() {
  return (
    <S.Main>
      <S.BgImage
        src='/img/hero-bg.svg'
        alt='Imagem amarela com formas arrendondas irregulares'
      />
      <Menu />
      <Hero />
      <MainCard />
    </S.Main>
  )
}
