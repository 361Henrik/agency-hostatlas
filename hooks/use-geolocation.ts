"use client"

import { useState, useEffect } from "react"

export function useGeolocation() {
  const [position, setPosition] = useState<[number, number] | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (typeof window === "undefined" || !navigator.geolocation) {
      setError("Geolocation not supported")
      setLoading(false)
      return
    }

    const id = navigator.geolocation.watchPosition(
      (pos) => {
        setPosition([pos.coords.latitude, pos.coords.longitude])
        setLoading(false)
        setError(null)
      },
      (err) => {
        setError(err.message)
        setLoading(false)
      },
      { enableHighAccuracy: true, maximumAge: 5000, timeout: 10000 }
    )

    return () => navigator.geolocation.clearWatch(id)
  }, [])

  return { position, error, loading }
}
