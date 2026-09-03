import { Link } from 'react-router-dom';
import { MapPin, ArrowRight } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import VentureCard from '@/components/VentureCard';
import { ventures } from '@/data/ventures';

export default function Ventures() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/2516858/pexels-photo-2516858.jpeg?auto=compress&cs=tinysrgb&h=800&w=1920"
            alt="Ventures"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald/95 to-emerald/60" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <p className="eyebrow text-gold-light mb-3">Our Portfolio</p>
            <h1 className="font-serif text-4xl lg:text-5xl font-bold text-ivory leading-tight max-w-3xl">
              Premium Ventures Across Shamshabad
            </h1>
            <div className="gold-divider mt-5" />
            <p className="mt-6 text-lg text-ivory/80 max-w-2xl leading-relaxed">
              Explore our {ventures.length} HMDA & DTCP approved residential
              plot ventures. Each layout offers clear titles, complete civic
              amenities and a location on Shamshabad's growth path.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Venture grid */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {ventures.map((v, i) => (
              <ScrollReveal key={v.slug} delay={(i % 3) * 100}>
                <VentureCard venture={v} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-cream">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-emerald leading-tight">
              Not Sure Which Venture Is Right for You?
            </h2>
            <p className="mt-5 text-ink-mid max-w-2xl mx-auto">
              Our team will help you compare locations, pricing and amenities
              based on your budget and goals. Schedule a free consultation today.
            </p>
            <Link to="/contact" className="mt-8 btn-primary inline-flex">
              Get Personalised Advice
              <ArrowRight className="h-4 w-4" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
