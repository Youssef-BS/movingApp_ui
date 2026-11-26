import type React from "react"
import type { Metadata } from "next"
import { Geist } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
const geist=Geist({subsets:["latin"]})
export const metadata:Metadata={title:"K&A Entrümpelung | Weinstadt & Umgebung",description:"Zuverlässige Entrümpelung, Haushaltsauflösung und besenreine Übergabe in Weinstadt und Umgebung. Jetzt unverbindlich per WhatsApp anfragen."}
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="de"><body className={geist.className}>{children}<Analytics/></body></html>}
