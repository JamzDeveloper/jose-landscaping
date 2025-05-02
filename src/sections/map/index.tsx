'use client'

import dynamic from 'next/dynamic'

// Importar el mapa sin SSR
const MapClient = dynamic(() => import('@/components/map'), { ssr: false })

export default function MapWrapper() {
  return <MapClient />
}
