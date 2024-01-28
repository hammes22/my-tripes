import client from '@/graphql/client'
import { GetPlaceBySlugQuery } from '@/graphql/generated/graphql'
import { GET_PLACE_BY_SLUG } from '@/graphql/queries'
import PlaceTemplate from '@/templates/Place'
import { notFound } from 'next/navigation'
import React from 'react'

type Props = {
  params: { slug: string }
}

export default async function Place({ params }: Props) {
  const { place } = await client.request<GetPlaceBySlugQuery>(
    GET_PLACE_BY_SLUG,
    {
      slug: `${params.slug}`
    }
  )

  if (!place) {
    notFound()
  }

  return <PlaceTemplate place={place} />
}
