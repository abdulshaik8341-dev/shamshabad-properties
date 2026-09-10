import { useParams, Link, Navigate } from 'react-router-dom';
import { useState, useEffect, useCallback } from 'react';
import {
  MapPin,
  BadgeCheck,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Building2,
  Ruler,
  Tag,
  Layers,
  Phone,
  ChevronRight,
} from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import { getVentureBySlug, ventures } from '@/data/ventures';
import VentureCard from '@/components/VentureCard';

export default function VentureDetail() {
  const { slug } = useParams<{ slug: string }>();
  const venture = slug ? getVentureBySlug(slug) : undefined;
  const [activeImage, setActiveImage] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextImage = useCallback(() => {
    if (venture) {
      setActiveImage((prev) => (prev + 1) % venture.gallery.length);
    }
  }, [venture]);

  // Auto-slideshow: cycle every 3 seconds
  useEffect(() => {
    if (!venture || venture.gallery.length <= 1 || isPaused) return;
    const timer = setInterval(nextImage, 3000);
    return () => clearInterval(timer);
  }, [venture, isPaused, nextImage]);

  // Reset active image when venture changes
  useEffect(() => {
    setActiveImage(0);
  }, [slug]);

  if (!venture) {
    return <Navigate to="/ventures" replace />;
  }

  const otherVentures = ventures.filter((v) => v.slug !== venture.slug).slice(0, 3);

  const specs = [
    { icon: MapPin, label: 'Location', value: venture.location },
    { icon: BadgeCheck, label: 'Approval', value: venture.approval },
    { icon: Layers, label: 'Total Plots', value: venture.totalPlots },
    { icon: Ruler, label: 'Plot Sizes', value: venture.plotSizes },
    { icon: Building2, label: 'Status', value: venture.status },
  ];

  return (
    <div className="pt-20">
      {/* Breadcrumb */}
      <div className="bg-cream py-3">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-ink-light">
            <Link to="/" className="hover:text-emerald">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <Link to="/ventures" className="hover:text-emerald">Ventures</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-emerald font-medium">{venture.name}</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="relative py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={venture.image}
            alt={venture.name}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald/95 via-emerald/80 to-emerald/50" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <span className="inline-block rounded-full bg-gold px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-emerald">
              {venture.approval}
            </span>
            <h1 className="mt-4 font-serif text-4xl lg:text-5xl font-bold text-ivory leading-tight">
              {venture.name}
            </h1>
            <p className="mt-3 flex items-center gap-2 text-lg text-gold-light">
              <MapPin className="h-5 w-5" />
              {venture.location}
            </p>
            <p className="mt-4 text-ivory/80 text-lg max-w-2xl italic">
              {venture.tagline}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/contact" className="btn-primary">
                <Phone className="h-4 w-4" />
                Enquire About This Venture
              </Link>
              <Link to="/ventures" className="btn-glass-light">
                <ArrowLeft className="h-4 w-4" />
                All Ventures
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Quick specs */}
      <section className="py-10 bg-white border-b border-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {specs.map((s) => (
              <div key={s.label} className="text-center">
                <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-cream text-emerald mb-2">
                  <s.icon className="h-5 w-5" />
                </div>
                <div className="text-[10px] uppercase tracking-wider text-ink-light">{s.label}</div>
                <div className="text-sm font-semibold text-emerald mt-0.5">{s.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About + Gallery */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <ScrollReveal>
              <div>
                <p className="eyebrow mb-3">About the Venture</p>
                <h2 className="font-serif text-3xl font-bold text-emerald leading-tight">
                  {venture.name}
                </h2>
                <div className="gold-divider mt-5" />
                {venture.about.map((para, i) => (
                  <p key={i} className="mt-5 text-ink-mid leading-relaxed">
                    {para}
                  </p>
                ))}

                <div className="mt-8 rounded-2xl bg-cream p-6">
                  <h3 className="font-serif text-lg font-bold text-emerald mb-4">
                    Key Highlights
                  </h3>
                  <ul className="space-y-3">
                    {venture.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-3 text-sm text-ink-mid">
                        <CheckCircle2 className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <div
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                className="flex flex-col gap-4"
              >
                <div className="relative rounded-3xl overflow-hidden shadow-2xl group ring-1 ring-emerald/5 bg-cream">
                  <img
                    src={venture.gallery[activeImage]}
                    alt={`${venture.name} view ${activeImage + 1}`}
                    className={`w-full h-[400px] lg:h-[500px] transition-all duration-700 ease-in-out ${
                      venture.gallery[activeImage].includes('amity-park-img') || venture.gallery[activeImage].includes('layout') || venture.gallery[activeImage].includes('plan') || venture.gallery[activeImage].includes('indica-homes')
                        ? 'object-contain p-4 bg-emerald/5'
                        : 'object-cover'
                    }`}
                  />
                  {/* Premium Next/Prev Arrows */}
                  {venture.gallery.length > 1 && (
                    <>
                      <button
                        onClick={() => setActiveImage((prev) => (prev - 1 + venture.gallery.length) % venture.gallery.length)}
                        className="absolute left-4 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-emerald shadow-lg opacity-0 group-hover:opacity-100 transition-all hover:bg-gold hover:text-white hover:scale-110"
                        aria-label="Previous image"
                      >
                        <ArrowLeft className="h-5 w-5" />
                      </button>
                      <button
                        onClick={() => setActiveImage((prev) => (prev + 1) % venture.gallery.length)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-emerald shadow-lg opacity-0 group-hover:opacity-100 transition-all hover:bg-gold hover:text-white hover:scale-110"
                        aria-label="Next image"
                      >
                        <ArrowRight className="h-5 w-5" />
                      </button>
                    </>
                  )}
                </div>
                
                {/* Premium Thumbnails */}
                {venture.gallery.length > 1 && (
                  <div className="grid grid-cols-3 gap-4">
                    {venture.gallery.map((img, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveImage(i)}
                        className={`relative rounded-2xl overflow-hidden transition-all duration-300 ${
                          activeImage === i
                            ? 'ring-2 ring-gold ring-offset-2 scale-[1.02] shadow-lg'
                            : 'ring-1 ring-emerald/10 hover:ring-gold/50 opacity-70 hover:opacity-100'
                        }`}
                      >
                        <img
                          src={img}
                          alt={`${venture.name} thumbnail ${i + 1}`}
                          className={`w-full h-24 lg:h-32 ${
                            img.includes('amity-park-img') || img.includes('layout') || img.includes('plan') || img.includes('indica-homes')
                              ? 'object-contain bg-emerald/5 p-2'
                              : 'object-cover'
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="py-20 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <p className="eyebrow mb-3">Amenities</p>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-emerald">
              Everything Built In
            </h2>
            <div className="gold-divider mt-5 mx-auto" />
            <p className="mt-5 text-ink-mid">
              Standard infrastructure and lifestyle amenities in {venture.name} —
              delivered before handover, not promised for later.
            </p>
          </div>
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {venture.amenities.map((a, i) => (
              <ScrollReveal key={a} delay={(i % 5) * 60}>
                <div className="flex items-center gap-3 rounded-xl bg-white p-4 shadow-sm ring-1 ring-emerald/5 transition-all hover:shadow-md hover:ring-gold/20">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald/10 text-gold">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <span className="text-sm font-medium text-ink-mid">{a}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Location advantages */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div>
                <p className="eyebrow mb-3">Location Advantages</p>
                <h2 className="font-serif text-3xl font-bold text-emerald leading-tight">
                  Connected to What Matters
                </h2>
                <div className="gold-divider mt-5" />
                <ul className="mt-6 space-y-4">
                  {venture.locationAdvantages.map((l) => (
                    <li key={l} className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold">
                        <MapPin className="h-5 w-5" />
                      </div>
                      <span className="text-ink-mid leading-relaxed pt-2">{l}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={venture.gallery[1] || venture.image}
                  alt={`${venture.name} location`}
                  className="w-full h-96 object-cover"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-footer">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-ivory leading-tight">
              Interested in {venture.name}?
            </h2>
            <p className="mt-5 text-ivory/70 max-w-2xl mx-auto">
              Schedule a free site visit or request the full layout plan and
              pricing sheet. Our team will get back to you within 24 hours.
            </p>
            <Link to="/contact" className="mt-8 btn-primary inline-flex">
              Enquire Now
              <ArrowRight className="h-4 w-4" />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Other ventures */}
      <section className="py-20 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-emerald mb-2">
            Explore Other Ventures
          </h2>
          <div className="gold-divider mb-10" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {otherVentures.map((v, i) => (
              <ScrollReveal key={v.slug} delay={i * 100}>
                <VentureCard venture={v} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
