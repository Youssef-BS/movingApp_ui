"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Mail, Phone } from "lucide-react"

export default function TeamPage() {
  const teamMembers = [
    {
      name: "Klaus Mueller",
      role: "Founder & CEO",
      bio: "20+ years of industry experience",
      avatar: "KM",
    },
    {
      name: "Anna Weber",
      role: "Operations Manager",
      bio: "Expert in logistics and coordination",
      avatar: "AW",
    },
    {
      name: "Thomas Schmidt",
      role: "Head of Moving Services",
      bio: "15 years managing professional moves",
      avatar: "TS",
    },
    {
      name: "Lisa Bauer",
      role: "Customer Service Lead",
      bio: "Dedicated to customer satisfaction",
      avatar: "LB",
    },
    {
      name: "Marcus Wagner",
      role: "Lead Moving Specialist",
      bio: "Expert in packing and logistics",
      avatar: "MW",
    },
    {
      name: "Sofia Schneider",
      role: "Cleaning Services Manager",
      bio: "Specialized in deep cleaning",
      avatar: "SS",
    },
    {
      name: "Peter Hoffmann",
      role: "Quality Assurance Officer",
      bio: "Ensuring excellence in every job",
      avatar: "PH",
    },
    {
      name: "Jennifer Kohl",
      role: "Marketing Manager",
      bio: "Building our brand presence",
      avatar: "JK",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-r from-primary to-accent text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Meet Our Team</h1>
          <p className="text-xl text-blue-100">Professional experts dedicated to your satisfaction</p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto text-lg">
            Our team consists of experienced professionals with years of expertise in moving and cleaning services.
            We're committed to providing you with the best service possible.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member) => (
              <Card key={member.name} className="hover:shadow-lg transition">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <Avatar className="w-24 h-24 mx-auto mb-4">
                      <AvatarFallback className="text-lg">{member.avatar}</AvatarFallback>
                    </Avatar>
                    <h3 className="font-semibold text-lg">{member.name}</h3>
                    <p className="text-sm text-primary font-medium mb-2">{member.role}</p>
                    <p className="text-sm text-muted-foreground">{member.bio}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Growing Team</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            We're always looking for passionate professionals to join K&A Entrumplenung. If you're interested in a
            career with us, please reach out!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="flex items-center gap-2 justify-center p-4 bg-slate-50 rounded-lg">
              <Mail className="text-primary" size={20} />
              <a href="mailto:careers@ka-entrumplenung.de" className="font-semibold text-primary">
                careers@ka-entrumplenung.de
              </a>
            </div>
            <div className="flex items-center gap-2 justify-center p-4 bg-slate-50 rounded-lg">
              <Phone className="text-primary" size={20} />
              <a href="tel:+491234567890" className="font-semibold text-primary">
                +49 123 456 7890
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
