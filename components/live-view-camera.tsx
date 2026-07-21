"use client"

import { useEffect, useRef, useState } from "react"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/lib/language-context"

export function LiveViewCamera() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [error, setError] = useState<string | null>(null)
  const { t } = useLanguage()

  useEffect(() => {
    let stream: MediaStream | null = null

    navigator.mediaDevices
      ?.getUserMedia({ video: { facingMode: "environment" } })
      .then((s) => {
        stream = s
        if (videoRef.current) {
          videoRef.current.srcObject = s
        }
      })
      .catch(() => {
        setError(t("live_view_camera_error"))
      })

    return () => {
      stream?.getTracks().forEach((track) => track.stop())
    }
  }, [t])

  if (error) {
    return (
      <div className="w-full h-full flex items-center justify-center" style={{ backgroundColor: "#0d1a10" }}>
        <p className="font-sans text-center max-w-[28ch] px-6" style={{ fontSize: "1rem", color: "rgba(245,240,232,0.55)", lineHeight: 1.6 }}>
          {error}
        </p>
      </div>
    )
  }

  return (
    <div className="relative w-full h-full bg-black overflow-hidden">
      {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
      <video
        ref={videoRef}
        autoPlay
        playsInline
        muted
        className="w-full h-full object-cover"
      />

      {/* AR v2 badge overlay */}
      <div className="absolute top-4 left-4 pointer-events-none">
        <Badge
          className="font-sans uppercase text-[11px] tracking-[0.1em]"
          style={{
            backgroundColor: "rgba(0,0,0,0.55)",
            color: "rgba(201,169,98,0.9)",
            border: "1px solid rgba(201,169,98,0.3)",
            backdropFilter: "blur(8px)",
            borderRadius: "3px",
          }}
        >
          {t("live_view_ar_badge")}
        </Badge>
      </div>

      {/* Crosshair overlay */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="relative w-16 h-16 opacity-30">
          <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-[#C9A962]" />
          <div className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-[#C9A962]" />
          <div className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 border-[#C9A962]" />
          <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-[#C9A962]" />
        </div>
      </div>

      {/* Privacy reassurance overlay — subtle, bottom of camera view */}
      <div className="absolute bottom-2 left-0 right-0 flex justify-center px-4 pointer-events-none">
        <p
          className="font-sans text-center"
          style={{ fontSize: "0.6875rem", color: "rgba(245,240,232,0.45)", textShadow: "0 1px 3px rgba(0,0,0,0.6)" }}
        >
          {t("privacy_camera_note")}
        </p>
      </div>
    </div>
  )
}
