"use client"

import { useEffect, useState } from "react"
import { ArrowUp } from "lucide-react"

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
        className={`fixed bottom-24 right-6 z-40 flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-primary to-primary/80 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 ${
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
        className="fixed bottom-6 right-6 z-40 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 hover:bg-[#1fbb53]"
        aria-label="Contact K&A on WhatsApp"
      >
        <svg
  className="w-7 h-7"
  viewBox="0 0 448 512"
  fill="currentColor"
  aria-hidden="true"
  xmlns="http://www.w3.org/2000/svg"
>
  <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.2-30.7c32.2 17.6 68.5 26.9 106.6 26.9h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.1-115.1-67-157.1zM223.9 438.7c-33.4 0-66.1-9-94.7-26l-6.8-4-69.5 18.2 18.5-67.8-4.4-7c-18.4-29.2-28.1-62.9-28.1-97.1 0-100.6 81.9-182.5 182.6-182.5 48.7 0 94.5 19 128.9 53.4s56.8 80.2 56.8 128.9c0 100.7-83.7 183-184.3 183zm100.3-136.5c-5.5-2.8-32.6-16.1-37.7-17.9-5.1-1.9-8.7-2.8-12.4 2.8-3.7 5.5-14.2 17.9-17.4 21.6-3.2 3.7-6.4 4.2-11.9 1.4-32.4-16.2-53.7-28.9-75.1-65.5-5.7-9.8 5.7-9.1 16.2-30.2 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.4-29.8-17-40.8-4.5-10.8-9.1-9.3-12.4-9.5-3.2-.2-6.9-.2-10.6-.2s-9.7 1.4-14.7 6.9c-5.1 5.5-19.3 18.8-19.3 45.8s19.8 53.1 22.5 56.8c2.8 3.7 38.9 59.4 94.2 83.3 35 15.1 48.7 16.4 66.2 13.8 10.7-1.6 32.6-13.3 37.2-26.2 4.6-12.9 4.6-23.9 3.2-26.2-1.4-2.3-5.1-3.7-10.6-6.5z" />
</svg>
      </a>
    </>
  )
}

