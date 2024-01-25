import client from '@/graphql/client'
import { GET_PAGES, GET_PAGE_BY_SLUG } from '@/graphql/queries'
import PageTemplate, { PageTemplateProps } from '@/templates/Pages'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'

export default async function Page({ heading, body }: PageTemplateProps) {
  const router = useRouter()

  // Se isFallback é verdadeiro, a página ainda está sendo gerada.
  // Mostre uma página de carregamento ou um placeholder.
  if (router.isFallback) {
    return <div>Carregando...</div> // ou um componente de carregamento personalizado
  }
  return (
    <div>
      <PageTemplate heading={heading} body={body} />
    </div>
  )
}

export const getStaticPaths = async () => {
  const { pages } = await client.request(GET_PAGES, { first: 3 })
  const paths = pages.map(({ slug }) => ({
    params: { slug }
  }))

  console.log(paths)

  return {
    paths,
    fallback: true
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // const { page } = await client.request(GET_PAGE_BY_SLUG, {
  //   slug: `${params?.slug}`
  // })
  const { page } = await client.request(GET_PAGE_BY_SLUG, {
    slug: `about`
  })
  if (!page) return { notFound: true }

  return {
    props: {
      heading: page.heading,
      body: page.body
    }
  }
}
