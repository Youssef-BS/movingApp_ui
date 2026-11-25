"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Truck, Users, Shield, Zap } from "lucide-react"

export default function MovingServicePage() {
  const features = [
    {
      icon: Truck,
      title: "Professionelle Ausstattung",
      desc: "Geeignete Fahrzeuge und professionelle Ausrüstung für eine zuverlässige Durchführung unserer Arbeiten.",
    },
    {
      icon: Users,
      title: "Erfahrenes Team",
      desc: "Ein engagiertes Team, das Ihre Entrümpelung sorgfältig und zuverlässig durchführt.",
    },
    {
      icon: Shield,
      title: "Sorgfältige Durchführung",
      desc: "Wir behandeln Ihre Räumlichkeiten und Gegenstände mit Sorgfalt und Verantwortung.",
    },
    {
      icon: Zap,
      title: "Schneller Service",
      desc: "Effiziente Planung und zügige Durchführung Ihrer Entrümpelung.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-r from-primary to-accent text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">
            Entrümpelung 
          </h1>

          <p className="text-xl text-blue-100 mb-8 max-w-2xl">
            Wir unterstützen Sie bei Entrümpelungen und en
            zuverlässig, unkompliziert und professionell.
          </p>

          <Link href="/booking">
            <Button size="lg" variant="secondary">
              Jetzt Anfrage stellen
            </Button>
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Warum K&A Entrümpelung?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => {
              const Icon = feature.icon

              return (
                <Card key={feature.title}>
                  <CardHeader>
                    <div className="mb-2">
                      <Icon className="text-primary" size={32} />
                    </div>
                    <CardTitle className="text-lg">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent>
                    <p className="text-muted-foreground">
                      {feature.desc}
                    </p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">
            So funktioniert es
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Dienstleistung auswählen",
                desc: "Wählen Sie die gewünschte Dienstleistung aus.",
              },
              {
                step: "2",
                title: "Standort angeben",
                desc: "Geben Sie den Standort Ihrer Immobilie oder Räumlichkeiten an.",
              },
              {
                step: "3",
                title: "Angebot erhalten",
                desc: "Wir erstellen Ihnen ein individuelles und unverbindliches Angebot.",
              },
            ].map((item) => (
              <Card key={item.step}>
                <CardHeader>
                  <div className="text-3xl font-bold text-primary mb-2">
                    {item.step}
                  </div>
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>

                <CardContent>
                  <p className="text-muted-foreground">
                    {item.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}