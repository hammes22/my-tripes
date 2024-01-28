import client from '@/graphql/client'
import { GetPlacesQuery } from '@/graphql/generated/graphql'
import { GET_PLACES } from '@/graphql/queries'
import HomeTemplate from '@/templates/Home'

export default async function Home() {
  const { places } = await client.request<GetPlacesQuery>(GET_PLACES)
  return <HomeTemplate places={places} />
}
