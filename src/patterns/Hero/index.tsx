import { HeroImage } from './HeroImage'
import { HeroInfo } from './HeroInfo'
import { HeroInput } from './HeroInput'

import * as S from './styles'

export function Hero() {
  return (
    <S.Container>
      <S.InfoWrapper>
        <HeroInfo />
        <HeroInput />
      </S.InfoWrapper>
      <HeroImage />
    </S.Container>
  )
}
