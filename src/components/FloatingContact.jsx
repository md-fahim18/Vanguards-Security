"use client"

import { Phone } from "lucide-react"

export default function FloatingContact() {
  const handleCall = () => {
    window.location.href = "tel:+8801648960735"
  }

  return (
    <button
      onClick={handleCall}
      className="fixed bottom-8 right-8 bg-accent hover:bg-accent-dark text-primary p-4 rounded-full shadow-2xl hover:scale-110 transition-all z-50 group"
      aria-label="কল করুন"
    >
      <Phone className="w-6 h-6" />
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-primary text-white px-4 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        এখনই কল করুন
      </span>
    </button>
  )
}
