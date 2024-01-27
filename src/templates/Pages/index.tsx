'use client'
import React from 'react'
import LinkWrapper from '@/components/LinkWrapper'
import { CloseOutline } from '@styled-icons/evaicons-outline'
import * as S from './styles'
import { useParams, useRouter } from 'next/navigation'

export type PageTemplateProps = {
  heading: string
  body: string
}

export default function PageTemplate({ body, heading }: PageTemplateProps) {
  return (
    <S.Content>
      <LinkWrapper href="/">
        <CloseOutline size={32} />
      </LinkWrapper>
      <S.Heading>{heading}</S.Heading>
      <S.Body>
        <div dangerouslySetInnerHTML={{ __html: body }} />
      </S.Body>
    </S.Content>
  )
}
