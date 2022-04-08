import { MainCard } from 'components/'
import { Hero, Menu, Sale } from '..'
import * as S from './styles'

export function HomeLayout() {
  return (
    <S.Main>
      <S.BgImage
        src='/img/hero-bg.svg'
        alt='Imagem amarela com formas arrendondas irregulares'
      />
      <Menu />
      <Hero />
      <MainCard />
      <Sale />
    </S.Main>
  )
}
