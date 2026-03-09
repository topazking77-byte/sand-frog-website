import { motion } from 'motion/react';
import { CreditCard, Clock, ShieldCheck, Zap } from 'lucide-react';

const features = [
  {
    icon: CreditCard,
    title: "Flexible Financing",
    description: "0% interest for 12 months on new installations. Apply in minutes.",
    color: "bg-emerald-500",
  },
  {
    icon: Clock,
    title: "Emergency Service",
    description: "We're here when you need us most. No overtime charges for nights or weekends.",
    color: "bg-orange-500",
  },
  {
    icon: ShieldCheck,
    title: "Upfront Pricing",
    description: "Know the cost before we start. No hidden fees or surprises.",
    color: "bg-emerald-500",
  },
  {
    icon: Zap,
    title: "Energy Efficiency",
    description: "Save on utility bills with our high-efficiency systems and smart thermostats.",
    color: "bg-yellow-500",
  },
];

export default function Features() {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display font-bold text-4xl md:text-5xl text-slate-900 mb-6">
            Why Choose Sand Frog Air LLC?
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            We combine premium service with transparent pricing to deliver the best HVAC experience in Arizona.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-slate-100 group"
            >
              <div className={`w-14 h-14 ${feature.color} rounded-xl flex items-center justify-center mb-6 text-white shadow-lg group-hover:scale-110 transition-transform`}>
                <feature.icon className="w-7 h-7" />
              </div>
              <h3 className="font-bold text-xl text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
