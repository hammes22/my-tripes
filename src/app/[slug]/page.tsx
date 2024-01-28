import client from '@/graphql/client'
import { GetPageBySlugQuery, GetPagesQuery } from '@/graphql/generated/graphql'
import { GET_PAGES, GET_PAGE_BY_SLUG } from '@/graphql/queries'
import PageTemplate from '@/templates/Pages'
import { notFound } from 'next/navigation'
import React from 'react'

type Props = {
  params: {
    slug: string
  }
}

export default async function Slug({ params }: Props) {
  const { page } = await client.request<GetPageBySlugQuery>(GET_PAGE_BY_SLUG, {
    slug: `${params.slug}`
  })

  if (!page) {
    notFound()
  }

  return <PageTemplate heading={page.heading} body={page.body.html} />
}
