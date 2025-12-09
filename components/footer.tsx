"use client"

import Link from "next/link"
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from "lucide-react"
import { useState } from "react"

export default function Footer() {
  const [language] = useState("de")

  const translations = {
    de: {
      company: "K&A Entrümpelung",
      description: "Professionelle Umzugs- und Reinigungsdienste in ganz Deutschland.",
      services: "Dienstleistungen",
      moving: "Umzug",
      cleaning: "Reinigung",
      packing: "Verpackung",
      aboutCompany: "Unternehmen",
      about: "Über Uns",
      team: "Team",
      reviews: "Bewertungen",
      contact: "Kontakt",
      copyright: "© 2025 K&A Entrümpelung. Alle Rechte vorbehalten.",
    },
    en: {
      company: "K&A Moving Services",
      description: "Professional moving and cleaning services across Germany.",
      services: "Services",
      moving: "Moving",
      cleaning: "Cleaning",
      packing: "Packing",
      aboutCompany: "Company",
      about: "About Us",
      team: "Team",
      reviews: "Reviews",
      contact: "Contact",
      copyright: "© 2025 K&A Moving Services. All rights reserved.",
    },
  }

  const t = translations[language as keyof typeof translations]

  return (
    <footer className="bg-slate-900 text-white py-12 animate-fade-in">
      <div className="site-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company */}
          <div className="animate-slide-in-up">
            <h3 className="mb-4">{t.company}</h3>
            <p className="text-slate-300">{t.description}</p>
          </div>

          {/* Services */}
          <div className="animate-slide-in-up" style={{ animationDelay: "100ms" }}>
            <h4 className="font-semibold mb-4">{t.services}</h4>
            <ul className="space-y-2 text-slate-300">
              <li>
                <Link href="/services/moving" className="hover:text-white transition duration-300">
                  {t.moving}
                </Link>
              </li>
              <li>
                <Link href="/services/cleaning" className="hover:text-white transition duration-300">
                  {t.cleaning}
                </Link>
              </li>
              <li>
                <Link href="/services/packing" className="hover:text-white transition duration-300">
                  {t.packing}
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="animate-slide-in-up" style={{ animationDelay: "200ms" }}>
            <h4 className="font-semibold mb-4">{t.aboutCompany}</h4>
            <ul className="space-y-2 text-slate-300">
              <li>
                <Link href="/about" className="hover:text-white transition duration-300">
                  {t.about}
                </Link>
              </li>
              <li>
                <Link href="/team" className="hover:text-white transition duration-300">
                  {t.team}
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="hover:text-white transition duration-300">
                  {t.reviews}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="animate-slide-in-up" style={{ animationDelay: "300ms" }}>
            <h4 className="font-semibold mb-4">{t.contact}</h4>
            <ul className="space-y-3 text-slate-300">
              <li className="flex items-center gap-2 hover:text-white transition duration-300">
                <Phone size={16} /> +49 123 456789
              </li>
              <li className="flex items-center gap-2 hover:text-white transition duration-300">
                <Mail size={16} /> info@ka-entrumplenung.de
              </li>
              <li className="flex items-center gap-2 hover:text-white transition duration-300">
                <MapPin size={16} /> Berlin, Deutschland
              </li>
            </ul>
          </div>
        </div>

        {/* Social & Copyright */}
        <div className="mt-8 pt-8 border-t border-slate-700 flex flex-col md:flex-row justify-between items-center animate-fade-in">
          <p className="text-slate-400 text-sm">{t.copyright}</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Facebook className="cursor-pointer hover:text-white transition duration-300" size={20} />
            <Instagram className="cursor-pointer hover:text-white transition duration-300" size={20} />
            <Twitter className="cursor-pointer hover:text-white transition duration-300" size={20} />
          </div>
        </div>
      </div>
    </footer>
  )
}
