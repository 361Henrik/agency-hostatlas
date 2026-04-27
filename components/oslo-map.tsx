"use client"

import { useEffect } from "react"
import { MapContainer, TileLayer, Polyline, Marker, Circle, useMap } from "react-leaflet"
import L from "leaflet"
import type { OsloRoute } from "@/lib/oslo-data"

// Fix Leaflet default icon issue in Next.js
if (typeof window !== "undefined") {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  delete (L.Icon.Default.prototype as any)._getIconUrl
  L.Icon.Default.mergeOptions({
    iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
    iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
    shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  })
}

function makePoiIcon(index: number, active: boolean) {
  const bg = active ? "#C9A962" : "#1F3528"
  const color = active ? "#1F3528" : "#C9A962"
  return L.divIcon({
    className: "",
    html: `<div style="width:32px;height:32px;border-radius:50%;background:${bg};border:2px solid ${color};display:flex;align-items:center;justify-content:center;font-family:serif;font-size:13px;font-weight:600;color:${color};box-shadow:0 2px 6px rgba(0,0,0,0.35);">${index + 1}</div>`,
    iconSize: [32, 32],
    iconAnchor: [16, 16],
  })
}

function PositionTracker({ position }: { position: [number, number] }) {
  const map = useMap()
  useEffect(() => {
    map.setView(position, map.getZoom(), { animate: true })
  }, [map, position])
  return null
}

interface OsloMapProps {
  route: OsloRoute
  currentPosition?: [number, number] | null
  activePOIId?: string | null
  onPoiClick?: (poiId: string) => void
  interactive?: boolean
  trackPosition?: boolean
  className?: string
}

export function OsloMap({
  route,
  currentPosition,
  activePOIId,
  onPoiClick,
  interactive = true,
  trackPosition = false,
  className = "w-full h-full",
}: OsloMapProps) {
  const center = route.startCoords
  const routeLine = route.pois.map((p) => p.coordinates)

  return (
    <MapContainer
      center={center}
      zoom={15}
      className={className}
      zoomControl={interactive}
      dragging={interactive}
      scrollWheelZoom={false}
      style={{ background: "#1a2b1f" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      />

      {/* Route line */}
      <Polyline
        positions={routeLine}
        pathOptions={{ color: "#C9A962", weight: 3, opacity: 0.85, dashArray: "8 5" }}
      />

      {/* POI markers */}
      {route.pois.map((poi, i) => (
        <Marker
          key={poi.id}
          position={poi.coordinates}
          icon={makePoiIcon(i, poi.id === activePOIId)}
          eventHandlers={{
            click: () => onPoiClick?.(poi.id),
          }}
        />
      ))}

      {/* Current position */}
      {currentPosition && (
        <>
          <Circle
            center={currentPosition}
            radius={5}
            pathOptions={{ color: "#3B82F6", fillColor: "#3B82F6", fillOpacity: 1, weight: 2 }}
          />
          <Circle
            center={currentPosition}
            radius={20}
            pathOptions={{ color: "#3B82F6", fillColor: "#3B82F6", fillOpacity: 0.15, weight: 0 }}
          />
        </>
      )}

      {/* Auto-pan to position */}
      {trackPosition && currentPosition && (
        <PositionTracker position={currentPosition} />
      )}
    </MapContainer>
  )
}
