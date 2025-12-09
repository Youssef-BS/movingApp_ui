"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Clock, Truck, AlertCircle, CheckCircle, MapIcon } from "lucide-react"
import { useState, useEffect } from "react"

export default function TrackingPage() {
  const [vehiclePosition, setVehiclePosition] = useState({ x: 50, y: 100 })
  const [elapsedTime, setElapsedTime] = useState(0)
  const [progress, setProgress] = useState(0)
  const [distance, setDistance] = useState(150)
  const [speed, setSpeed] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setElapsedTime((prev) => prev + 1)
      setProgress((prev) => {
        const newProgress = Math.min(prev + 0.5, 100)
        // Simulate smooth vehicle movement along route
        const t = newProgress / 100
        setVehiclePosition({
          x: 50 + (350 - 50) * t,
          y: 100 + (200 - 100) * t,
        })
        setDistance(Math.max(150 - 150 * t, 0))
        // Simulate speed variations
        setSpeed(Math.round(65 + Math.sin(t * Math.PI * 2) * 15))
        return newProgress
      })
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  const formattedTime = `${Math.floor(elapsedTime / 60)}h ${elapsedTime % 60}m`
  const eta = Math.max(135 - elapsedTime, 0)
  const formattedETA = `${Math.floor(eta / 60)}h ${eta % 60}m`
  const status = progress < 50 ? "Heading to Pickup" : progress < 100 ? "In Transit" : "Arriving Soon"
  const statusColor = progress < 50 ? "text-blue-600" : progress < 100 ? "text-yellow-600" : "text-green-600"
  const statusBg = progress < 50 ? "bg-blue-50" : progress < 100 ? "bg-yellow-50" : "bg-green-50"

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-5xl font-bold text-slate-900 mb-2">Live Tracking</h1>
          <p className="text-slate-600">Real-time service progress and driver information</p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-semibold text-slate-900">Journey Progress</h3>
            <span className="text-sm font-medium text-slate-600">{Math.round(progress)}%</span>
          </div>
          <div className="w-full h-3 bg-slate-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-blue-500 via-yellow-500 to-green-500 transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Map Section */}
          <div className="lg:col-span-2">
            <Card className="h-full shadow-lg">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <MapIcon className="w-5 h-5" />
                    Interactive Map
                  </CardTitle>
                  <span className="text-sm px-3 py-1 rounded-full bg-blue-100 text-blue-700 font-medium">Live</span>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="w-full h-96 bg-gradient-to-br from-blue-50 via-blue-25 to-cyan-50 rounded-lg flex items-center justify-center relative overflow-hidden border border-blue-100 shadow-inner">
                  {/* Grid Background */}
                  <div className="absolute inset-0 opacity-20">
                    <svg className="w-full h-full" viewBox="0 0 400 300">
                      <defs>
                        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#0ea5e9" strokeWidth="0.5" />
                        </pattern>
                      </defs>
                      <rect width="400" height="300" fill="url(#grid)" />
                    </svg>
                  </div>

                  {/* Route Visualization */}
                  <svg className="absolute inset-0 w-full h-full" style={{ pointerEvents: "none" }}>
                    {/* Main route line */}
                    <line x1="50" y1="100" x2="350" y2="200" stroke="#3b82f6" strokeWidth="3" opacity="0.3" />
                    <line
                      x1="50"
                      y1="100"
                      x2="350"
                      y2="200"
                      stroke="#3b82f6"
                      strokeWidth="2"
                      strokeDasharray="8,4"
                      opacity="0.8"
                    />

                    {/* Location markers */}
                    <circle cx="50" cy="100" r="14" fill="none" stroke="#3b82f6" strokeWidth="2" opacity="0.5" />
                    <circle cx="50" cy="100" r="8" fill="#3b82f6" />

                    <circle cx="350" cy="200" r="14" fill="none" stroke="#10b981" strokeWidth="2" opacity="0.5" />
                    <circle cx="350" cy="200" r="8" fill="#10b981" />

                    {/* Vehicle with glow effect */}
                    <circle cx={vehiclePosition.x} cy={vehiclePosition.y} r="16" fill="#f59e0b" opacity="0.3" />
                    <circle cx={vehiclePosition.x} cy={vehiclePosition.y} r="10" fill="#f59e0b" />
                  </svg>

                  {/* Vehicle Display */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div
                      className="transition-all duration-500 transform"
                      style={{
                        position: "absolute",
                        left: `${(vehiclePosition.x / 400) * 100}%`,
                        top: `${(vehiclePosition.y / 300) * 100}%`,
                        transform: "translate(-50%, -50%)",
                      }}
                    >
                      <div className="text-3xl animate-pulse">🚚</div>
                    </div>
                  </div>
                </div>

                {/* Location Details */}
                <div className="mt-6 space-y-3">
                  <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <CheckCircle className="text-blue-600 flex-shrink-0" size={22} />
                    <div className="flex-1">
                      <p className="text-sm text-slate-600 font-medium">Pickup Location</p>
                      <p className="font-semibold text-slate-900">123 Main St, Berlin</p>
                      <p className="text-xs text-slate-500 mt-1">Departure at 09:00 AM</p>
                    </div>
                  </div>
                  <div className={`flex items-center gap-3 p-4 rounded-lg border ${statusBg} border-yellow-200`}>
                    <Truck className={`${statusColor} flex-shrink-0`} size={22} />
                    <div className="flex-1">
                      <p className="text-sm text-slate-600 font-medium">Current Status</p>
                      <p className={`font-semibold ${statusColor}`}>{status}</p>
                      <p className="text-xs text-slate-500 mt-1">52.47°N, 13.38°E</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-green-50 rounded-lg border border-green-200">
                    <MapPin className="text-green-600 flex-shrink-0" size={22} />
                    <div className="flex-1">
                      <p className="text-sm text-slate-600 font-medium">Drop-off Location</p>
                      <p className="font-semibold text-slate-900">456 Oak Ave, Munich</p>
                      <p className="text-xs text-slate-500 mt-1">Estimated arrival in {formattedETA}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            {/* Booking Details Card */}
            <Card className="shadow-lg">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Booking Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border-b pb-3">
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Service</p>
                  <p className="font-semibold text-slate-900 mt-1">Moving Service</p>
                </div>
                <div className="border-b pb-3">
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Booking ID</p>
                  <p className="font-mono text-sm text-slate-900 mt-1">#BK-2025-001847</p>
                </div>
                <div className="border-b pb-3">
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Date</p>
                  <p className="font-semibold text-slate-900 mt-1">January 15, 2025</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Status</p>
                  <div className="flex items-center gap-2 mt-2">
                    <div className={`w-2 h-2 rounded-full ${statusBg.replace("bg-", "bg-").replace("50", "600")}`} />
                    <p className={`font-semibold ${statusColor}`}>{status}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* ETA Card */}
            <Card className="shadow-lg bg-gradient-to-br from-blue-50 to-blue-25">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Clock className="w-5 h-5 text-blue-600" />
                  Time & Distance
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-3 bg-white rounded-lg border border-blue-200">
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1">Elapsed</p>
                  <p className="text-2xl font-bold text-blue-600">{formattedTime}</p>
                </div>
                <div className="p-3 bg-white rounded-lg border border-blue-200">
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1">ETA</p>
                  <p className="text-2xl font-bold text-green-600">{formattedETA}</p>
                </div>
                <div className="p-3 bg-white rounded-lg border border-blue-200">
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1">Remaining</p>
                  <p className="text-2xl font-bold text-slate-900">{Math.round(distance)} km</p>
                </div>
              </CardContent>
            </Card>

            {/* Speed Card */}
            <Card className="shadow-lg">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Vehicle Info</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">Current Speed</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold text-yellow-600">{speed}</span>
                    <span className="text-slate-600">km/h</span>
                  </div>
                </div>
                <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-yellow-400 to-yellow-600 transition-all duration-300"
                    style={{ width: `${(speed / 100) * 100}%` }}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Driver Contact Card */}
            <Card className="shadow-lg">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Driver Contact
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1">Name</p>
                  <p className="font-semibold text-slate-900">Marcus Weber</p>
                </div>
                <button className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors shadow-sm">
                  Call Driver
                </button>
                <button className="w-full px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-900 rounded-lg font-medium transition-colors">
                  Message
                </button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Info Banner */}
        <Card className="bg-gradient-to-r from-blue-50 to-cyan-50 border-blue-200">
          <CardContent className="pt-6">
            <div className="flex items-start gap-3">
              <AlertCircle className="text-blue-600 flex-shrink-0 mt-0.5" size={20} />
              <div>
                <p className="font-semibold text-slate-900 mb-1">Real-time Updates</p>
                <p className="text-slate-700 text-sm">
                  The tracking information updates every 2 seconds. Driver location, speed, and ETA are refreshed in
                  real-time.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
