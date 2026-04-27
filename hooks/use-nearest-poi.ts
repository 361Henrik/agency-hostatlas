"use client"

import { useMemo } from "react"
import type { POI } from "@/lib/oslo-data"

function haversineMetres(a: [number, number], b: [number, number]): number {
  const R = 6371000
  const dLat = ((b[0] - a[0]) * Math.PI) / 180
  const dLon = ((b[1] - a[1]) * Math.PI) / 180
  const lat1 = (a[0] * Math.PI) / 180
  const lat2 = (b[0] * Math.PI) / 180
  const x = Math.sin(dLat / 2) ** 2 + Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLon / 2) ** 2
  return R * 2 * Math.atan2(Math.sqrt(x), Math.sqrt(1 - x))
}

export function useNearestPoi(
  pois: POI[],
  currentPosition: [number, number] | null
) {
  return useMemo(() => {
    if (!currentPosition || pois.length === 0) return { nearest: null, distanceMetres: null, index: -1 }

    let nearestIndex = 0
    let minDist = Infinity

    pois.forEach((poi, i) => {
      const d = haversineMetres(currentPosition, poi.coordinates)
      if (d < minDist) {
        minDist = d
        nearestIndex = i
      }
    })

    return {
      nearest: pois[nearestIndex],
      distanceMetres: Math.round(minDist),
      index: nearestIndex,
    }
  }, [pois, currentPosition])
}
