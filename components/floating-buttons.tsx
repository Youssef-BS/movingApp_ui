"use client"

import { useEffect, useState } from "react"
import { ArrowUp } from "lucide-react"
import WhatsAppIcon from "@/components/whatsapp-icon"

export default function FloatingButtons() {
  const [showScroll, setShowScroll] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 400)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <>
      <button
        onClick={scrollToTop}
        className={`fixed bottom-24 right-6 z-40 flex items-center justify-center w-12 h-12 rounded-full bg-[#123f6b] text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 ${
          showScroll ? "opacity-100 scale-100" : "opacity-0 scale-75 pointer-events-none"
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </button>

      <a
        href="https://wa.me/491733271517?text=Hallo%2C%20ich%20interessiere%20mich%20f%C3%BCr%20eure%20Dienstleistungen"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float fixed bottom-6 right-6 z-40 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 hover:bg-[#1fbb53]"
        aria-label="Contact K&A on WhatsApp"
      >
        <WhatsAppIcon size={28} />
      </a>
    </>
  )
}

