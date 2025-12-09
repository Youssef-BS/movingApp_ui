"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export default function ReviewsPage() {
  const reviews = [
    {
      author: "Maria Schmidt",
      location: "Berlin",
      rating: 5,
      date: "2 weeks ago",
      text: "Excellent service from start to finish. The team was punctual, professional, and very careful with our belongings. Highly recommend!",
      avatar: "MS",
    },
    {
      author: "Hans Mueller",
      location: "Munich",
      rating: 5,
      date: "1 month ago",
      text: "K&A made our move to Munich seamless. They handled everything efficiently and the price was fair. Best moving company in Germany!",
      avatar: "HM",
    },
    {
      author: "Sarah Weber",
      location: "Frankfurt",
      rating: 5,
      date: "1 month ago",
      text: "The cleaning service was thorough and professional. Our old apartment has never looked better. Thank you K&A!",
      avatar: "SW",
    },
    {
      author: "Thomas Wagner",
      location: "Hamburg",
      rating: 5,
      date: "2 months ago",
      text: "Impressed by their professionalism and attention to detail. They took extra care with fragile items. Definitely using them again!",
      avatar: "TW",
    },
    {
      author: "Anna Bauer",
      location: "Cologne",
      rating: 5,
      date: "2 months ago",
      text: "Great team, reasonable prices, and excellent communication throughout. The best experience I've had with a moving company.",
      avatar: "AB",
    },
    {
      author: "Michael Schneider",
      location: "Stuttgart",
      rating: 5,
      date: "3 months ago",
      text: "Fast, efficient, and reliable. The team was friendly and worked hard to get everything done on schedule. Highly satisfied!",
      avatar: "MS",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-r from-primary to-accent text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Customer Reviews</h1>
          <p className="text-xl text-blue-100">See what our satisfied customers have to say</p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-primary">4.9★</p>
              <p className="text-muted-foreground mt-2">Average Rating</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary">10,000+</p>
              <p className="text-muted-foreground mt-2">Services Completed</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary">98%</p>
              <p className="text-muted-foreground mt-2">Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, idx) => (
              <Card key={idx} className="hover:shadow-lg transition">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarFallback>{review.avatar}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold">{review.author}</p>
                        <p className="text-sm text-muted-foreground">{review.location}</p>
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
                  <p className="text-muted-foreground italic mb-3">"{review.text}"</p>
                  <p className="text-xs text-muted-foreground">{review.date}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
