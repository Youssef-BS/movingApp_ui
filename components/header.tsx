"use client"

import { useState } from "react"
import { useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const t = {
    services: "Dienstleistungen",
    about: "Über Uns",
    reviews: "Bewertungen",
    team: "Team",
    login: "Anmelden",
    register: "Registrieren",
    booking: "Buchung",
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 backdrop-blur-sm bg-white/80 ${
        scrolled ? "shadow-lg" : "shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" aria-label="K&A Home" className="shrink-0">
            <span className="font-bold text-2xl md:text-3xl text-primary tracking-tight transition-colors duration-300 hover:text-accent">
              K&A
            </span>
            <span className="sr-only">K&amp;A Entrümpelung — Umzugs- und Reinigungsdienste</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8 items-center transition-opacity duration-300">
            <Link href="/services/moving" className="text-foreground hover:text-primary transition duration-300">
              {t.services}
            </Link>
            <Link href="/about" className="text-foreground hover:text-primary transition duration-300">
              {t.about}
            </Link>
            <Link href="/reviews" className="text-foreground hover:text-primary transition duration-300">
              {t.reviews}
            </Link>
            <Link href="/team" className="text-foreground hover:text-primary transition duration-300">
              {t.team}
            </Link>
          </nav>

          {/* Auth Buttons - Language selector removed */}
          <div className="flex gap-4 items-center">
            <Link href="/login">
              <Button
                variant="outline"
                size="sm"
                className="hidden sm:inline-flex transition-all duration-300 hover:shadow-md bg-transparent"
              >
                {t.login}
              </Button>
            </Link>
            <Link href="/register">
              <Button size="sm" className="hidden sm:inline-flex transition-all duration-300 hover:shadow-md">
                {t.register}
              </Button>
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-md hover:bg-secondary/40 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden pb-4 border-t border-border animate-slide-in-up" aria-label="Mobile navigation">
            <Link
              href="/services/moving"
              className="block py-2 text-foreground hover:text-primary transition duration-300"
            >
              {t.services}
            </Link>
            <Link href="/about" className="block py-2 text-foreground hover:text-primary transition duration-300">
              {t.about}
            </Link>
            <Link href="/reviews" className="block py-2 text-foreground hover:text-primary transition duration-300">
              {t.reviews}
            </Link>
            <Link href="/team" className="block py-2 text-foreground hover:text-primary transition duration-300">
              {t.team}
            </Link>

            {/* Mobile auth actions */}
            <div className="mt-3 border-t border-border pt-3">
              <Link href="/login" className="block">
                <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-secondary transition duration-300">
                  {t.login}
                </button>
              </Link>
              <Link href="/register" className="block mt-2">
                <button className="w-full text-left px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:opacity-95 transition duration-300">
                  {t.register}
                </button>
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
