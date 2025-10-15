export default function About() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 text-balance">আমাদের সম্পর্কে</h2>
            <div className="w-24 h-1 bg-accent mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                ভ্যানগার্ডস সিকিউরিটি কোম্পানি বাংলাদেশে পেশাদার নিরাপত্তা সেবা প্রদান করে থাকে। আমরা আমাদের ক্লায়েন্টদের সর্বোচ্চ মানের নিরাপত্তা
                নিশ্চিত করতে প্রতিশ্রুতিবদ্ধ।
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                আমাদের প্রশিক্ষিত এবং অভিজ্ঞ নিরাপত্তা কর্মীরা ২৪/৭ আপনার সম্পত্তি এবং ব্যবসায়ের সুরক্ষা নিশ্চিত করে। আমরা আধুনিক প্রযুক্তি এবং
                পেশাদার দক্ষতার সমন্বয়ে সেবা প্রদান করি।
              </p>
              <div className="flex gap-4 pt-4">
                <div className="flex-1 bg-primary text-white p-6 rounded-lg text-center">
                  <div className="text-4xl font-bold text-accent mb-2">১০+</div>
                  <div className="text-sm">বছরের অভিজ্ঞতা</div>
                </div>
                <div className="flex-1 bg-primary text-white p-6 rounded-lg text-center">
                  <div className="text-4xl font-bold text-accent mb-2">৫০০+</div>
                  <div className="text-sm">সন্তুষ্ট ক্লায়েন্ট</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="/professional-security-team-in-corporate-setting.jpg"
                alt="নিরাপত্তা দল"
                className="rounded-lg shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-accent text-primary p-6 rounded-lg shadow-xl">
                <div className="text-3xl font-bold">১০০%</div>
                <div className="text-sm font-semibold">বিশ্বস্ত সেবা</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
