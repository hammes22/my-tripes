'use client'
import dynamic from 'next/dynamic'

const Map = dynamic(() => import('@/components/Map'), { ssr: false })

export default function Home() {
  const places = [
    {
      id: '1',
      name: 'Petrópolis',
      slug: 'petropolis',
      location: {
        latitude: -22.4524959,
        longitude: -43.1338555
      }
    }
  ]

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Map places={places} />
    </div>
  )
}
