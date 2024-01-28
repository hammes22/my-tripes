import {
  MapContainer,
  TileLayer,
  Marker,
  useMapEvent,
  Tooltip
} from 'react-leaflet'

import * as S from './styles'
import { mapView } from './config'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import { useRouter } from 'next/navigation'

type Place = {
  id: string
  name: string
  slug: string
  location: {
    latitude: number
    longitude: number
  }
}

export type MapProps = {
  places?: Place[]
}

const Map = ({ places }: MapProps) => {
  const icon = new L.Icon({
    iconRetinaUrl: '/leaflet/marker-icon-2x.png',
    iconUrl: '/leaflet/marker-icon.png',
    shadowUrl: '/leaflet/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  })

  const { push } = useRouter()

  return (
    <S.MapWrapper>
      <MapContainer
        center={mapView.center}
        zoom={mapView.zoom}
        maxBounds={[
          [-90, -180],
          [90, 180]
        ]}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <MapEvents />

        {places?.map(({ id, slug, name, location }) => {
          const { latitude, longitude } = location

          return (
            <Marker
              icon={icon}
              key={`place-${id}`}
              position={[latitude, longitude]}
              title={name}
              eventHandlers={{
                click: () => {
                  push(`/place/${slug}`)
                }
              }}
            >
              <Tooltip>{name}</Tooltip>
            </Marker>
          )
        })}
      </MapContainer>
    </S.MapWrapper>
  )
}

const MapEvents = () => {
  const map = useMapEvent('dragend', () => {
    mapView.setView(map.getCenter())
  })

  useMapEvent('zoomend', () => {
    mapView.setView(map.getCenter(), map.getZoom())
  })

  const width =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth

  if (width < 768) {
    map.setMinZoom(2)
  }

  return null
}

export default Map
