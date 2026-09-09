import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube } from 'lucide-react';
import { ventures } from '@/data/ventures';

export default function Footer() {
  return (
    <footer className="bg-footer text-ivory/70">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/logo-emblem.png"
                alt="Shamshabad Real Estate"
                className="h-12 w-12 rounded-full object-cover bg-white ring-2 ring-gold/50 shadow-md p-0.5"
              />
              <div className="flex flex-col leading-none">
                <span className="font-serif text-xl font-bold text-ivory">
                  Shamshabad
                </span>
                <span className="text-[10px] uppercase tracking-[0.3em] text-gold mt-1">
                  Real Estate
                </span>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-ivory/60 mb-5">
              Your trusted real estate partner in the Shamshabad corridor.
              HMDA & DTCP approved premium plotted developments near the
              airport, ORR and Electronic SEZ.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-mid/40 text-gold transition-all hover:bg-gold hover:text-emerald"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-mid/40 text-gold transition-all hover:bg-gold hover:text-emerald"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-mid/40 text-gold transition-all hover:bg-gold hover:text-emerald"
                aria-label="Youtube"
              >
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-gold-light mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="hover:text-gold transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-gold transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-gold transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/ventures" className="hover:text-gold transition-colors">
                  All Ventures
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-gold transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-gold transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Ventures */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-gold-light mb-4">
              Our Ventures
            </h4>
            <ul className="space-y-2.5 text-sm">
              {ventures.slice(0, 7).map((v) => (
                <li key={v.slug}>
                  <Link
                    to={`/ventures/${v.slug}`}
                    className="hover:text-gold transition-colors"
                  >
                    {v.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/ventures"
                  className="text-gold font-medium hover:text-gold-light transition-colors"
                >
                  View all →
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-gold-light mb-4">
              Get in Touch
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-gold" />
                <span>Shamshabad, Hyderabad, Telangana 501218</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-gold" />
                <a href="tel:+919908224832" className="hover:text-gold transition-colors">
                  +91 99082 24832
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-gold" />
                <a
                  href="mailto:myproperties90@gmail.com"
                  className="hover:text-gold transition-colors break-all"
                >
                  myproperties90@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="h-4 w-4 mt-0.5 shrink-0 text-gold" />
                <span>Mon - Sat: 9:30 AM - 7:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-emerald-mid/30 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-ivory/50">
            © {new Date().getFullYear()} Shamshabad Real Estate. All rights reserved.
          </p>
          <p className="text-xs text-ivory/50">
            HMDA & DTCP Approved Plotted Developments · RERA Registered
          </p>
        </div>
      </div>
    </footer>
  );
}
