import { ReactNode } from 'react'
import Link from 'next/link'
import * as S from './style'

type Props = {
  href: string
  children: ReactNode
}

const LinkWrapper = ({ href, children }: Props) => {
  return (
    <S.Wrapper>
      <Link href={href}>{children}</Link>
    </S.Wrapper>
  )
}

export default LinkWrapper
