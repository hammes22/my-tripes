'use client'
import LinkWrapper from '@/components/LinkWrapper'
import { GetPlaceBySlugQuery } from '@/graphql/generated/graphql'
import { CloseOutline } from '@styled-icons/evaicons-outline'
import * as S from './styles'

import React from 'react'
import Image from 'next/image'

export default function PlaceTemplate({ place }: GetPlaceBySlugQuery) {
  return (
    <>
      <LinkWrapper href="/">
        <CloseOutline size={32} />
      </LinkWrapper>
      <S.Wrapper>
        <S.Heading>{place?.name}</S.Heading>
        <S.Body
          dangerouslySetInnerHTML={{ __html: place?.description?.html || '' }}
        />
        <S.Gallery>
          {place?.gallery.map((image, index) => (
            <Image
              key={`photo-${index}`}
              src={image.url}
              width={1000}
              height={600}
              alt={place.name}
              quality={75}
            />
          ))}
        </S.Gallery>
      </S.Wrapper>
    </>
  )
}
