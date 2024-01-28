'use client'
import LinkWrapper from '@/components/LinkWrapper'
import { MapProps } from '@/components/Map'
import { InfoOutline } from '@styled-icons/evaicons-outline'
import dynamic from 'next/dynamic'

const Map = dynamic(() => import('@/components/Map'), { ssr: false })

export default function HomeTemplate({ places }: MapProps) {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <LinkWrapper href="/about">
        <InfoOutline size={32} />
      </LinkWrapper>

      <Map places={places} />
    </div>
  )
}
