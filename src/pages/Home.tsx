import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {
  ArrowRight,
  MapPin,
  ShieldCheck,
  Trees,
  TrendingUp,
  Building2,
  Plane,
  Route,
  Factory,
  Quote,
  CheckCircle2,
  Phone,
} from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import ScrollReveal from '@/components/ScrollReveal';
import VentureCard from '@/components/VentureCard';
import { ventures } from '@/data/ventures';

const stats = [
  { value: '11', label: 'Premium Ventures' },
  { value: '1,390+', label: 'Plots Delivered' },
  { value: '15+', label: 'Years Experience' },
  { value: '500+', label: 'Happy Families' },
];

const heroSlides = [
  {
    title: 'Find Your Dream Plot in ',
    highlight: 'Shamshabad',
    subtitle:
      'HMDA & DTCP approved premium plotted developments in the fastest-growing real estate corridor of South Hyderabad — near ORR, International Airport & Electronic SEZ.',
  },
  {
    title: 'Smart Investments in ',
    highlight: 'Growing Land',
    subtitle:
      'Plots in Shamshabad have appreciated 2.5x–4x over the past decade. Invest today in HMDA & DTCP approved layouts with clear titles and ready infrastructure.',
  },
  {
    title: 'Shamshabad Real Estate — ',
    highlight: 'The Future Hub',
    subtitle:
      'With the airport, ORR, Pharma City and Regional Ring Road driving growth, Shamshabad is Hyderabad\'s most strategically located corridor for residential plots.',
  },
  {
    title: 'Premium Property in South ',
    highlight: 'Hyderabad',
    subtitle:
      'From gated communities to township-scale layouts, our 11 ventures offer every price point and lifestyle — backed by legal clarity and complete civic amenities.',
  },
];

const whyChoose = [
  {
    icon: ShieldCheck,
    title: 'Clear Titles & Approvals',
    desc: 'Every venture carries HMDA or DTCP approval with clear, marketable titles — verified by our legal team before launch.',
  },
  {
    icon: Trees,
    title: 'Green, Planned Layouts',
    desc: 'Avenue plantations, central parks and rainwater harvesting are standard in every venture — not add-ons.',
  },
  {
    icon: TrendingUp,
    title: 'High-Growth Locations',
    desc: 'Our ventures sit on Shamshabad\'s fastest-appreciating micro-locations, near the airport and ORR.',
  },
  {
    icon: Building2,
    title: 'Ready Infrastructure',
    desc: 'Black-top roads, underground drainage, water supply and street lighting are delivered before handover.',
  },
];

const locationHighlights = [
  {
    icon: Plane,
    title: 'Rajiv Gandhi International Airport',
    desc: 'India\'s busiest airport by passenger growth — 3 to 25 minutes from our ventures.',
  },
  {
    icon: Route,
    title: 'Outer Ring Road',
    desc: 'Seamless 30-minute connectivity to HITEC City, Financial District and Gachibowli.',
  },
  {
    icon: Factory,
    title: 'Pharma City & SEZs',
    desc: 'The world\'s largest pharma cluster and multiple SEZs drive workforce demand and rentals.',
  },
];

const testimonials = [
  {
    quote:
      'I bought a plot in Moghul Gardens in 2021 and the value has nearly doubled. The Shamshabad Real Estate team handled everything — legal checks, registration, the lot. Truly professional.',
    name: 'Ramesh K.',
    role: 'Investor, Moghul Gardens',
  },
  {
    quote:
      'As an NRI, I was hesitant to buy land remotely. Their team sent me video site visits, clear documents and even helped with power of attorney. The plot in Grand Ville is now my retirement home.',
    name: 'Dr. Anitha Reddy',
    role: 'NRI Buyer, Grand Ville',
  },
  {
    quote:
      'We compared five layouts before choosing Amity Park. The transparency and the quality of roads and drainage already completed won us over. No empty promises.',
    name: 'Srinivas & Lakshmi',
    role: 'Home Builders, Amity Park',
  },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div>
      {/* Hero */}
      <section className="relative flex min-h-screen items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/6875496/pexels-photo-6875496.jpeg?auto=compress&cs=tinysrgb&h=1200&w=1920"
            alt="Shamshabad aerial view"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald/90 via-emerald/70 to-emerald/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-emerald/60 via-transparent to-emerald/20" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 w-full">
          <div className="max-w-2xl">
            <p className="eyebrow mb-4 text-gold-light animate-fadeIn">
              Hyderabad's Premier Real Estate Partner
            </p>

            {/* Slideshow track — all slides in a horizontal row, translated as one unit */}
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-700 ease-[cubic-bezier(0.65,0,0.35,1)]"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {heroSlides.map((s, i) => (
                  <div key={i} className="w-full shrink-0 pr-2">
                    <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] text-ivory">
                      {s.title}
                      <span className="text-gold">{s.highlight}</span>
                    </h1>
                    <p className="mt-6 text-lg leading-relaxed text-ivory/80 max-w-xl min-h-[120px]">
                      {s.subtitle}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Slide indicators */}
            <div className="mt-5 flex items-center gap-2.5">
              {heroSlides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goToSlide(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === currentSlide
                      ? 'w-8 bg-gold'
                      : 'w-2 bg-ivory/40 hover:bg-ivory/60'
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/ventures" className="btn-primary">
                Explore Ventures
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/contact" className="btn-glass-light">
                Enquire Now
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <div className="flex h-10 w-6 justify-center rounded-full border-2 border-gold/50 pt-2">
            <div className="h-2 w-1 rounded-full bg-gold animate-bounce" />
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-emerald py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <ScrollReveal key={s.label} delay={i * 100}>
                <div className="text-center">
                  <div className="font-serif text-4xl lg:text-5xl font-bold text-gold">
                    {s.value}
                  </div>
                  <div className="mt-1 text-xs uppercase tracking-[0.2em] text-ivory/60">
                    {s.label}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* About preview */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <ScrollReveal>
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/8815909/pexels-photo-8815909.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                  alt="Real estate handshake"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 hidden sm:block rounded-2xl bg-gold p-6 shadow-xl">
                  <div className="font-serif text-3xl font-bold text-emerald">15+</div>
                  <div className="text-xs uppercase tracking-wider text-emerald/80">
                    Years of Trust
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <div>
                <p className="eyebrow mb-3">About Us</p>
                <h2 className="font-serif text-3xl lg:text-4xl font-bold text-emerald leading-tight">
                  Trusted Real Estate Partner in South Hyderabad
                </h2>
                <div className="gold-divider mt-5" />
                <p className="mt-5 text-ink-mid leading-relaxed">
                  Looking to buy or sell a plot in Shamshabad? Shamshabad
                  Real Estate is your trusted real estate partner, helping
                  buyers and sellers connect with the right opportunities
                  across Shamshabad, Tukkuguda, Maheshwaram, Mansanpally,
                  Kandukur and nearby developing areas.
                </p>
                <p className="mt-4 text-ink-mid leading-relaxed">
                  We specialise in buying and selling residential plots, HMDA &
                  DTCP approved layouts, open plots, resale plots and
                  investment properties. Whether you're a first-time buyer or
                  an experienced investor, our team is committed to helping
                  you find the right property at the right price.
                </p>
                <Link to="/about" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold hover:gap-3 transition-all">
                  Learn More About Us
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Featured ventures */}
      <section className="py-20 lg:py-28 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Portfolio"
            title="Featured Ventures"
            subtitle="Explore our portfolio of premium residential plot ventures across the Shamshabad corridor. Each layout is HMDA or DTCP approved with clear titles and complete civic amenities."
          />
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {ventures.slice(0, 6).map((v, i) => (
              <ScrollReveal key={v.slug} delay={i * 100}>
                <VentureCard venture={v} />
              </ScrollReveal>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link to="/ventures" className="btn-dark">
              View All Ventures
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Why Choose Us"
            title="Built on Trust, Delivered with Excellence"
            subtitle="We don't just sell plots — we deliver investment-grade land with infrastructure, legal clarity and long-term value."
          />
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChoose.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 100}>
                <div className="group h-full rounded-2xl bg-white p-7 shadow-lg ring-1 ring-emerald/5 transition-all duration-500 hover:shadow-xl hover:ring-gold/20 hover:-translate-y-1">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-emerald text-gold transition-all group-hover:bg-gold group-hover:text-emerald">
                    <item.icon className="h-7 w-7" />
                  </div>
                  <h3 className="mt-5 font-serif text-xl font-bold text-emerald">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-mid">
                    {item.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Location highlights */}
      <section className="py-20 lg:py-28 bg-emerald relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.pexels.com/photos/4456656/pexels-photo-4456656.jpeg?auto=compress&cs=tinysrgb&h=800&w=1920"
            alt="Hyderabad skyline"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Location Advantage"
            title="Shamshabad — The Growth Corridor"
            subtitle="Three mega-infrastructure anchors make Shamshabad the most strategically located real estate corridor in Hyderabad."
            light
          />
          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {locationHighlights.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 120}>
                <div className="h-full rounded-2xl bg-emerald-mid/40 backdrop-blur-sm p-8 ring-1 ring-gold/20 transition-all hover:bg-emerald-mid/60 hover:ring-gold/40">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gold/20 text-gold">
                    <item.icon className="h-8 w-8" />
                  </div>
                  <h3 className="mt-5 font-serif text-xl font-bold text-ivory">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ivory/70">
                    {item.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 lg:py-28 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Testimonials"
            title="What Our Buyers Say"
            subtitle="Real stories from families and investors who chose Shamshabad Real Estate."
          />
          <div className="mt-14 grid md:grid-cols-3 gap-7">
            {testimonials.map((t, i) => (
              <ScrollReveal key={t.name} delay={i * 120}>
                <div className="h-full rounded-2xl bg-white p-8 shadow-lg ring-1 ring-emerald/5">
                  <Quote className="h-8 w-8 text-gold/40" />
                  <p className="mt-4 text-sm leading-relaxed text-ink-mid italic">
                    "{t.quote}"
                  </p>
                  <div className="mt-6 flex items-center gap-3 border-t border-cream pt-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-emerald font-serif text-lg font-bold text-gold">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold text-sm text-emerald">{t.name}</div>
                      <div className="text-xs text-ink-light">{t.role}</div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-footer relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <img
            src="https://images.pexels.com/photos/2516858/pexels-photo-2516858.jpeg?auto=compress&cs=tinysrgb&h=800&w=1920"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <p className="eyebrow text-gold mb-4">Ready to Invest?</p>
            <h2 className="font-serif text-3xl lg:text-5xl font-bold text-ivory leading-tight">
              Let's Find Your Perfect Plot in Shamshabad
            </h2>
            <p className="mt-5 text-ivory/70 max-w-2xl mx-auto leading-relaxed">
              Schedule a free site visit or talk to our team about your budget
              and goals. We'll guide you to the right venture — no pressure,
              no gimmicks.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="btn-primary">
                <Phone className="h-4 w-4" />
                Schedule a Site Visit
              </Link>
              <Link to="/ventures" className="btn-glass-light">
                Browse Ventures
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-ivory/60">
              {['Free Site Visits', 'Clear Legal Titles', 'Bank Loan Assistance', 'NRI Support'].map((item) => (
                <span key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-gold" />
                  {item}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
