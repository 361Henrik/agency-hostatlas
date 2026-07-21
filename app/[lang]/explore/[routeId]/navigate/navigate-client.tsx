"use client"

import { useState, useCallback } from "react"
import Image from "next/image"
import dynamic from "next/dynamic"
import { useRouter } from "next/navigation"
import { X, ChevronRight, Send, Flag, ChevronUp } from "lucide-react"
import { toast } from "sonner"
import { useLanguage } from "@/lib/language-context"
import { localizePath } from "@/lib/locale"
import { useGeolocation } from "@/hooks/use-geolocation"
import { useNearestPoi } from "@/hooks/use-nearest-poi"
import { useDepartureCountdown, type CountdownState } from "@/hooks/use-departure-countdown"
import { lofotenRoutes, poiTypeLabels, type POI } from "@/lib/lofoten-data"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer"

const LofotenMap = dynamic(
  () => import("@/components/lofoten-map").then((m) => m.LofotenMap),
  {
    ssr: false,
    loading: () => <div className="w-full h-full animate-pulse" style={{ backgroundColor: "#1a2b1f" }} />,
  }
)

const LiveViewCamera = dynamic(
  () => import("@/components/live-view-camera").then((m) => m.LiveViewCamera),
  { ssr: false }
)

function formatDistance(metres: number): string {
  if (metres < 1000) return `${metres}m`
  return `${(metres / 1000).toFixed(1)}km`
}

const countdownStyles: Record<CountdownState, React.CSSProperties> = {
  normal: {
    backgroundColor: "rgba(201,169,98,0.12)",
    border: "1px solid rgba(201,169,98,0.3)",
    color: "#C9A962",
  },
  warning: {
    backgroundColor: "rgba(195,92,60,0.16)",
    border: "1px solid rgba(195,92,60,0.45)",
    color: "#E28563",
  },
  critical: {
    backgroundColor: "#C35C3C",
    border: "1px solid #C35C3C",
    color: "#F5F0E8",
  },
}

export default function NavigateClient({ routeId }: { routeId: string }) {
  const { lang, t } = useLanguage()
  const router = useRouter()
  const route = lofotenRoutes.find((r) => r.id === routeId)
  if (!route) return null // server shell guarantees a valid id

  const { position, error: geoError } = useGeolocation()
  const { nearest, distanceMetres } = useNearestPoi(route.pois, position)
  const countdown = useDepartureCountdown(routeId, route.duration)

  const [activePOI, setActivePOI] = useState<POI | null>(null)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [showReturn, setShowReturn] = useState(false)

  // Return path: guest position → meeting point. Without a GPS fix, fall back
  // to the POI farthest from the meeting point — the worst-case return — so
  // the path is actually legible on the map (the route start sits ~80m from
  // the meeting point and would hide behind the flag marker).
  const returnOrigin =
    position ??
    route.pois.reduce((far, poi) => {
      const d = (c: [number, number]) =>
        (c[0] - route.endCoords[0]) ** 2 +
        ((c[1] - route.endCoords[1]) * Math.cos((route.endCoords[0] * Math.PI) / 180)) ** 2
      return d(poi.coordinates) > d(far) ? poi.coordinates : far
    }, route.startCoords)
  const returnPath: [number, number][] | null = showReturn
    ? [returnOrigin, route.endCoords]
    : null

  const handlePoiClick = useCallback(
    (poiId: string) => {
      const poi = route.pois.find((p) => p.id === poiId) ?? null
      setActivePOI(poi)
      setDrawerOpen(true)
    },
    [route.pois]
  )

  const handleSendMore = useCallback(
    (poi: POI) => {
      toast.success(t("poi_send_more_toast"), {
        description: poi.followUpTopic?.[lang] ?? poi.title[lang],
      })
    },
    [lang, t]
  )

  return (
    <div className="fixed inset-0 flex flex-col" style={{ backgroundColor: "#0F1F15" }}>
      {/* Header */}
      <div
        className="flex items-center justify-between px-4 py-3 shrink-0 z-10"
        style={{ backgroundColor: "rgba(15,31,21,0.97)", backdropFilter: "blur(10px)", borderBottom: "1px solid rgba(201,169,98,0.12)" }}
      >
        <div className="flex-1 min-w-0">
          <p className="font-sans truncate" style={{ fontSize: "0.75rem", color: "rgba(201,169,98,0.65)", letterSpacing: "0.08em" }}>
            {route.theme[lang]}
          </p>
          <p className="font-serif truncate" style={{ fontSize: "1rem", fontWeight: 500, color: "#F5F0E8" }}>
            {route.title[lang]}
          </p>
        </div>

        {/* Departure countdown — the safety layer, always visible */}
        {countdown.remainingMs !== null && (
          <div
            className={`ml-3 shrink-0 px-3 py-1.5 text-right ${countdown.state === "critical" ? "animate-pulse" : ""}`}
            style={{ ...countdownStyles[countdown.state], borderRadius: "6px" }}
          >
            <p
              className="font-sans font-medium uppercase"
              style={{ fontSize: "0.5625rem", letterSpacing: "0.14em", opacity: 0.8, lineHeight: 1.2 }}
            >
              {t("nav_departure_label")}
            </p>
            <p
              className="font-sans font-medium"
              style={{ fontSize: "1rem", lineHeight: 1.2, fontVariantNumeric: "tabular-nums" }}
            >
              {countdown.label}
            </p>
          </div>
        )}

        {/* Abort button */}
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <button
              className="ml-3 p-2 rounded-full transition-opacity hover:opacity-70"
              style={{ backgroundColor: "rgba(255,255,255,0.07)", color: "rgba(245,240,232,0.6)" }}
              aria-label={t("nav_exp_abort")}
            >
              <X className="h-4 w-4" strokeWidth={2} />
            </button>
          </AlertDialogTrigger>
          <AlertDialogContent style={{ backgroundColor: "#1F3528", border: "1px solid rgba(201,169,98,0.2)", color: "#F5F0E8" }}>
            <AlertDialogHeader>
              <AlertDialogTitle className="font-serif" style={{ color: "#C9A962" }}>
                {t("nav_exp_abort_confirm")}
              </AlertDialogTitle>
              <AlertDialogDescription style={{ color: "rgba(245,240,232,0.65)" }}>
                {t("nav_exp_abort_desc")}
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel
                className="font-sans"
                style={{ backgroundColor: "transparent", border: "1px solid rgba(201,169,98,0.25)", color: "#C9A962" }}
              >
                {t("nav_exp_abort_no")}
              </AlertDialogCancel>
              <AlertDialogAction
                className="font-sans"
                style={{ backgroundColor: "rgba(201,169,98,0.15)", color: "#C9A962", border: "1px solid rgba(201,169,98,0.3)" }}
                onClick={() => router.push(localizePath(`/explore/${routeId}`, lang))}
              >
                {t("nav_exp_abort_yes")}
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>

      {/* Map / Live tabs — fill remaining space */}
      <Tabs defaultValue="map" className="flex-1 flex flex-col overflow-hidden">
        <div className="flex-1 overflow-hidden relative">
          <TabsContent value="map" className="absolute inset-0 m-0">
            <LofotenMap
              route={route}
              currentPosition={position}
              activePOIId={activePOI?.id}
              onPoiClick={handlePoiClick}
              interactive
              trackPosition
              showMeetingPoint
              returnPath={returnPath}
              className="w-full h-full"
            />
          </TabsContent>

          <TabsContent value="live" className="absolute inset-0 m-0">
            <LiveViewCamera />
          </TabsContent>
        </div>

        {/* Next-stop bar */}
        {nearest && (
          <button
            onClick={() => handlePoiClick(nearest.id)}
            className="shrink-0 flex items-center gap-3 px-4 py-3 text-left transition-opacity hover:opacity-80"
            style={{ backgroundColor: "rgba(15,31,21,0.97)", borderTop: "1px solid rgba(201,169,98,0.12)", backdropFilter: "blur(10px)" }}
          >
            <ChevronRight className="h-4 w-4 shrink-0" style={{ color: "#C9A962" }} strokeWidth={2} />
            <div className="flex-1 min-w-0">
              <p className="font-sans truncate" style={{ fontSize: "0.75rem", color: "rgba(201,169,98,0.65)", letterSpacing: "0.06em" }}>
                {t("nav_exp_next_stop")}
              </p>
              <p className="font-serif truncate" style={{ fontSize: "1rem", fontWeight: 500, color: "#F5F0E8" }}>
                {nearest.title[lang]}
              </p>
            </div>
            {distanceMetres !== null && (
              <span className="font-sans shrink-0" style={{ fontSize: "0.875rem", color: "rgba(245,240,232,0.45)" }}>
                {formatDistance(distanceMetres)} {t("nav_exp_away")}
              </span>
            )}
          </button>
        )}

        {/* Meeting point — one tap away, per the operational-safety promise */}
        <div
          className="shrink-0"
          style={{ backgroundColor: "rgba(15,31,21,0.97)", borderTop: "1px solid rgba(201,169,98,0.12)", backdropFilter: "blur(10px)" }}
        >
          <button
            onClick={() => setShowReturn((v) => !v)}
            className="w-full flex items-center gap-3 px-4 py-3 text-left transition-opacity hover:opacity-80"
            aria-expanded={showReturn}
          >
            <span
              className="shrink-0 flex items-center justify-center"
              style={{
                width: "28px",
                height: "28px",
                borderRadius: "6px",
                backgroundColor: showReturn ? "#C35C3C" : "rgba(195,92,60,0.15)",
                border: "1px solid rgba(195,92,60,0.45)",
              }}
            >
              <Flag className="h-3.5 w-3.5" strokeWidth={2} style={{ color: showReturn ? "#F5F0E8" : "#E28563" }} />
            </span>
            <div className="flex-1 min-w-0">
              <p className="font-sans truncate" style={{ fontSize: "0.75rem", color: "rgba(201,169,98,0.65)", letterSpacing: "0.06em" }}>
                {t("nav_meeting_point")}
              </p>
              <p className="font-serif truncate" style={{ fontSize: "0.9375rem", fontWeight: 500, color: "#F5F0E8" }}>
                {showReturn ? t("nav_hide_return") : t("nav_show_return")}
              </p>
            </div>
            <ChevronUp
              className="h-4 w-4 shrink-0 transition-transform duration-200"
              style={{ color: "rgba(245,240,232,0.45)", transform: showReturn ? "rotate(180deg)" : "none" }}
              strokeWidth={2}
            />
          </button>
          {showReturn && (
            <p
              className="px-4 pb-3 font-sans"
              style={{ fontSize: "0.8125rem", lineHeight: 1.5, color: "rgba(245,240,232,0.6)" }}
            >
              {route.returnLogic[lang]}
            </p>
          )}
        </div>

        {/* Geolocation error */}
        {geoError && !position && (
          <div className="shrink-0 px-4 py-2 text-center" style={{ backgroundColor: "rgba(15,31,21,0.95)" }}>
            <p className="font-sans" style={{ fontSize: "0.8125rem", color: "rgba(245,240,232,0.4)" }}>
              {t("nav_exp_location_error")}
            </p>
          </div>
        )}

        {/* Privacy reassurance — subtle, always shown regardless of geoError state */}
        <div className="shrink-0 py-1 text-center" style={{ backgroundColor: "rgba(15,31,21,0.97)" }}>
          <p className="font-sans" style={{ fontSize: "0.6875rem", color: "rgba(245,240,232,0.35)" }}>
            {t("privacy_location_note")}
          </p>
        </div>

        {/* Tab bar */}
        <TabsList
          className="shrink-0 rounded-none h-12 w-full"
          style={{ backgroundColor: "#0F1F15", borderTop: "1px solid rgba(201,169,98,0.1)" }}
        >
          <TabsTrigger
            value="map"
            className="flex-1 rounded-none font-sans uppercase tracking-[0.1em] data-[state=active]:text-[#C9A962] data-[state=active]:bg-transparent"
            style={{ fontSize: "0.75rem", color: "rgba(245,240,232,0.45)" }}
          >
            {t("nav_exp_map_tab")}
          </TabsTrigger>
          <TabsTrigger
            value="live"
            className="flex-1 rounded-none font-sans uppercase tracking-[0.1em] data-[state=active]:text-[#C9A962] data-[state=active]:bg-transparent"
            style={{ fontSize: "0.75rem", color: "rgba(245,240,232,0.45)" }}
          >
            {t("nav_exp_live_tab")}
          </TabsTrigger>
        </TabsList>
      </Tabs>

      {/* POI drawer */}
      <Drawer open={drawerOpen} onOpenChange={setDrawerOpen}>
        <DrawerContent
          style={{ backgroundColor: "#1F3528", border: "1px solid rgba(201,169,98,0.15)", maxHeight: "80vh" }}
        >
          {activePOI && (
            <div className="overflow-y-auto pb-safe">
              {activePOI.imageUrl && (
                <div className="relative w-full overflow-hidden" style={{ height: "200px" }}>
                  <Image
                    src={activePOI.imageUrl}
                    alt={activePOI.title[lang]}
                    fill
                    className="object-cover"
                    sizes="100vw"
                  />
                </div>
              )}
              <DrawerHeader className="px-5 pt-5 pb-3">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <Badge
                      className="font-sans uppercase text-[10px] tracking-[0.1em] mb-2"
                      style={{
                        backgroundColor: "rgba(201,169,98,0.1)",
                        color: "rgba(201,169,98,0.8)",
                        border: "1px solid rgba(201,169,98,0.2)",
                        borderRadius: "2px",
                      }}
                    >
                      {poiTypeLabels[activePOI.type]?.[lang] ?? activePOI.type}
                    </Badge>
                    <DrawerTitle className="font-serif leading-[1.15]" style={{ fontSize: "1.375rem", fontWeight: 500, color: "#C9A962" }}>
                      {activePOI.title[lang]}
                    </DrawerTitle>
                  </div>
                </div>
              </DrawerHeader>

              <div className="px-5 pb-6">
                <p className="font-sans mb-6" style={{ fontSize: "1.0625rem", lineHeight: 1.7, color: "rgba(245,240,232,0.80)" }}>
                  {activePOI.description[lang]}
                </p>

                {activePOI.followUpTopic && (
                  <Button
                    onClick={() => handleSendMore(activePOI)}
                    className="w-full font-sans uppercase tracking-[0.08em] flex items-center justify-center gap-2"
                    style={{
                      backgroundColor: "rgba(201,169,98,0.12)",
                      color: "#C9A962",
                      border: "1px solid rgba(201,169,98,0.3)",
                      borderRadius: "2px",
                      fontSize: "0.8125rem",
                    }}
                    variant="ghost"
                  >
                    <Send className="h-3.5 w-3.5" strokeWidth={1.5} />
                    {t("poi_send_more")} {activePOI.followUpTopic[lang]}
                  </Button>
                )}
              </div>
            </div>
          )}
        </DrawerContent>
      </Drawer>
    </div>
  )
}
