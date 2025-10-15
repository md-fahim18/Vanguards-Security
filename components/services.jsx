import { Shield, Building2, Home, Calendar } from "lucide-react"

const services = [
  {
    icon: Building2,
    title: "কর্পোরেট অফিস",
    description: "অফিস ভবনের জন্য সম্পূর্ণ নিরাপত্তা ব্যবস্থা এবং প্রশিক্ষিত নিরাপত্তা কর্মী।",
  },
  {
    icon: Home,
    title: "এপার্টমেন্ট ভবন",
    description: "আবাসিক ভবনের জন্য ২৪/৭ নিরাপত্তা সেবা এবং পর্যবেক্ষণ ব্যবস্থা।",
  },
  {
    icon: Shield,
    title: "রেস্টুরেন্ট",
    description: "রেস্টুরেন্ট এবং খাদ্য প্রতিষ্ঠানের জন্য বিশেষায়িত নিরাপত্তা সমাধান।",
  },
  {
    icon: Calendar,
    title: "ইভেন্ট / অনুষ্ঠান",
    description: "বিভিন্ন অনুষ্ঠান এবং ইভেন্টের জন্য অস্থায়ী নিরাপত্তা ব্যবস্থা।",
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 text-balance">আমাদের সেবা</h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            আমরা বিভিন্ন ধরনের নিরাপত্তা সেবা প্রদান করি যা আপনার প্রয়োজন অনুযায়ী কাস্টমাইজ করা যায়
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 group"
              >
                <div className="flex items-start gap-6">
                  <div className="bg-primary group-hover:bg-accent transition-colors p-4 rounded-lg">
                    <Icon className="w-8 h-8 text-white group-hover:text-primary transition-colors" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-primary mb-3">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-primary font-semibold">আরও জানতে আমাদের সাথে যোগাযোগ করুন</p>
        </div>
      </div>
    </section>
  )
}
