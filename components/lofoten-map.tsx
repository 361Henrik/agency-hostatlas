"use client"

import { useEffect } from "react"
import { MapContainer, TileLayer, Polyline, Marker, Circle, useMap } from "react-leaflet"
import L from "leaflet"
import type { LofotenRoute } from "@/lib/lofoten-data"

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

// Meeting-point flag — always distinguishable from numbered POI markers so the
// return anchor reads at a glance ("if you can see the flag, you can get back").
function makeMeetingPointIcon() {
  return L.divIcon({
    className: "",
    html: `<div style="width:34px;height:34px;border-radius:8px;background:#C35C3C;border:2px solid #F5F0E8;display:flex;align-items:center;justify-content:center;box-shadow:0 2px 8px rgba(0,0,0,0.4);"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F5F0E8" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/></svg></div>`,
    iconSize: [34, 34],
    iconAnchor: [17, 17],
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

interface LofotenMapProps {
  route: LofotenRoute
  currentPosition?: [number, number] | null
  activePOIId?: string | null
  onPoiClick?: (poiId: string) => void
  interactive?: boolean
  trackPosition?: boolean
  /** Show the meeting-point flag at the route's end coordinates */
  showMeetingPoint?: boolean
  /** Draw the return path (guest position → meeting point) as a solid line */
  returnPath?: [number, number][] | null
  className?: string
}

export function LofotenMap({
  route,
  currentPosition,
  activePOIId,
  onPoiClick,
  interactive = true,
  trackPosition = false,
  showMeetingPoint = false,
  returnPath = null,
  className = "w-full h-full",
}: LofotenMapProps) {
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

      {/* Return path — solid terracotta, visually distinct from the dashed route line */}
      {returnPath && returnPath.length >= 2 && (
        <Polyline
          positions={returnPath}
          pathOptions={{ color: "#C35C3C", weight: 4, opacity: 0.9 }}
        />
      )}

      {/* Meeting-point flag */}
      {showMeetingPoint && (
        <Marker position={route.endCoords} icon={makeMeetingPointIcon()} />
      )}

      {/* Current position */}
      {currentPosition && (
        <>
          <Circle
            center={currentPosition}
            radius={5}
            pathOptions={{ color: "#1f4a3a", fillColor: "#c9a962", fillOpacity: 1, weight: 2 }}
          />
          <Circle
            center={currentPosition}
            radius={20}
            pathOptions={{ color: "#1f4a3a", fillColor: "#1f4a3a", fillOpacity: 0.15, weight: 0 }}
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
