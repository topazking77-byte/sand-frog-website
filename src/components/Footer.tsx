import { Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <a href="#" className="flex items-center gap-2 mb-6 group">
              <img src="/brand-logo.png" alt="Sand Frog Air Logo" className="w-12 h-12 object-contain rounded-full bg-white/10 p-1" />
              <span className="font-display font-bold text-2xl tracking-tight text-white">
                Sand Frog<span className="text-emerald-500">HVAC</span>
              </span>
            </a>
            <p className="text-slate-400 leading-relaxed mb-6">
              Premium HVAC solutions for Arizona homes. We're dedicated to your comfort.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-emerald-500 hover:text-white transition-all">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {[
                { name: 'Services', href: '#services' },
                { name: 'About Us', href: '#about' },
                { name: 'Financing', href: '#contact' },
                { name: 'Reviews', href: '#reviews' },
                { name: 'Careers', href: '#' },
                { name: 'Privacy Policy', href: '#' }
              ].map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-emerald-400 transition-colors">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Areas We Serve */}
          <div>
            <h4 className="font-bold text-white text-lg mb-6">Areas We Serve</h4>
            <ul className="space-y-4">
              {['Mesa', 'Chandler', 'Gilbert', 'Tempe', 'Scottsdale', 'Phoenix'].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-emerald-400 transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white text-lg mb-6">Contact Us</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-emerald-500 shrink-0" />
                <span>11418 E Fairbrook Cir,<br />Mesa, AZ 85207</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-emerald-500 shrink-0" />
                <a href="tel:+14807883730" className="hover:text-white transition-colors">(480) 788-3730</a>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="w-6 h-6 text-emerald-500 shrink-0" />
                <a href="mailto:info@sandfrogair.com" className="hover:text-white transition-colors">info@sandfrogair.com</a>
              </li>
              <li className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-emerald-500 shrink-0 mt-1" />
                <div className="flex flex-col gap-1">
                  <div className="flex justify-between w-48"><span className="font-semibold text-white">Monday</span><span>Open 24 hours</span></div>
                  <div className="flex justify-between w-48"><span className="font-semibold text-white">Tuesday</span><span>Open 24 hours</span></div>
                  <div className="flex justify-between w-48"><span className="font-semibold text-white">Wednesday</span><span>Open 24 hours</span></div>
                  <div className="flex justify-between w-48"><span className="font-semibold text-white">Thursday</span><span>Open 24 hours</span></div>
                  <div className="flex justify-between w-48"><span className="font-semibold text-white">Friday</span><span>Open 24 hours</span></div>
                  <div className="flex justify-between w-48"><span className="font-semibold text-white">Saturday</span><span>Open 24 hours</span></div>
                  <div className="flex justify-between w-48"><span className="font-semibold text-white">Sunday</span><span>Open 24 hours</span></div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Sand Frog Air LLC All rights reserved.</p>
          <p>Designed with ❤️ in Arizona.</p>
        </div>
      </div>
    </footer>
  );
}
