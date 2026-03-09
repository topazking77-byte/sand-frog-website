import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Tara K.",
    location: "Gilbert, AZ",
    rating: 5,
    text: "We were about to head out of town, it was the middle of summer, and our AC was on the fritz. Tim, from Sand Frog Air, was over in no time! He was polite & professional and did a great job! I always recommend this company to others.",
    avatar: "https://i.pravatar.cc/150?img=1",
  },
  {
    name: "Steve J.",
    location: "Tempe, AZ",
    rating: 5,
    text: "I own a property management business and needed to find a new HVAC company to service my rentals. I had heard great things about Sand Frog Air and decided to give them a try. I'm glad I did! They are honest, reliable and have the best prices. Unlike other HVAC companies I've worked with they only repair what needs to be repaired and give upfront prices. Best of all I know I'm covered by their warranties and they respect my tenants.",
    avatar: "https://i.pravatar.cc/150?img=11",
  },
  {
    name: "Tom W.",
    location: "Mesa, AZ",
    rating: 5,
    text: "Great experience with Sand Frog Air. They showed up on time, figured out the problem fast, and charged a very fair price. I'll definitely be calling them again for my fall tune-up.",
    avatar: "https://i.pravatar.cc/150?img=5",
  },
];

export default function Testimonials() {
  return (
    <section id="reviews" className="py-24 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-1.5 rounded-full text-sm font-bold mb-6">
            <Star className="w-4 h-4 fill-current" /> 5-Star Rated Service
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-slate-900 mb-6">
            Don't Just Take Our Word For It
          </h2>
          <p className="text-lg text-slate-600">
            Read some of our perfect 5.0-star reviews and see why Sand Frog Air LLC is the premier choice.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 relative group"
            >
              <Quote className="absolute top-8 right-8 text-slate-100 w-12 h-12 group-hover:text-emerald-100 transition-colors" />

              <div className="flex items-center gap-1 text-yellow-400 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>

              <p className="text-slate-700 leading-relaxed mb-8 relative z-10">
                "{testimonial.text}"
              </p>

              <div className="flex items-center gap-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-md"
                />
                <div>
                  <h4 className="font-bold text-slate-900">{testimonial.name}</h4>
                  <span className="text-sm text-slate-500">{testimonial.location}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
