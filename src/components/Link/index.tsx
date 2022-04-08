import * as S from './styles'

type Link = {
  children: React.ReactNode
  href: string
}

export function Link({ children, href }: Link) {
  return <S.Link href={href}>{children}</S.Link>
}

