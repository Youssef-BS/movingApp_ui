"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Edit, MapPin, Truck, Clock, CheckCircle, Phone, Mail } from "lucide-react"

export default function ProfilePage() {
  const userBookings = [
    {
      id: 1,
      service: "Moving Service",
      date: "2025-01-15",
      status: "scheduled",
      from: "123 Main St, Berlin",
      to: "456 Oak Ave, Munich",
    },
    {
      id: 2,
      service: "Cleaning Service",
      date: "2025-01-10",
      status: "completed",
      from: "123 Main St, Berlin",
      to: "Professional cleaning",
    },
    {
      id: 3,
      service: "Packing Service",
      date: "2025-01-20",
      status: "on-the-way",
      from: "456 Oak Ave, Munich",
      to: "789 Elm St, Hamburg",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "scheduled":
        return "bg-blue-100 text-blue-800"
      case "on-the-way":
        return "bg-yellow-100 text-yellow-800"
      case "in-progress":
        return "bg-purple-100 text-purple-800"
      case "completed":
        return "bg-green-100 text-green-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "scheduled":
        return Clock
      case "on-the-way":
        return Truck
      case "in-progress":
        return Truck
      case "completed":
        return CheckCircle
      default:
        return Clock
    }
  }

  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Profile Header */}
        <Card className="mb-8">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="flex items-center gap-6">
                <Avatar className="w-20 h-20">
                  <AvatarImage src="/professional-avatar.jpg" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div>
                  <h1 className="text-3xl font-bold">John Doe</h1>
                  <p className="text-muted-foreground">Customer since January 2024</p>
                  <div className="mt-2 space-y-1">
                    <p className="flex items-center gap-2 text-sm">
                      <Mail size={16} /> john.doe@example.com
                    </p>
                    <p className="flex items-center gap-2 text-sm">
                      <Phone size={16} /> +49 123 456789
                    </p>
                  </div>
                </div>
              </div>
              <Button className="gap-2">
                <Edit size={18} />
                Edit Profile
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Tabs */}
        <Tabs defaultValue="services" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-6">
            <TabsTrigger value="services">My Services</TabsTrigger>
            <TabsTrigger value="tracking">Live Tracking</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          {/* My Services Tab */}
          <TabsContent value="services" className="space-y-4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Booking History</h2>
              <Link href="/booking">
                <Button>New Booking</Button>
              </Link>
            </div>

            {userBookings.map((booking) => {
              const StatusIcon = getStatusIcon(booking.status)
              return (
                <Card key={booking.id}>
                  <CardContent className="pt-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-start gap-4">
                          <div className={`p-3 rounded-lg ${getStatusColor(booking.status)}`}>
                            <StatusIcon size={24} />
                          </div>
                          <div>
                            <h3 className="font-semibold text-lg">{booking.service}</h3>
                            <p className="text-sm text-muted-foreground mb-2">{booking.date}</p>
                            <div className="space-y-1">
                              <p className="text-sm flex items-center gap-2">
                                <MapPin size={16} className="text-primary" />
                                {booking.from}
                              </p>
                              <p className="text-sm text-muted-foreground">→ {booking.to}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2">
                        <div
                          className={`px-4 py-2 rounded-lg text-sm font-medium text-center ${getStatusColor(
                            booking.status,
                          )}`}
                        >
                          {booking.status === "scheduled" && "Scheduled"}
                          {booking.status === "on-the-way" && "On the Way"}
                          {booking.status === "in-progress" && "In Progress"}
                          {booking.status === "completed" && "Completed"}
                        </div>
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </TabsContent>

          {/* Live Tracking Tab */}
          <TabsContent value="tracking">
            <Card>
              <CardHeader>
                <CardTitle>Live Truck Tracking</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {/* Mock Map */}
                  <div className="w-full h-96 bg-slate-200 rounded-lg flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100" />
                    <div className="relative z-10">
                      <div className="text-6xl mb-4 text-center">🚚</div>
                      <p className="text-center font-semibold">Live Truck Position</p>
                      <p className="text-center text-sm text-muted-foreground mt-2">52.52°N, 13.40°E (Berlin)</p>
                    </div>

                    {/* Mock route line */}
                    <svg className="absolute inset-0 w-full h-full" style={{ pointerEvents: "none" }}>
                      <line
                        x1="30%"
                        y1="50%"
                        x2="70%"
                        y2="50%"
                        stroke="#3b82f6"
                        strokeWidth="3"
                        strokeDasharray="5,5"
                      />
                      <circle cx="30%" cy="50%" r="8" fill="#3b82f6" />
                      <circle cx="70%" cy="50%" r="8" fill="#10b981" />
                    </svg>
                  </div>

                  {/* Tracking Info */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Card>
                      <CardContent className="pt-6">
                        <p className="text-sm text-muted-foreground mb-1">Pickup Location</p>
                        <p className="font-semibold">123 Main St, Berlin</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="pt-6">
                        <p className="text-sm text-muted-foreground mb-1">ETA</p>
                        <p className="font-semibold">2 hours 15 mins</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="pt-6">
                        <p className="text-sm text-muted-foreground mb-1">Destination</p>
                        <p className="font-semibold">456 Oak Ave, Munich</p>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Journey Timeline */}
                  <div className="space-y-4">
                    <h3 className="font-semibold">Journey Timeline</h3>
                    {[
                      { step: "Order Confirmed", time: "09:00 AM", completed: true },
                      { step: "Team Arrived", time: "09:15 AM", completed: true },
                      { step: "Loading in Progress", time: "09:30 AM", completed: true },
                      { step: "On the Way", time: "11:45 AM", completed: true },
                      { step: "Arriving Soon", time: "~1:45 PM", completed: false },
                    ].map((item, idx) => (
                      <div key={idx} className="flex gap-4 items-start">
                        <div
                          className={`w-4 h-4 rounded-full mt-2 ${
                            item.completed ? "bg-primary" : "bg-muted border-2 border-primary"
                          }`}
                        />
                        <div className="flex-1">
                          <p className="font-medium">{item.step}</p>
                          <p className="text-sm text-muted-foreground">{item.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Settings Tab */}
          <TabsContent value="settings">
            <Card>
              <CardHeader>
                <CardTitle>Account Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-3">Notifications</h3>
                  <label className="flex items-center gap-3 p-3 border border-border rounded-lg hover:bg-slate-50 cursor-pointer">
                    <input type="checkbox" defaultChecked className="rounded" />
                    <span>Email notifications for booking updates</span>
                  </label>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">Privacy</h3>
                  <label className="flex items-center gap-3 p-3 border border-border rounded-lg hover:bg-slate-50 cursor-pointer">
                    <input type="checkbox" defaultChecked className="rounded" />
                    <span>Share location with support team</span>
                  </label>
                </div>
                <div className="pt-6 border-t border-border">
                  <Button variant="destructive">Delete Account</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
