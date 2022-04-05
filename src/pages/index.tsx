import type { NextPage } from 'next'
import { Head } from 'components'
import { Hero, Menu } from 'patterns'

import { ThemeProvider } from 'styled-components'
import GlobalStyle from 'styles/GlobalStyle'
import { light } from 'styles/Theme/light'

import * as S from './styles'

const Home: NextPage = () => {
  return (
    <ThemeProvider theme={light}>
      <Head title='Casa Verde' />
      <S.Main>
        <S.BgImage
          src='/img/hero-bg.svg'
          alt='Imagem amarela com formas arrendondas irregulares'
        />
        <Menu />
        <Hero />
      </S.Main>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default Home
