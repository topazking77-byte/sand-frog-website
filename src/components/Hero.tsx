import { motion } from 'motion/react';
import { Star, ShieldCheck, Clock, ArrowRight } from 'lucide-react';

export default function Hero({ onOpenSchedule, onOpenQuote }: { onOpenSchedule: () => void, onOpenQuote: () => void }) {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 grid grid-cols-2 md:grid-cols-3">
          <img src="/hero-1.png" alt="Modern HVAC Unit" className="w-full h-full object-cover" />
          <img src="/hero-2.png" alt="HVAC Technician Working" className="w-full h-full object-cover" />
          <img src="/hero-3.png" alt="Smart Thermostat" className="w-full h-full object-cover hidden md:block" />
        </div>
        <div className="absolute inset-0 bg-slate-900/60 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/60 to-transparent" />

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 text-sm font-medium text-emerald-300 mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Same Day Service Available
          </motion.div>

          <h1 className="font-display font-bold text-5xl md:text-7xl text-white leading-[1.1] mb-6 tracking-tight">
            Cool Relief from the <span className="text-emerald-400">Arizona Heat.</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed max-w-lg">
            Premium HVAC solutions with upfront pricing. We restore your comfort faster than anyone else in the valley.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <motion.button
              onClick={onOpenSchedule}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl shadow-emerald-500/20 flex items-center justify-center gap-2 group"
            >
              Schedule Service
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            <motion.button
              onClick={onOpenQuote}
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/5 transition-colors flex items-center justify-center"
            >
              Get a Quote
            </motion.button>
          </div>

          {/* Social Proof */}
          <div className="flex items-center gap-4 text-white/90">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-slate-900 bg-slate-700 overflow-hidden">
                  <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" className="w-full h-full object-cover" />
                </div>
              ))}
              <div className="w-10 h-10 rounded-full border-2 border-slate-900 bg-emerald-600 flex items-center justify-center text-xs font-bold text-center leading-tight">
                5<Star className="w-3 h-3 fill-current inline" />
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex text-yellow-400 gap-0.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="text-sm font-medium text-slate-300">Trusted by Arizona Homeowners</span>
            </div>
          </div>
        </motion.div>

        {/* Right Side - Abstract/Visual Element (Optional, or keep clean) */}
        <div className="hidden lg:block relative">
          {/* Floating Cards for "Upfront Pricing" etc */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="absolute top-10 right-10 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl max-w-xs shadow-2xl"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 bg-emerald-500/20 rounded-xl">
                <ShieldCheck className="w-6 h-6 text-emerald-400" />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">100% Guarantee</h3>
                <p className="text-slate-300 text-sm mt-1">If you're not satisfied, we'll make it right. No hidden fees.</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="absolute top-48 left-0 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl max-w-xs shadow-2xl"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 bg-orange-500/20 rounded-xl">
                <Clock className="w-6 h-6 text-orange-400" />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">Fast Response</h3>
                <p className="text-slate-300 text-sm mt-1">Average arrival time under 60 minutes for emergencies.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 1, duration: 1 },
          y: { repeat: Infinity, duration: 2, ease: "easeInOut" }
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/50 to-transparent" />
      </motion.div>
    </section>
  );
}
