"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Package, Shield, Zap } from "lucide-react"

export default function PackingServicePage() {
  const packingServices = [
    { title: "Fragile Item Packing", desc: "Specialized packaging for delicate items" },
    { title: "Furniture Wrapping", desc: "Protective wrapping for all furniture" },
    { title: "Custom Crates", desc: "Custom packaging for valuable items" },
    { title: "Unpacking Service", desc: "Professional unpacking and arrangement" },
  ]

  const features = [
    { icon: Package, title: "Quality Materials", desc: "Premium packing supplies" },
    { icon: Shield, title: "Full Protection", desc: "100% damage protection" },
    { icon: Zap, title: "Fast & Efficient", desc: "Quick packing process" },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-r from-primary to-accent text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Professional Packing Services</h1>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl">
            Expert packing ensures your belongings arrive safely. We use premium materials and proven techniques.
          </p>
          <Link href="/booking">
            <Button size="lg" variant="secondary">
              Book Packing Service
            </Button>
          </Link>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Packing Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {packingServices.map((svc) => (
              <Card key={svc.title}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Package className="text-primary" size={24} />
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

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Professional Packing?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature) => {
              const Icon = feature.icon
              return (
                <Card key={feature.title}>
                  <CardHeader>
                    <Icon className="text-primary mb-4" size={32} />
                    <CardTitle>{feature.title}</CardTitle>
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

      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Benefits of Our Packing Service</h2>
          <div className="space-y-4 max-w-2xl mx-auto">
            {[
              "Save time and reduce stress",
              "Professional packing techniques",
              "Premium packing materials included",
              "Fully insured items",
              "Expert handling of fragile items",
              "Customizable packing options",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 p-4 bg-white rounded-lg border border-border">
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
