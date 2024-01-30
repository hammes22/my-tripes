import client from '@/graphql/client'
import { GetPlacesQuery } from '@/graphql/generated/graphql'
import { GET_PLACES } from '@/graphql/queries'
import HomeTemplate from '@/templates/Home'

export default async function Home() {
  await new Promise<void>((resolve) => setTimeout(resolve, 4000))

  const { places } = await client.request<GetPlacesQuery>(GET_PLACES)
  return <HomeTemplate places={places} />
}
