"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Phone } from "lucide-react"

export default function TeamPage() {
  const teamMembers = [
    {
      name: "Karim Guetari",
      role: "Geschäftsführung",
      bio: "Organisation, Kundenbetreuung und professionelle Durchführung unserer Dienstleistungen.",
      avatar: "KG",
    },
    {
      name: "Adel Guetari",
      role: "Geschäftsführung",
      bio: "Planung, Koordination und zuverlässige Umsetzung unserer Entrümpelungsarbeiten.",
      avatar: "AG",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Kopfbereich */}
      <section className="bg-gradient-to-r from-primary to-accent text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">
            Unser Team
          </h1>
          <p className="text-xl text-blue-100">
            Persönlich, zuverlässig und engagiert für Ihre Zufriedenheit.
          </p>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto text-lg">
            Hinter K&A Entrümpelung stehen Karim Guetari und Adel Guetari.
            Gemeinsam kümmern wir uns um Ihre Anliegen und sorgen für eine
            zuverlässige, professionelle und unkomplizierte Abwicklung Ihrer
            Entrümpelung,  und Entsorgung.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {teamMembers.map((member) => (
              <Card key={member.name} className="hover:shadow-lg transition">
                <CardContent className="pt-8 pb-8">
                  <div className="text-center">
                    <Avatar className="w-24 h-24 mx-auto mb-4">
                      <AvatarFallback className="text-lg font-semibold">
                        {member.avatar}
                      </AvatarFallback>
                    </Avatar>

                    <h3 className="font-semibold text-xl">
                      {member.name}
                    </h3>

                    <p className="text-sm text-primary font-medium mb-3">
                      {member.role}
                    </p>

                    <p className="text-sm text-muted-foreground">
                      {member.bio}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Kontakt */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Wir sind für Sie da!
          </h2>

          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Sie benötigen Unterstützung bei einer Entrümpelung,
             oder Entsorgung? Kontaktieren Sie uns gerne.
            Wir beraten Sie persönlich und erstellen ein unverbindliches Angebot.
          </p>

          <div className="flex justify-center">
            <div className="flex items-center gap-3 p-5 bg-slate-50 rounded-lg">
              <Phone className="text-primary" size={24} />

              <a
                href="tel:+491733271517"
                className="font-semibold text-primary text-lg hover:underline"
              >
                +49 173 3271517
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
