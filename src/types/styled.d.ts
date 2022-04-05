import { light } from 'styles'

export type Theme = typeof light

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
