'use client'
// import Map from '@/components/Map'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'

const Map = dynamic(() => import('@/components/Map'), { ssr: false })

export default function Home() {
  // const { asPath } = useRouter()

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Map />
    </div>
  )
}
