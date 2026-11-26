"use client"

import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  const translations = {
    company: "K&A Entrümpelung",
    description:
      "Zuverlässige und professionelle Entrümpelungen, en und Sperrmüll & Räumungsdienste.",
    services: "Unsere Dienstleistungen",
    moving: "Entrümpelung",
    cleaning: "",
    packing: "Sperrmüll & Räumung",
    aboutCompany: "Unternehmen",
    about: "Über uns",
    team: "Unser Team",
    reviews: "Kundenbewertungen",
    contact: "Kontakt",
    copyright: "© 2025 K&A Entrümpelung. Alle Rechte vorbehalten.",
  }

  const t = translations

  return (
    <footer className="bg-slate-900 text-white py-12 animate-fade-in">
      <div className="site-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Unternehmen */}
          <div className="animate-slide-in-up">
            <h3 className="mb-4">{t.company}</h3>
            <p className="text-slate-300">{t.description}</p>
          </div>

          {/* Dienstleistungen */}
          <div
            className="animate-slide-in-up"
            style={{ animationDelay: "100ms" }}
          >
            <h4 className="font-semibold mb-4">{t.services}</h4>
            <ul className="space-y-2 text-slate-300">
              <li>
                <Link
                  href="/services/moving"
                  className="hover:text-white transition duration-300"
                >
                  {t.moving}
                </Link>
              </li>
              <li>
                <Link
                  href="/services/cleaning"
                  className="hover:text-white transition duration-300"
                >
                  {t.cleaning}
                </Link>
              </li>
              <li>
                <Link
                  href="/services/moving"
                  className="hover:text-white transition duration-300"
                >
                  {t.packing}
                </Link>
              </li>
            </ul>
          </div>

          {/* Unternehmen */}
          <div
            className="animate-slide-in-up"
            style={{ animationDelay: "200ms" }}
          >
            <h4 className="font-semibold mb-4">{t.aboutCompany}</h4>
            <ul className="space-y-2 text-slate-300">
              <li>
                <Link
                  href="/about"
                  className="hover:text-white transition duration-300"
                >
                  {t.about}
                </Link>
              </li>
              <li>
                <Link
                  href="/team"
                  className="hover:text-white transition duration-300"
                >
                  {t.team}
                </Link>
              </li>
              <li>
                <Link
                  href="/reviews"
                  className="hover:text-white transition duration-300"
                >
                  {t.reviews}
                </Link>
              </li>
            </ul>
          </div>

          {/* Kontakt */}
          <div
            className="animate-slide-in-up"
            style={{ animationDelay: "300ms" }}
          >
            <h4 className="font-semibold mb-4">{t.contact}</h4>
            <ul className="space-y-3 text-slate-300">
              <li className="flex items-center gap-2 hover:text-white transition duration-300">
                <Phone size={16} />
                <a href="tel:+491733271517">
                  +49 173 3271517
                </a>
              </li>

              <li className="flex items-center gap-2 hover:text-white transition duration-300">
                <Mail size={16} />
                <a href="mailto:info@ka-entruempelung.de">
                  info@ka-entruempelung.de
                </a>
              </li>

              <li className="flex items-center gap-2 hover:text-white transition duration-300">
                <MapPin size={16} />
                Stuttgart, Deutschland
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-slate-700 flex flex-col md:flex-row justify-center items-center animate-fade-in">
          <p className="text-slate-400 text-sm text-center">
            {t.copyright}
          </p>
        </div>
      </div>
    </footer>
  )
}
