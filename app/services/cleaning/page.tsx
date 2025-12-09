"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Sparkles } from "lucide-react"

export default function CleaningServicePage() {
  const services = [
    { title: "Pre-Move Cleaning", desc: "Prepare your old space for handover" },
    { title: "Post-Move Cleaning", desc: "Get your new place ready to move in" },
    { title: "Deep Cleaning", desc: "Thorough cleaning of all areas" },
    { title: "Eco-Friendly Cleaning", desc: "Sustainable cleaning solutions" },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-r from-primary to-accent text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Professional Cleaning Services</h1>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl">
            Spotless results every time. Perfect for move-out and move-in cleaning.
          </p>
          <Link href="/booking">
            <Button size="lg" variant="secondary">
              Book Cleaning
            </Button>
          </Link>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Cleaning Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((svc) => (
              <Card key={svc.title}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Sparkles className="text-primary" size={24} />
                    {svc.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{svc.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Choose K&A Cleaning?</h2>
          <div className="space-y-4 max-w-2xl mx-auto">
            {[
              "Trained and certified cleaners",
              "Eco-friendly cleaning products",
              "100% satisfaction guarantee",
              "Flexible scheduling",
              "Competitive pricing",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 p-4 bg-slate-50 rounded-lg">
                <CheckCircle className="text-primary" size={24} />
                <span className="font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
