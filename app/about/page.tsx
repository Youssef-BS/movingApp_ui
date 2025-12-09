"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Award, Globe, Users } from "lucide-react"

export default function AboutPage() {
  const milestones = [
    { year: "2015", milestone: "Company Founded" },
    { year: "2018", milestone: "Expanded to 5 Cities" },
    { year: "2022", milestone: "10,000+ Services Completed" },
    { year: "2025", milestone: "Premier Service Provider" },
  ]

  const values = [
    {
      icon: Award,
      title: "Excellence",
      desc: "We strive for excellence in every service we provide",
    },
    {
      icon: Users,
      title: "Customer Focus",
      desc: "Your satisfaction is our top priority",
    },
    {
      icon: Globe,
      title: "Reliability",
      desc: "Dependable service you can trust",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-r from-primary to-accent text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">About K&A Entrumplenung</h1>
          <p className="text-xl text-blue-100">Professional moving and cleaning services since 2015</p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-4">
                K&A Entrumplenung is dedicated to making moves and cleaning services stress-free, professional, and
                affordable for everyone in Germany.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                With over a decade of experience, our team has helped thousands of customers relocate with confidence
                and ease. We believe that quality service starts with caring professionals and attention to detail.
              </p>
              <div className="space-y-3">
                {["Trusted by 10,000+ customers", "200+ experienced professionals", "Available 24/7"].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle className="text-primary" size={24} />
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl h-96 flex items-center justify-center">
              <div className="text-6xl">🏢</div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value) => {
              const Icon = value.icon
              return (
                <Card key={value.title}>
                  <CardHeader>
                    <Icon className="text-primary mb-4" size={32} />
                    <CardTitle>{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{value.desc}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Journey</h2>
          <div className="space-y-6 max-w-2xl mx-auto">
            {milestones.map((item, idx) => (
              <div key={item.year} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-6 h-6 bg-primary rounded-full border-4 border-white" />
                  {idx < milestones.length - 1 && <div className="w-1 h-24 bg-primary/30 mt-4" />}
                </div>
                <div className="pb-12">
                  <p className="text-sm font-semibold text-primary">{item.year}</p>
                  <p className="text-lg font-semibold mt-1">{item.milestone}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
