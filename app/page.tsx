"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Truck, Sparkles, MapPin, Users, Clock, CheckCircle, Zap } from "lucide-react"
import { translations } from "@/lib/translations"

export default function HomePage() {
  const t = translations.de

  const services = [
    {
      icon: Truck,
      title: t.movingServices,
      description: t.movingDescription,
      link: "/services/moving",
      gradient: "from-blue-600 to-blue-400",
    },
    {
      icon: Sparkles,
      title: t.cleaningServices,
      description: t.cleaningDescription,
      link: "/services/cleaning",
      gradient: "from-orange-600 to-orange-400",
    },
    {
      icon: MapPin,
      title: t.packingServices,
      description: t.packingDescription,
      link: "/services/packing",
      gradient: "from-green-600 to-green-400",
    },
  ]

  const features = [
    {
      icon: Users,
      title: t.expertTeam,
      description: t.expertTeamDesc,
    },
    {
      icon: Clock,
      title: t.quickService,
      description: t.quickServiceDesc,
    },
    {
      icon: CheckCircle,
      title: t.qualityAssured,
      description: t.qualityAssuredDesc,
    },
  ]

  const testimonials = [
    {
      name: "Maria Schmidt",
      role: "Berlin",
      content: t.testimonial1,
    },
    {
      name: "Hans Mueller",
      role: "Munich",
      content: t.testimonial2,
    },
    {
      name: "Sarah Weber",
      role: "Frankfurt",
      content: t.testimonial3,
    },
  ]

  return (
    <div className="w-full">
      <section className="relative bg-gradient-to-r from-primary via-primary/80 to-accent text-white py-24 overflow-hidden">
        {/* Background animation elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 -left-40 w-80 h-80 bg-white rounded-full blur-3xl animate-float" />
          <div
            className="absolute bottom-0 -right-40 w-80 h-80 bg-accent rounded-full blur-3xl animate-float"
            style={{ animationDelay: "1s" }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance animate-slide-in-up">{t.heroTitle}</h1>
            <p
              className="text-xl md:text-2xl mb-8 text-blue-100 max-w-2xl mx-auto text-balance animate-slide-in-up"
              style={{ animationDelay: "100ms" }}
            >
              {t.heroDescription}
            </p>
            <div
              className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-in-up"
              style={{ animationDelay: "200ms" }}
            >
              <Link href="/booking">
                <Button
                  size="lg"
                  variant="secondary"
                  className="gap-2 hover:shadow-lg smooth-transition transform hover:scale-105"
                >
                  {t.bookNow}
                  <ArrowRight size={20} />
                </Button>
              </Link>
              <Link href="/services/moving">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-white border-white hover:bg-white/20 bg-transparent smooth-transition transform hover:scale-105"
                >
                  {t.learnMore}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4 animate-fade-in text-balance">
            {t.movingServices === "Umzugsdienste" ? "Unsere Dienstleistungen" : "Our Services"}
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            {t.movingServices === "Umzugsdienste"
              ? "Professionelle Services für jeden Umzug"
              : "Professional services for every move"}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <Link key={service.title} href={service.link}>
                  <Card
                    className="h-full hover:shadow-2xl smooth-transition transform hover:scale-105 cursor-pointer group overflow-hidden"
                    style={{
                      animationDelay: `${index * 100}ms`,
                    }}
                  >
                    <div className={`h-1 bg-gradient-to-r ${service.gradient}`} />
                    <CardHeader>
                      <div
                        className={`mb-4 p-3 bg-gradient-to-br ${service.gradient} rounded-lg w-fit transform smooth-transition group-hover:scale-110 text-white`}
                      >
                        <Icon size={24} />
                      </div>
                      <CardTitle>{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">{service.description}</CardDescription>
                    </CardContent>
                  </Card>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4 animate-fade-in text-balance">
            {t.expertTeam === "Expertenteam" ? "Warum K&A?" : "Why Choose K&A?"}
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Wir setzen auf Qualität, Zuverlässigkeit und persönliche Betreuung
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div
                  key={feature.title}
                  className="text-center animate-scale-in group"
                  style={{
                    animationDelay: `${index * 150}ms`,
                  }}
                >
                  <div className="mb-4 p-4 bg-primary/10 rounded-full w-fit mx-auto smooth-transition group-hover:bg-primary/20 group-hover:scale-110">
                    <Icon className="text-primary" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4 animate-fade-in text-balance">{t.whatCustomersSay}</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Höre von unseren zufriedenen Kunden
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={testimonial.name}
                className="animate-slide-in-up smooth-transition transform hover:scale-105 hover:shadow-xl"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <CardHeader>
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className="animate-pulse-slow text-lg"
                        style={{
                          animationDelay: `${i * 100}ms`,
                        }}
                      >
                        ⭐
                      </span>
                    ))}
                  </div>
                  <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                  <CardDescription>{testimonial.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic">"{testimonial.content}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-r from-primary to-accent text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute top-1/2 -right-40 w-80 h-80 bg-white rounded-full blur-3xl animate-float"
            style={{ animationDelay: "2s" }}
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-slide-in-up text-balance">{t.readyToMove}</h2>
          <p className="text-xl mb-8 text-blue-100 animate-slide-in-up max-w-2xl mx-auto">{t.startBooking}</p>
          <Link href="/booking" className="inline-block">
            <Button
              size="lg"
              variant="secondary"
              className="gap-2 hover:shadow-lg smooth-transition transform hover:scale-105 animate-slide-in-up"
              style={{ animationDelay: "200ms" }}
            >
              {t.bookYourService}
              <ArrowRight size={20} />
            </Button>
          </Link>
        </div>
      </section>

      {/* Consultant Link Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-2 border-primary/20 hover:border-primary/50 smooth-transition">
            <CardContent className="pt-8">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">
                    <Zap className="text-accent" />
                    Consultant Operations Dashboard
                  </h3>
                  <p className="text-muted-foreground mb-4">Verfolge die Leistung und Operationen unserer Berater</p>
                </div>
                <Link href="/consultant">
                  <Button className="gap-2 transform hover:scale-105">
                    Dashboard öffnen
                    <ArrowRight size={18} />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
