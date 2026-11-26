import type React from "react"
import type { Metadata } from "next"
import { Geist } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import FloatingButtons from "@/components/floating-buttons"
import "./globals.css"
const geist=Geist({subsets:["latin"]})
export const metadata:Metadata={metadataBase:new URL("https://ka-entruempelung.de"),title:"K&A Entrümpelung | Weinstadt & Umgebung",description:"Zuverlässige Entrümpelung, Haushaltsauflösung und besenreine Übergabe in Weinstadt und Umgebung. Jetzt unverbindlich per WhatsApp anfragen.",alternates:{canonical:"/"},openGraph:{title:"K&A Entrümpelung | Weinstadt & Umgebung",description:"Zuverlässige Entrümpelung und Haushaltsauflösung in Weinstadt und Umgebung. Jetzt unverbindlich anfragen.",url:"https://ka-entruempelung.de",siteName:"K&A Entrümpelung",locale:"de_DE",type:"website",images:["/ka-home-clearance.jpg"]},icons:{icon:"/ka-logo-mark.svg"}}
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="de"><body className={geist.className}>{children}<FloatingButtons/><Analytics/></body></html>}
