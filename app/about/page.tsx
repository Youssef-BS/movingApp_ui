"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Award, Globe, Users } from "lucide-react"

export default function AboutPage() {
  const milestones = [
    { year: "2015", milestone: "Unternehmensgründung" },
    { year: "2018", milestone: "Erweiterung des Einsatzgebiets" },
    { year: "2022", milestone: "Ausbau unserer Dienstleistungen" },
    { year: "2025", milestone: "Zuverlässiger Partner für Privatkunden und Makler" },
  ]

  const values = [
    {
      icon: Award,
      title: "Qualität & Professionalität",
      desc: "Wir legen großen Wert auf sorgfältige Arbeit, professionelle Abläufe und höchste Qualität bei jeder Entrümpelung.",
    },
    {
      icon: Users,
      title: "Kundenzufriedenheit",
      desc: "Ihre Zufriedenheit steht für uns an erster Stelle. Wir gehen individuell auf Ihre Wünsche und Bedürfnisse ein.",
    },
    {
      icon: Globe,
      title: "Zuverlässigkeit",
      desc: "Wir stehen für pünktliche Termine, transparente Preise und eine zuverlässige Durchführung unserer Dienstleistungen.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-r from-primary to-accent text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">
            Über K&A Entrümpelung
          </h1>
          <p className="text-xl text-blue-100">
            Ihr zuverlässiger Partner für Entrümpelungen, en
            und Entsorgung in Weinstadt und Umgebung.
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Unsere Mission
              </h2>

              <p className="text-lg text-muted-foreground mb-4">
                K&A Entrümpelung steht für zuverlässige, schnelle und
                diskrete Dienstleistungen rund um en,
                Wohnungs- und Hausentrümpelungen sowie fachgerechte Entsorgung.
                Wir möchten unseren Kunden die Arbeit abnehmen und für eine
                unkomplizierte und stressfreie Abwicklung sorgen.
              </p>

              <p className="text-lg text-muted-foreground mb-6">
                Ob Keller, Dachboden, Garage, Garten, Wohnung, Haus oder Büro –
                wir kümmern uns um die Räumung und sorgen auf Wunsch für eine
                besenreine Übergabe. Dabei legen wir besonderen Wert auf
                transparente Festpreise, sorgfältige Arbeit und einen
                persönlichen Service.
              </p>

              <div className="space-y-3">
                {[
                  "Zuverlässige und termingerechte Durchführung",
                  "Faire und transparente Festpreise",
                  "Besenreine Übergabe inklusive",
                  "Diskreter und professioneller Service",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle className="text-primary" size={24} />
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl h-96 flex items-center justify-center">
              <div className="text-6xl">🏠</div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Unsere Werte
          </h2>

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
                    <p className="text-muted-foreground">
                      {value.desc}
                    </p>
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
          <h2 className="text-3xl font-bold text-center mb-12">
            Unser Weg
          </h2>

          <div className="space-y-6 max-w-2xl mx-auto">
            {milestones.map((item, idx) => (
              <div key={item.year} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-6 h-6 bg-primary rounded-full border-4 border-white" />

                  {idx < milestones.length - 1 && (
                    <div className="w-1 h-24 bg-primary/30 mt-4" />
                  )}
                </div>

                <div className="pb-12">
                  <p className="text-sm font-semibold text-primary">
                    {item.year}
                  </p>

                  <p className="text-lg font-semibold mt-1">
                    {item.milestone}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}