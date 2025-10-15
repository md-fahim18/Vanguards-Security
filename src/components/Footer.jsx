export default function Footer() {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-accent mb-4">ভ্যানগার্ডস সিকিউরিটি</h3>
            <p className="text-white/80 leading-relaxed">
              বাংলাদেশের সবচেয়ে বিশ্বস্ত নিরাপত্তা সেবা প্রদানকারী প্রতিষ্ঠান। আপনার নিরাপত্তাই আমাদের প্রথম অগ্রাধিকার।
            </p>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">দ্রুত লিংক</h4>
            <ul className="space-y-2 text-white/80">
              <li>
                <a href="#hero" className="hover:text-accent transition-colors">
                  হোম
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-accent transition-colors">
                  আমাদের সম্পর্কে
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-accent transition-colors">
                  সেবা
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-accent transition-colors">
                  যোগাযোগ
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">কর্মঘণ্টা</h4>
            <ul className="space-y-2 text-white/80">
              <li>সোমবার - শুক্রবার: ৯:০০ - ১৮:০০</li>
              <li>শনিবার: ৯:০০ - ১৪:০০</li>
              <li>রবিবার: বন্ধ</li>
              <li className="text-accent font-semibold pt-2">জরুরি সেবা: ২৪/৭</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/20 pt-8 text-center text-white/60">
          <p>© {new Date().getFullYear()} ভ্যানগার্ডস সিকিউরিটি কোম্পানি। সর্বস্বত্ব সংরক্ষিত।</p>
        </div>
      </div>
    </footer>
  )
}
