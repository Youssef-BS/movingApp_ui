"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Navigation, Zap, RouteIcon as RoutesIcon, Search } from "lucide-react"
import { translations } from "@/lib/translations"
import { Input } from "@/components/ui/input"

interface LocationPoint {
  lat: number
  lng: number
  address?: string
}

interface MapBookingProps {
  initialPickup?: LocationPoint | null
  initialDelivery?: LocationPoint | null
  onLocationsChange?: (pickup: LocationPoint | null, delivery: LocationPoint | null) => void
}

export function MapBooking({ initialPickup = null, initialDelivery = null, onLocationsChange }: MapBookingProps) {
  const t = translations.de
  const mapContainer = useRef<HTMLDivElement | null>(null)
  const mapRef = useRef<any>(null)
  const [pickupLocation, setPickupLocation] = useState<LocationPoint | null>(null)
  const [deliveryLocation, setDeliveryLocation] = useState<LocationPoint | null>(null)
  const [distance, setDistance] = useState<number | null>(null)
  const [estimatedPrice, setEstimatedPrice] = useState<number | null>(null)
  const [activeMode, setActiveMode] = useState<"pickup" | "delivery" | null>(null)
  const pickupMarker = useRef<any>(null)
  const deliveryMarker = useRef<any>(null)
  const routeLine = useRef<any>(null)

  const [showAdvanced, setShowAdvanced] = useState(false)
  const [lockMarkers, setLockMarkers] = useState(false)

  const [pickupAddress, setPickupAddress] = useState("")
  const [deliveryAddress, setDeliveryAddress] = useState("")

  async function setMarker(type: "pickup" | "delivery", lat: number, lng: number, address?: string) {
    const leaflet = await import("leaflet")
    if (!mapRef.current) return

    const iconUrl =
      type === "pickup"
        ? "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png"
        : "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png"

    const marker = leaflet
      .marker([lat, lng], {
        icon: leaflet.icon({
          iconUrl,
          shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
          iconSize: [25, 41],
          iconAnchor: [12, 41],
          popupAnchor: [1, -34],
          shadowSize: [41, 41],
        }),
      })
      .addTo(mapRef.current)

    const popupText = address || `${lat.toFixed(5)}, ${lng.toFixed(5)}`
    marker.bindPopup(popupText).openPopup()

    if (type === "pickup") {
      if (pickupMarker.current)
        try {
          mapRef.current.removeLayer(pickupMarker.current)
        } catch {}
      pickupMarker.current = marker
      setPickupLocation({ lat, lng, address })
      setPickupAddress(address || "")
    } else {
      if (deliveryMarker.current)
        try {
          mapRef.current.removeLayer(deliveryMarker.current)
        } catch {}
      deliveryMarker.current = marker
      setDeliveryLocation({ lat, lng, address })
      setDeliveryAddress(address || "")
    }
  }

  function clearPoints() {
    if (pickupMarker.current && mapRef.current)
      try {
        mapRef.current.removeLayer(pickupMarker.current)
      } catch {}
    if (deliveryMarker.current && mapRef.current)
      try {
        mapRef.current.removeLayer(deliveryMarker.current)
      } catch {}
    if (routeLine.current && mapRef.current)
      try {
        mapRef.current.removeLayer(routeLine.current)
      } catch {}
    pickupMarker.current = null
    deliveryMarker.current = null
    routeLine.current = null
    setPickupLocation(null)
    setDeliveryLocation(null)
    setDistance(null)
    setEstimatedPrice(null)
    setPickupAddress("")
    setDeliveryAddress("")
  }

  useEffect(() => {
    if (!mapContainer.current || mapRef.current) return
    let mounted = true
    ;(async () => {
      const leaflet = await import("leaflet")
      const map = leaflet
        .map(mapContainer.current!, {
          zoomAnimation: true,
          fadeAnimation: true,
          markerZoomAnimation: true,
        })
        .setView([51.1657, 10.4515], 6)

      leaflet
        .tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution: "&copy; OpenStreetMap contributors",
          maxZoom: 19,
        })
        .addTo(map)

      mapRef.current = map

      map.on("click", (e: any) => {
        if (lockMarkers) return
        const { lat, lng } = e.latlng
        const target: "pickup" | "delivery" = activeMode
          ? activeMode
          : pickupLocation == null
            ? "pickup"
            : deliveryLocation == null
              ? "delivery"
              : "pickup"
        setMarker(target, lat, lng, undefined)
        if (activeMode) setActiveMode(null)
      })

      if (!mounted) return
    })()

    return () => {
      mounted = false
      if (mapRef.current) {
        mapRef.current.remove()
        mapRef.current = null
      }
    }
  }, [lockMarkers, activeMode, pickupLocation, deliveryLocation])

  useEffect(() => {
    if (initialPickup) setMarker("pickup", initialPickup.lat, initialPickup.lng, initialPickup.address)
  }, [initialPickup])

  useEffect(() => {
    if (initialDelivery) setMarker("delivery", initialDelivery.lat, initialDelivery.lng, initialDelivery.address)
  }, [initialDelivery])

  useEffect(() => {
    if (onLocationsChange) onLocationsChange(pickupLocation, deliveryLocation)
  }, [pickupLocation, deliveryLocation, onLocationsChange])

  useEffect(() => {
    if (!pickupLocation || !deliveryLocation || !mapRef.current) return

    let canceled = false
    ;(async () => {
      const leaflet = await import("leaflet")
      const dist = leaflet
        .latLng(pickupLocation.lat, pickupLocation.lng)
        .distanceTo(leaflet.latLng(deliveryLocation.lat, deliveryLocation.lng))

      const distanceInKm = dist / 1000
      if (canceled) return
      setDistance(Number.parseFloat(distanceInKm.toFixed(2)))

      const basePrice = 50
      const pricePerKm = 2.5
      const calculatedPrice = basePrice + distanceInKm * pricePerKm
      setEstimatedPrice(Number.parseFloat(calculatedPrice.toFixed(2)))

      if (routeLine.current)
        try {
          mapRef.current.removeLayer(routeLine.current)
        } catch {}
      routeLine.current = leaflet
        .polyline(
          [
            [pickupLocation.lat, pickupLocation.lng],
            [deliveryLocation.lat, deliveryLocation.lng],
          ],
          { color: "#4285f4", weight: 3, opacity: 0.8, dashArray: "5, 5", lineCap: "round" },
        )
        .addTo(mapRef.current)

      const bounds = leaflet.latLngBounds(
        [pickupLocation.lat, pickupLocation.lng],
        [deliveryLocation.lat, deliveryLocation.lng],
      )
      mapRef.current.fitBounds(bounds, { padding: [50, 50], animate: true, duration: 1 })
    })()

    return () => {
      canceled = true
    }
  }, [pickupLocation, deliveryLocation])

  return (
    <div className="w-full space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Map Container */}
        <div className="lg:col-span-2 animate-fade-in">
          <Card className="overflow-hidden shadow-lg hover:shadow-xl smooth-transition">
            <div ref={mapContainer} className="h-96 lg:h-[500px] w-full rounded-lg" style={{ minHeight: "400px" }} />
          </Card>
        </div>

        {/* Booking Panel */}
        <div className="animate-slide-in-right">
          <Card className="shadow-lg sticky top-4 hover:shadow-xl smooth-transition">
            <CardHeader className="bg-gradient-to-r from-primary/10 to-accent/10 pb-4">
              <CardTitle className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-accent" />
                {t.mapBooking}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 mt-4">
              <div className="space-y-3">
                <div className="space-y-2">
                  <label className="text-sm font-semibold flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    {t.pickupLocation}
                  </label>
                  <div className="relative">
                    <Input
                      placeholder={t.searchAddress}
                      value={pickupAddress}
                      onChange={(e) => setPickupAddress(e.target.value)}
                      className="pl-10"
                    />
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  </div>
                  <Button
                    onClick={() => setActiveMode("pickup")}
                    variant={activeMode === "pickup" ? "default" : "outline"}
                    className="w-full smooth-transition"
                    size="sm"
                  >
                    <Navigation className="w-4 h-4 mr-2" />
                    {pickupLocation
                      ? `${pickupLocation.lat.toFixed(4)}°, ${pickupLocation.lng.toFixed(4)}°`
                      : "Click to select"}
                  </Button>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold flex items-center gap-2">
                    <RoutesIcon className="w-4 h-4 text-accent" />
                    {t.deliveryLocation}
                  </label>
                  <div className="relative">
                    <Input
                      placeholder={t.searchAddress}
                      value={deliveryAddress}
                      onChange={(e) => setDeliveryAddress(e.target.value)}
                      className="pl-10"
                    />
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  </div>
                  <Button
                    onClick={() => setActiveMode("delivery")}
                    variant={activeMode === "delivery" ? "default" : "outline"}
                    className="w-full smooth-transition"
                    size="sm"
                  >
                    <Navigation className="w-4 h-4 mr-2" />
                    {deliveryLocation
                      ? `${deliveryLocation.lat.toFixed(4)}°, ${deliveryLocation.lng.toFixed(4)}°`
                      : "Click to select"}
                  </Button>
                </div>
              </div>

              {/* Distance & Price */}
              {distance && estimatedPrice && (
                <div className="space-y-3 pt-4 border-t border-border animate-scale-in">
                  <div className="bg-primary/10 p-4 rounded-lg border border-primary/20 hover:bg-primary/15 smooth-transition">
                    <p className="text-sm text-muted-foreground mb-1 flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      {t.distance}
                    </p>
                    <p className="text-2xl font-bold text-primary">{distance} km</p>
                  </div>
                  <div className="bg-accent/10 p-4 rounded-lg border border-accent/20 hover:bg-accent/15 smooth-transition">
                    <p className="text-sm text-muted-foreground mb-1">{t.estimatedPrice}</p>
                    <p className="text-2xl font-bold text-accent">€{estimatedPrice}</p>
                  </div>
                </div>
              )}

              {/* Advanced Settings */}
              <div className="mt-2 p-3 bg-muted/5 rounded-md border border-border">
                <button
                  className="text-sm font-medium underline smooth-transition hover:text-primary"
                  onClick={() => setShowAdvanced((s) => !s)}
                >
                  {t.advancedSettings}
                </button>

                {showAdvanced && (
                  <div className="mt-3 space-y-3">
                    <label
                      className="flex items-center gap-3 p-2 rounded smooth-transition cursor-pointer"
                      style={{ backgroundColor: "rgba(0, 0, 0, 0.02)" }}
                    >
                      <input
                        type="checkbox"
                        checked={lockMarkers}
                        onChange={() => setLockMarkers((s) => !s)}
                        className="rounded"
                      />
                      <span className="text-sm">{t.lockMarkers}</span>
                    </label>
                    <Button className="w-full bg-transparent" variant="outline" size="sm" onClick={() => clearPoints()}>
                      {t.clearPoints}
                    </Button>
                  </div>
                )}
              </div>

              {/* Book Button */}
              <Button
                disabled={!distance || !estimatedPrice}
                className="w-full mt-4 smooth-transition hover:shadow-lg transform hover:scale-105 bg-gradient-to-r from-primary to-primary/80"
              >
                {t.bookService}
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Instructions Card */}
      <Card className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 border-blue-200 dark:border-blue-800 animate-fade-in hover:shadow-md smooth-transition">
        <CardContent className="pt-6">
          <p className="text-sm font-medium flex items-center gap-2 mb-2">
            <Zap className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            Schnellstart
          </p>
          <p className="text-sm text-muted-foreground">
            {activeMode === "pickup"
              ? "Klicke auf der Karte, um deinen Abholort zu wählen"
              : activeMode === "delivery"
                ? "Klicke auf der Karte, um deinen Lieferort zu wählen"
                : "Klicke auf einen Button unten und markiere deine Orte auf der Karte oder nutze die Suchfelder"}
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
