"use client"

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-primary">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img src="/professional-security-guards-in-uniform-standing-a.jpg" alt="নিরাপত্তা প্রহরী" className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/70 to-primary"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in text-balance">
          আপনার নিরাপত্তাই আমাদের অঙ্গীকার
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto animate-fade-in animate-delay-100 text-pretty leading-relaxed">
          বাংলাদেশের সবচেয়ে বিশ্বস্ত এবং পেশাদার নিরাপত্তা সেবা প্রদানকারী প্রতিষ্ঠান
        </p>
        <button
          onClick={scrollToContact}
          className="bg-accent hover:bg-accent-dark text-primary px-8 py-4 rounded-lg text-lg font-bold transition-all hover:scale-105 animate-fade-in animate-delay-200"
        >
          ফ্রি কোট নিন
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-white/50 rounded-full"></div>
        </div>
      </div>
    </section>
  )
}
