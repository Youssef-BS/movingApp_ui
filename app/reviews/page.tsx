"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export default function ReviewsPage() {
  const reviews = [
    {
      author: "Maria Schmidt",
      location: "Weinstadt",
      rating: 5,
      date: "Vor 2 Wochen",
      text: "Sehr zuverlässiger und professioneller Service. Das Team war pünktlich, freundlich und hat die Entrümpelung sorgfältig durchgeführt. Absolut empfehlenswert!",
      avatar: "MS",
    },
    {
      author: "Hans Müller",
      location: "Waiblingen",
      rating: 5,
      date: "Vor 1 Monat",
      text: "Die  verlief schnell und unkompliziert. Alles wurde ordentlich erledigt und der Preis war fair. Vielen Dank für die tolle Arbeit!",
      avatar: "HM",
    },
    {
      author: "Sarah Weber",
      location: "Stuttgart",
      rating: 5,
      date: "Vor 1 Monat",
      text: "Sehr gründliche Arbeit bei der Entrümpelung unserer Wohnung. Die besenreine Übergabe war perfekt. Ein freundliches und professionelles Team!",
      avatar: "SW",
    },
    {
      author: "Thomas Wagner",
      location: "Fellbach",
      rating: 5,
      date: "Vor 2 Monaten",
      text: "Unser Keller wurde vollständig entrümpelt. Die Mitarbeiter waren sehr sorgfältig, zuverlässig und haben alles termingerecht erledigt.",
      avatar: "TW",
    },
    {
      author: "Anna Bauer",
      location: "Schorndorf",
      rating: 5,
      date: "Vor 2 Monaten",
      text: "Faire Preise, schnelle Terminvereinbarung und hervorragende Kommunikation. Wir sind sehr zufrieden mit der .",
      avatar: "AB",
    },
    {
      author: "Michael Schneider",
      location: "Esslingen",
      rating: 5,
      date: "Vor 3 Monaten",
      text: "Schnell, zuverlässig und freundlich. Die komplette Räumung wurde professionell durchgeführt. Alles wurde sauber hinterlassen. Gerne wieder!",
      avatar: "MS",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-r from-primary to-accent text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">
            Kundenbewertungen
          </h1>
          <p className="text-xl text-blue-100">
            Das sagen unsere Kunden über K&A Entrümpelung
          </p>
        </div>
      </section>

      {/* Statistiken */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-primary">4.9★</p>
              <p className="text-muted-foreground mt-2">
                Durchschnittliche Bewertung
              </p>
            </div>

            <div>
              <p className="text-4xl font-bold text-primary">10.000+</p>
              <p className="text-muted-foreground mt-2">
                Durchgeführte Aufträge
              </p>
            </div>

            <div>
              <p className="text-4xl font-bold text-primary">98%</p>
              <p className="text-muted-foreground mt-2">
                Zufriedene Kunden
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bewertungen */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, idx) => (
              <Card key={idx} className="hover:shadow-lg transition">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarFallback>
                          {review.avatar}
                        </AvatarFallback>
                      </Avatar>

                      <div>
                        <p className="font-semibold">
                          {review.author}
                        </p>

                        <p className="text-sm text-muted-foreground">
                          {review.location}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-1 mt-3">
                    {[...Array(review.rating)].map((_, i) => (
                      <span key={i} className="text-lg">
                        ⭐
                      </span>
                    ))}
                  </div>
                </CardHeader>

                <CardContent>
                  <p className="text-muted-foreground italic mb-3">
                    „{review.text}“
                  </p>

                  <p className="text-xs text-muted-foreground">
                    {review.date}
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