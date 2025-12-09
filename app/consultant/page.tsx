"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  MapPin,
  Truck,
  Clock,
  CheckCircle,
  Phone,
  Mail,
  Star,
  BarChart3,
  TrendingUp,
  Users,
  Award,
  AlertCircle,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function ConsultantPage() {
  const [selectedConsultant, setSelectedConsultant] = useState(0)

  const consultants = [
    {
      id: 1,
      name: "Marcus Weber",
      role: "Senior Moving Consultant",
      avatar: "/marcus-consultant.jpg",
      email: "marcus@kandamoving.de",
      phone: "+49 176 123456",
      rating: 4.9,
      reviews: 142,
      completedMoves: 287,
      totalDistance: "45,230 km",
      yearsExperience: 8,
      specialties: ["Office Relocation", "International Moves", "Large Households"],
      status: "active",
      responseTime: "2 mins avg",
      onTimePercentage: 98,
    },
    {
      id: 2,
      name: "Anna Schmidt",
      role: "Cleaning & Packing Specialist",
      avatar: "/anna-consultant.jpg",
      email: "anna@kandamoving.de",
      phone: "+49 176 234567",
      rating: 4.8,
      reviews: 156,
      completedMoves: 312,
      totalDistance: "38,920 km",
      yearsExperience: 7,
      specialties: ["Professional Packing", "Deep Cleaning", "Fragile Items"],
      status: "active",
      responseTime: "3 mins avg",
      onTimePercentage: 97,
    },
    {
      id: 3,
      name: "Thomas Müller",
      role: "Transport & Logistics Manager",
      avatar: "/thomas-consultant.jpg",
      email: "thomas@kandamoving.de",
      phone: "+49 176 345678",
      rating: 4.7,
      reviews: 128,
      completedMoves: 256,
      totalDistance: "42,100 km",
      yearsExperience: 6,
      specialties: ["Route Optimization", "Heavy Furniture", "Piano Moves"],
      status: "active",
      responseTime: "4 mins avg",
      onTimePercentage: 95,
    },
  ]

  const consultant = consultants[selectedConsultant]

  const operations = [
    {
      date: "2025-01-20",
      service: "Office Relocation",
      client: "Tech Startup Berlin",
      status: "completed",
      distance: "12 km",
      duration: "6 hours",
      items: 450,
      cost: "€2,850",
    },
    {
      date: "2025-01-19",
      service: "Residential Move",
      client: "Family Apartment",
      status: "completed",
      distance: "8 km",
      duration: "4 hours",
      items: 280,
      cost: "€1,650",
    },
    {
      date: "2025-01-18",
      service: "Commercial Move",
      client: "Startup Hub Munich",
      status: "completed",
      distance: "45 km",
      duration: "8 hours",
      items: 620,
      cost: "€3,200",
    },
    {
      date: "2025-01-17",
      service: "Residential Move",
      client: "Family Hamburg",
      status: "completed",
      distance: "15 km",
      duration: "5 hours",
      items: 320,
      cost: "€1,920",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 dark:from-slate-950 dark:via-blue-950 dark:to-slate-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="mb-8 animate-slide-in-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Consultant Operations</h1>
          <p className="text-lg text-muted-foreground">Track and manage consultant performance and operations</p>
        </div>

        {/* Consultant Selection */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {consultants.map((cons, idx) => (
            <Card
              key={cons.id}
              className={`cursor-pointer smooth-transition hover:shadow-lg ${
                selectedConsultant === idx ? "ring-2 ring-primary" : ""
              }`}
              onClick={() => setSelectedConsultant(idx)}
            >
              <CardContent className="pt-6">
                <div className="text-center">
                  <Avatar className="w-16 h-16 mx-auto mb-4">
                    <AvatarImage src={cons.avatar || "/placeholder.svg"} />
                    <AvatarFallback>{cons.name.slice(0, 2)}</AvatarFallback>
                  </Avatar>
                  <h3 className="font-semibold">{cons.name}</h3>
                  <p className="text-sm text-muted-foreground">{cons.role}</p>
                  <div className="mt-3 flex items-center justify-center gap-1">
                    <Star size={16} className="fill-accent text-accent" />
                    <span className="font-semibold">{cons.rating}</span>
                    <span className="text-sm text-muted-foreground">({cons.reviews})</span>
                  </div>
                  <Badge variant={cons.status === "active" ? "default" : "secondary"} className="mt-2">
                    {cons.status === "active" ? "Active" : "Inactive"}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Consultant Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Profile Card */}
          <Card className="lg:col-span-1 animate-scale-in">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users size={20} />
                Profile
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Email</p>
                <p className="font-semibold flex items-center gap-2">
                  <Mail size={16} />
                  {consultant.email}
                </p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Phone</p>
                <p className="font-semibold flex items-center gap-2">
                  <Phone size={16} />
                  {consultant.phone}
                </p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Experience</p>
                <p className="font-semibold flex items-center gap-2">
                  <Award size={16} />
                  {consultant.yearsExperience} years
                </p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-2">Specialties</p>
                <div className="space-y-2">
                  {consultant.specialties.map((spec) => (
                    <Badge key={spec} variant="secondary">
                      {spec}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Performance Metrics */}
          <Card className="lg:col-span-2 animate-scale-in" style={{ animationDelay: "100ms" }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 size={20} />
                Performance Metrics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div
                  className="p-4 rounded-lg border"
                  style={{
                    backgroundColor: "rgba(66, 133, 244, 0.1)",
                    borderColor: "rgba(66, 133, 244, 0.2)",
                  }}
                >
                  <p className="text-sm text-muted-foreground mb-1">Completed Moves</p>
                  <p className="text-2xl font-bold text-primary">{consultant.completedMoves}</p>
                  <p className="text-xs text-muted-foreground mt-1">Total operations</p>
                </div>
                <div
                  className="p-4 rounded-lg border"
                  style={{
                    backgroundColor: "rgba(225, 112, 32, 0.1)",
                    borderColor: "rgba(225, 112, 32, 0.2)",
                  }}
                >
                  <p className="text-sm text-muted-foreground mb-1">Total Distance</p>
                  <p className="text-2xl font-bold text-accent">{consultant.totalDistance}</p>
                  <p className="text-xs text-muted-foreground mt-1">Kilometers moved</p>
                </div>
                <div
                  className="p-4 rounded-lg border"
                  style={{
                    backgroundColor: "rgba(59, 130, 246, 0.1)",
                    borderColor: "rgba(59, 130, 246, 0.2)",
                  }}
                >
                  <p className="text-sm text-muted-foreground mb-1">On-Time Rate</p>
                  <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">{consultant.onTimePercentage}%</p>
                  <p className="text-xs text-muted-foreground mt-1">Punctuality score</p>
                </div>
                <div
                  className="p-4 rounded-lg border"
                  style={{
                    backgroundColor: "rgba(34, 197, 94, 0.1)",
                    borderColor: "rgba(34, 197, 94, 0.2)",
                  }}
                >
                  <p className="text-sm text-muted-foreground mb-1">Avg Response</p>
                  <p className="text-2xl font-bold text-green-600 dark:text-green-400">{consultant.responseTime}</p>
                  <p className="text-xs text-muted-foreground mt-1">Client response time</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Operations Tabs */}
        <Card className="animate-fade-in">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Truck size={20} />
              Recent Operations
            </CardTitle>
            <CardDescription>Track all completed moves and operations</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="operations" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="operations">Operations Log</TabsTrigger>
                <TabsTrigger value="performance">Performance Analytics</TabsTrigger>
              </TabsList>

              <TabsContent value="operations" className="space-y-4 mt-6">
                {operations.map((op, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 p-4 border border-border rounded-lg smooth-transition"
                    style={{
                      backgroundColor: "rgba(0, 0, 0, 0.015)",
                    }}
                  >
                    <div className="flex-1">
                      <div className="flex items-start gap-3 mb-2">
                        <div
                          className="p-2 rounded-lg"
                          style={{
                            backgroundColor: "rgba(66, 133, 244, 0.1)",
                          }}
                        >
                          <Truck size={20} className="text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold">{op.service}</h4>
                          <p className="text-sm text-muted-foreground">{op.client}</p>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
                        <div>
                          <p className="text-muted-foreground">Date</p>
                          <p className="font-medium">{op.date}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Distance</p>
                          <p className="font-medium flex items-center gap-1">
                            <MapPin size={14} />
                            {op.distance}
                          </p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Duration</p>
                          <p className="font-medium flex items-center gap-1">
                            <Clock size={14} />
                            {op.duration}
                          </p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Items</p>
                          <p className="font-medium">{op.items}</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-right">
                        <Badge className="mb-2 flex justify-center">
                          <CheckCircle size={14} className="mr-1" />
                          {op.status}
                        </Badge>
                        <p className="text-lg font-bold text-accent">{op.cost}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </TabsContent>

              <TabsContent value="performance" className="space-y-4 mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card
                    className="border"
                    style={{
                      borderColor: "rgba(66, 133, 244, 0.2)",
                      backgroundColor: "rgba(66, 133, 244, 0.05)",
                    }}
                  >
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <TrendingUp size={18} className="text-primary" />
                        Efficiency Trend
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div
                        className="h-32 rounded-lg flex items-end justify-center p-4 gap-2"
                        style={{
                          background: "linear-gradient(to top, rgba(66, 133, 244, 0.2), rgba(66, 133, 244, 0.05))",
                        }}
                      >
                        {[60, 75, 70, 85, 90, 88, 92].map((val, i) => (
                          <div
                            key={i}
                            className="flex-1 rounded-t hover:opacity-80 smooth-transition"
                            style={{
                              backgroundColor: "rgba(66, 133, 244, 0.6)",
                              height: `${val}%`,
                            }}
                            title={`${val}% efficiency`}
                          />
                        ))}
                      </div>
                      <p className="text-center text-sm text-muted-foreground mt-4">
                        7-day efficiency average: <span className="font-semibold text-primary">81%</span>
                      </p>
                    </CardContent>
                  </Card>

                  <Card
                    className="border"
                    style={{
                      borderColor: "rgba(225, 112, 32, 0.2)",
                      backgroundColor: "rgba(225, 112, 32, 0.05)",
                    }}
                  >
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <BarChart3 size={18} className="text-accent" />
                        Revenue Generated
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div>
                          <div className="flex justify-between items-center mb-1">
                            <p className="text-sm">This Week</p>
                            <p className="font-semibold">€8,620</p>
                          </div>
                          <div className="w-full bg-muted rounded-full h-2">
                            <div
                              className="h-2 rounded-full"
                              style={{ width: "85%", backgroundColor: "var(--accent)" }}
                            />
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between items-center mb-1">
                            <p className="text-sm">This Month</p>
                            <p className="font-semibold">€32,450</p>
                          </div>
                          <div className="w-full bg-muted rounded-full h-2">
                            <div
                              className="h-2 rounded-full"
                              style={{ width: "90%", backgroundColor: "var(--primary)" }}
                            />
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between items-center mb-1">
                            <p className="text-sm">This Year</p>
                            <p className="font-semibold">€128,920</p>
                          </div>
                          <div className="w-full bg-muted rounded-full h-2">
                            <div className="h-2 rounded-full" style={{ width: "95%", backgroundColor: "#22c55e" }} />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Card
                  className="border"
                  style={{
                    borderColor: "rgba(226, 168, 23, 0.2)",
                    backgroundColor: "rgba(226, 168, 23, 0.05)",
                  }}
                >
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <AlertCircle size={18} style={{ color: "rgb(180, 83, 9)" }} />
                      Alerts & Recommendations
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex gap-3 p-2 rounded-lg" style={{ backgroundColor: "rgba(254, 243, 199, 0.5)" }}>
                        <span style={{ color: "rgb(180, 83, 9)" }} className="font-bold">
                          •
                        </span>
                        <span className="text-sm">Peak performance detected: 92% efficiency on recent operations</span>
                      </li>
                      <li className="flex gap-3 p-2 rounded-lg" style={{ backgroundColor: "rgba(220, 252, 231, 0.5)" }}>
                        <span style={{ color: "rgb(22, 163, 74)" }} className="font-bold">
                          •
                        </span>
                        <span className="text-sm">Client satisfaction remains excellent: 4.9/5 rating</span>
                      </li>
                      <li className="flex gap-3 p-2 rounded-lg" style={{ backgroundColor: "rgba(219, 234, 254, 0.5)" }}>
                        <span style={{ color: "rgb(37, 99, 235)" }} className="font-bold">
                          •
                        </span>
                        <span className="text-sm">Consider promoting for senior consultant role</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
