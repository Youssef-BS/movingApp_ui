"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, MapPin, ClipboardList, CheckCircle, ChevronLeft } from "lucide-react"
import { MapBooking } from "@/components/map-booking"
import { translations } from "@/lib/translations"

export default function BookingPage() {
  const t = translations.de
  const [step, setStep] = useState(1)

  const [formData, setFormData] = useState({
    name: "John Doe",
    email: "john@example.com",
    phone: "+49 123 456789",
    service: "moving",
    date: "2025-01-15",
    time: "09:00",
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const steps = [
    { number: 1, title: "Ihre Infos", icon: ClipboardList },
    { number: 2, title: "Service wählen", icon: CheckCircle },
    { number: 3, title: "Orte & Zeit", icon: MapPin },
    { number: 4, title: "Bestätigung", icon: CheckCircle },
  ]

  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        {/* Step Indicator */}
        <div className="mb-12 animate-slide-in-up">
          <div className="flex justify-between">
            {steps.map((s, idx) => {
              const Icon = s.icon
              return (
                <div key={s.number} className="flex flex-col items-center flex-1">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 transition duration-300 ${
                      step >= s.number ? "bg-primary text-white shadow-lg" : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {step > s.number ? <CheckCircle size={24} /> : <Icon size={24} />}
                  </div>
                  <p
                    className={`text-sm text-center transition duration-300 ${
                      step >= s.number ? "text-primary font-medium" : "text-muted-foreground"
                    }`}
                  >
                    {s.title}
                  </p>
                  {idx < steps.length - 1 && (
                    <div
                      className={`h-1 w-full mt-2 transition duration-500 ${
                        step > s.number ? "bg-primary" : "bg-muted"
                      }`}
                    />
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* Step 1: User Info */}
        {step === 1 && (
          <Card className="animate-fade-in shadow-lg">
            <CardHeader>
              <CardTitle>Ihre Informationen</CardTitle>
              <CardDescription>Erzähle uns etwas über dich</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Vollständiger Name</label>
                <Input
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  placeholder="Max Mustermann"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <Input
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Telefon</label>
                <Input
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  placeholder="+49 123 456789"
                />
              </div>
            </CardContent>
          </Card>
        )}

        {/* Step 2: Service Selection */}
        {step === 2 && (
          <Card className="animate-fade-in shadow-lg">
            <CardHeader>
              <CardTitle>Service wählen</CardTitle>
              <CardDescription>Welchen Service benötigst du?</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { id: "moving", title: "Umzugsdienst" },
                { id: "cleaning", title: "Reinigungsdienst" },
                { id: "packing", title: "Verpackungsdienst" },
              ].map((svc) => (
                <button
                  key={svc.id}
                  onClick={() => handleInputChange("service", svc.id)}
                  className={`w-full p-4 border-2 rounded-lg text-left transition duration-300 ${
                    formData.service === svc.id
                      ? "border-primary bg-primary/5 shadow-md"
                      : "border-border hover:border-primary/50 hover:shadow-md"
                  }`}
                >
                  <span className="font-semibold">{svc.title}</span>
                </button>
              ))}
            </CardContent>
          </Card>
        )}

        {/* Step 3: Location & Time with Interactive Map */}
        {step === 3 && (
          <Card className="animate-fade-in shadow-lg">
            <CardHeader>
              <CardTitle>Ort & Zeit</CardTitle>
              <CardDescription>Wähle deine Orte auf der interaktiven Karte und Zeit</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Interactive Map Component */}
              <div className="bg-white rounded-lg overflow-hidden">
                <MapBooking />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Datum</label>
                  <Input
                    type="date"
                    value={formData.date}
                    onChange={(e) => handleInputChange("date", e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Zeit</label>
                  <Input
                    type="time"
                    value={formData.time}
                    onChange={(e) => handleInputChange("time", e.target.value)}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Step 4: Review */}
        {step === 4 && (
          <Card className="animate-fade-in shadow-lg">
            <CardHeader>
              <CardTitle>Buchung überprüfen</CardTitle>
              <CardDescription>Bitte überprüfe, ob alle Angaben korrekt sind</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-slate-50 rounded-lg animate-scale-in">
                  <p className="text-sm text-muted-foreground mb-1">Name</p>
                  <p className="font-semibold">{formData.name}</p>
                </div>
                <div className="p-4 bg-slate-50 rounded-lg animate-scale-in" style={{ animationDelay: "50ms" }}>
                  <p className="text-sm text-muted-foreground mb-1">Email</p>
                  <p className="font-semibold">{formData.email}</p>
                </div>
                <div className="p-4 bg-slate-50 rounded-lg animate-scale-in" style={{ animationDelay: "100ms" }}>
                  <p className="text-sm text-muted-foreground mb-1">Service</p>
                  <p className="font-semibold capitalize">{formData.service}</p>
                </div>
                <div className="p-4 bg-slate-50 rounded-lg animate-scale-in" style={{ animationDelay: "150ms" }}>
                  <p className="text-sm text-muted-foreground mb-1">Datum & Zeit</p>
                  <p className="font-semibold">
                    {formData.date} um {formData.time}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Navigation Buttons */}
        <div className="mt-8 flex gap-4 justify-between animate-slide-in-up">
          <Button
            variant="outline"
            onClick={() => setStep(Math.max(1, step - 1))}
            className={`transition-all duration-300 ${step === 1 ? "invisible" : ""}`}
          >
            <ChevronLeft size={18} className="mr-2" />
            Zurück
          </Button>
          <Button
            onClick={() => {
              if (step < 4) {
                setStep(step + 1)
              } else {
                console.log("[v0] Booking confirmed:", formData)
              }
            }}
            size="lg"
            className="transition-all duration-300 hover:shadow-lg"
          >
            {step === 4 ? "Buchung bestätigen" : "Weiter"}
            <ArrowRight size={18} className="ml-2" />
          </Button>
        </div>
      </div>
    </div>
  )
}
