import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, ThermometerSnowflake, Wrench, Fan, Flame, X } from 'lucide-react';

const services = [
  {
    title: "AC Installation",
    description: "Upgrade to a high-efficiency system and beat the heat for good.",
    icon: ThermometerSnowflake,
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop",
    details: "The EPA states that proper sizing and installation of an air conditioning system can improve efficiency by up to 30%. Sizing a system incorrectly can lead to higher utility bills, shorter equipment life, and poor humidity control. Modern high-efficiency AC units use up to 50% less energy than units produced in the mid-1990s."
  },
  {
    title: "Repair & Diagnostics",
    description: "Fast, accurate repairs for all makes and models. We fix it right the first time.",
    icon: Wrench,
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop",
    details: "According to the Department of Energy, a dirty condenser coil can increase a compressor's energy consumption by 30%. Early diagnostics often prevent catastrophic failures. The majority of HVAC breakdowns are caused by lack of regular maintenance and ignoring minor issues."
  },
  {
    title: "Maintenance Plans",
    description: "Prevent breakdowns and extend the life of your system with regular tune-ups.",
    icon: Fan,
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop",
    details: "Regular HVAC maintenance can retain up to 95% of its original efficiency and performance. The EPA emphasizes that cleaning or replacing air filters every 1-2 months can lower air conditioner energy consumption by 5% to 15%."
  },
  {
    title: "Heating & Heat Pumps",
    description: "Keep warm during chilly desert nights with our expert heating and heat pump solutions.",
    icon: Flame,
    image: "/heat-pump.png",
    details: "Air-source heat pumps can reduce your electricity use for heating by approximately 50% compared to electric resistance heating (like furnaces and baseboard heaters), according to the US Department of Energy. They double as highly efficient coolers in the summer."
  },
  {
    title: "Mini-Split Systems",
    description: "Targeted, efficient cooling and heating for individual rooms or additions without ductwork.",
    icon: ThermometerSnowflake,
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop",
    details: "Ductless mini-split systems avoid the energy losses associated with ductwork. According to the DOE, duct losses can account for more than 30% of energy consumption for space conditioning, making mini-splits highly efficient for room-specific climate control."
  },
  {
    title: "Indoor Air Quality",
    description: "Breathe easier with advanced air filtration, purification, and duct cleaning services.",
    icon: Fan,
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop",
    details: "The EPA reports that indoor levels of pollutants may be 2 to 5 times—and occasionally more than 100 times—higher than outdoor levels. Proper ventilation, high-MERV air filters, and UV purifiers can significantly reduce airborne contaminants and allergens."
  },
];

export default function Services() {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-emerald-500 font-bold tracking-wider uppercase text-sm mb-2 block">Our Expertise</span>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-slate-900 leading-tight">
              Comprehensive Climate Solutions for Your Home
            </h2>
          </div>
          <button className="hidden md:flex items-center gap-2 text-emerald-600 font-bold hover:text-emerald-700 transition-colors group">
            View All Services <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              onClick={() => setSelectedService(service)}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative overflow-hidden rounded-3xl h-[400px] cursor-pointer"
            >
              <img
                src={service.image}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center mb-4 text-white border border-white/20">
                  <service.icon className="w-6 h-6" />
                </div>
                <h3 className="text-white font-bold text-2xl mb-2">{service.title}</h3>
                <p className="text-slate-300 mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  {service.description}
                </p>
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                  Learn More <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
          <button className="inline-flex items-center gap-2 text-emerald-600 font-bold hover:text-emerald-700 transition-colors">
            View All Services <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm"
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-white rounded-3xl p-8 max-w-lg w-full shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-6 right-6 p-2 rounded-full hover:bg-slate-100 text-slate-500 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600 mb-6">
                <selectedService.icon className="w-8 h-8" />
              </div>

              <h3 className="font-display font-bold text-3xl text-slate-900 mb-4">
                {selectedService.title}
              </h3>

              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p className="font-medium text-slate-900">
                  {selectedService.description}
                </p>
                <div className="h-px bg-slate-100 my-4" />
                <h4 className="font-bold text-emerald-600 text-sm uppercase tracking-wider mb-2">Verified Facts</h4>
                <p>
                  {selectedService.details}
                </p>
              </div>

              <div className="mt-8">
                <a
                  href="#contact"
                  onClick={() => setSelectedService(null)}
                  className="w-full inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 px-8 rounded-xl transition-colors shadow-lg shadow-emerald-200"
                >
                  Schedule this Service
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
