"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-primary/95 backdrop-blur-sm shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 space-y-2.5">
        <div className="flex items-center justify-between h-20">
          <div className="flex space-x-3">
            <div className="flex items-center space-x-2">
              <img
                src="/logo.png"
                alt="Logo"
                className="h-20 w-20 object-contain"
              />
            </div>
            <button
              onClick={() => scrollToSection("hero")}
              className="text-2xl font-bold text-white hover:text-accent transition-colors"
            >
              Vanguards Security
            </button>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-white hover:text-accent transition-colors font-medium"
            >
              হোম
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-white hover:text-accent transition-colors font-medium"
            >
              আমাদের সম্পর্কে
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-white hover:text-accent transition-colors font-medium"
            >
              সেবা
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-white hover:text-accent transition-colors font-medium"
            >
              যোগাযোগ
            </button>
          </div>

          <button
            onClick={() => scrollToSection("contact")}
            className="hidden md:block bg-accent hover:bg-accent-dark text-primary px-6 py-2.5 rounded-lg font-semibold transition-colors"
          >
            ফ্রি কোট নিন
          </button>
        </div>
      </div>
    </nav>
  );
}
