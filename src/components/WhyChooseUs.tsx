import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

const reasons = [
    "Family Owned and Operated",
    "Small appointment windows",
    "Honest, fair, upfront pricing",
    "Clear price quotes",
    "Our satisfaction guarantee"
];

export default function WhyChooseUs() {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Text Content */}
                    <div className="flex-1">
                        <span className="text-emerald-500 font-bold tracking-wider uppercase text-sm mb-2 block">Differentiators</span>
                        <h2 className="font-display font-bold text-4xl md:text-5xl text-slate-900 leading-tight mb-6">
                            Why Choose Sand Frog Air LLC
                        </h2>
                        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                            Whether you need emergency repair or routine maintenance, we continually strive to exceed expectations. We combine our use of the highest quality parts and equipment with our dedication to delivering exceptional, guaranteed service to provide you with top quality HVAC solutions.
                        </p>

                        <ul className="space-y-4">
                            {reasons.map((reason, index) => (
                                <motion.li
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex items-center gap-3 text-slate-700 font-medium text-lg"
                                >
                                    <CheckCircle2 className="w-6 h-6 text-emerald-500 flex-shrink-0" />
                                    {reason}
                                </motion.li>
                            ))}
                        </ul>
                    </div>

                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="flex-1 relative"
                    >
                        <div className="absolute inset-0 bg-emerald-100 rounded-3xl transform rotate-3 scale-105"></div>
                        <img
                            src="https://images.unsplash.com/photo-1581094288338-2314dddb7ece?q=80&w=2070&auto=format&fit=crop"
                            alt="HVAC Technician working"
                            className="relative z-10 rounded-3xl shadow-xl w-full h-[500px] object-cover"
                        />

                        {/* Floating badge */}
                        <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl z-20 border border-slate-100">
                            <div className="text-4xl font-black text-emerald-600 mb-1">20+</div>
                            <div className="text-slate-600 font-medium leading-tight">Years of<br />Experience</div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
