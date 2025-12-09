"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Truck, Users, Shield, Zap } from "lucide-react"

export default function MovingServicePage() {
  const features = [
    { icon: Truck, title: "Professional Equipment", desc: "Latest moving equipment and vehicles" },
    { icon: Users, title: "Expert Team", desc: "Trained and experienced movers" },
    { icon: Shield, title: "Insured", desc: "Full coverage on all belongings" },
    { icon: Zap, title: "Fast Service", desc: "Quick and efficient moving process" },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-r from-primary to-accent text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Professional Moving Services</h1>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl">
            Stress-free moving with our experienced team. Local and long-distance options available.
          </p>
          <Link href="/booking">
            <Button size="lg" variant="secondary">
              Book Now
            </Button>
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Choose Our Moving Service?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => {
              const Icon = feature.icon
              return (
                <Card key={feature.title}>
                  <CardHeader>
                    <div className="mb-2">
                      <Icon className="text-primary" size={32} />
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{feature.desc}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: "1", title: "Choose Service", desc: "Select your moving service type" },
              { step: "2", title: "Select Locations", desc: "Pick your pickup and drop-off locations on the map" },
              { step: "3", title: "Get Quote", desc: "Receive a custom quote based on your distance and service" },
            ].map((item) => (
              <Card key={item.step}>
                <CardHeader>
                  <div className="text-3xl font-bold text-primary mb-2">{item.step}</div>
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
