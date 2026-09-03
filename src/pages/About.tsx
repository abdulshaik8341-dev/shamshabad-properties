import { Link } from 'react-router-dom';
import {
  Target,
  Eye,
  Heart,
  ShieldCheck,
  Trees,
  TrendingUp,
  Users,
  Award,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import ScrollReveal from '@/components/ScrollReveal';

const values = [
  {
    icon: ShieldCheck,
    title: 'Transparency',
    desc: 'Every document, every title, every approval — shared openly with buyers before any commitment.',
  },
  {
    icon: Heart,
    title: 'Customer First',
    desc: 'We guide buyers through legal checks, registration and bank loans at no extra cost.',
  },
  {
    icon: Trees,
    title: 'Sustainable Development',
    desc: 'Green spaces, rainwater harvesting and native plantations are standard, not optional.',
  },
  {
    icon: TrendingUp,
    title: 'Long-Term Value',
    desc: 'We choose locations on the growth path — not just what sells today, but what appreciates tomorrow.',
  },
];

const milestones = [
  { year: '2010', text: 'Founded with a single venture in Maheshwaram' },
  { year: '2014', text: 'Expanded to 4 ventures across Shamshabad belt' },
  { year: '2018', text: 'Crossed 500+ plots delivered with zero legal disputes' },
  { year: '2022', text: 'Launched our first HMDA premium venture — Grand Ville' },
  { year: '2026', text: '11 active ventures across the Shamshabad corridor' },
];

const teamFeatures = [
  { icon: Users, title: 'Experienced Team', desc: 'Field experts who know every lane of the Shamshabad corridor.' },
  { icon: Award, title: 'RERA Compliant', desc: 'All ventures follow RERA norms with registered project numbers.' },
  { icon: ShieldCheck, title: 'Legal Verification', desc: 'In-house legal team verifies titles before any plot is listed.' },
];

export default function About() {
  return (
    <div className="pt-20">
      {/* Page hero */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/12966707/pexels-photo-12966707.jpeg?auto=compress&cs=tinysrgb&h=800&w=1920"
            alt="Hyderabad"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald/95 to-emerald/60" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <p className="eyebrow text-gold-light mb-3">About Us</p>
            <h1 className="font-serif text-4xl lg:text-5xl font-bold text-ivory leading-tight max-w-3xl">
              Your Gateway to South Hyderabad's Best Addresses
            </h1>
            <div className="gold-divider mt-5" />
            <p className="mt-6 text-lg text-ivory/80 max-w-2xl leading-relaxed">
              For over 15 years, Shamshabad Properties has helped families and
              investors find the right plot in the right location — with clear
              titles, complete infrastructure and honest guidance.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <ScrollReveal>
              <img
                src="https://images.pexels.com/photos/7415055/pexels-photo-7415055.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="Our story"
                className="rounded-2xl shadow-2xl"
              />
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <div>
                <p className="eyebrow mb-3">Our Story</p>
                <h2 className="font-serif text-3xl lg:text-4xl font-bold text-emerald leading-tight">
                  From One Venture to a Trusted Portfolio
                </h2>
                <div className="gold-divider mt-5" />
                <p className="mt-5 text-ink-mid leading-relaxed">
                  Shamshabad Properties began in 2010 with a single DTCP-approved
                  layout in Maheshwaram and a simple belief: that buying land
                  should be transparent, stress-free and built on trust.
                </p>
                <p className="mt-4 text-ink-mid leading-relaxed">
                  Over 15 years, we have grown to 11 active ventures across the
                  Shamshabad corridor — from Tukkuguda to Kandukur to Muchintal.
                  What hasn't changed is our commitment: every plot we sell
                  carries clear titles, real infrastructure and a genuine
                  growth story behind it.
                </p>
                <p className="mt-4 text-ink-mid leading-relaxed">
                  If you own a plot and are planning to sell, we help you get
                  the best possible market price through our local expertise and
                  extensive network of genuine buyers.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="py-20 lg:py-28 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-7">
            <ScrollReveal>
              <div className="h-full rounded-2xl bg-white p-8 lg:p-10 shadow-lg ring-1 ring-emerald/5">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-emerald text-gold">
                  <Target className="h-7 w-7" />
                </div>
                <h3 className="mt-5 font-serif text-2xl font-bold text-emerald">
                  Our Mission
                </h3>
                <div className="gold-divider mt-4" />
                <p className="mt-4 text-ink-mid leading-relaxed">
                  To make plot ownership in the Shamshabad corridor accessible,
                  transparent and rewarding — for first-time buyers, seasoned
                  investors and NRIs alike. We deliver investment-grade land
                  with infrastructure that is built before promises are made.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <div className="h-full rounded-2xl bg-white p-8 lg:p-10 shadow-lg ring-1 ring-emerald/5">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-emerald text-gold">
                  <Eye className="h-7 w-7" />
                </div>
                <h3 className="mt-5 font-serif text-2xl font-bold text-emerald">
                  Our Vision
                </h3>
                <div className="gold-divider mt-4" />
                <p className="mt-4 text-ink-mid leading-relaxed">
                  To be South Hyderabad's most trusted real estate partner —
                  recognised for ethical practice, infrastructure quality and
                  long-term value creation. We envision a Shamshabad corridor
                  where every family can own a piece of its growth story.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Values"
            title="What We Stand For"
            subtitle="Four principles that guide every venture we plan and every plot we sell."
          />
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <ScrollReveal key={v.title} delay={i * 100}>
                <div className="group h-full rounded-2xl bg-cream p-7 transition-all duration-500 hover:bg-white hover:shadow-lg hover:-translate-y-1">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-emerald text-gold transition-all group-hover:bg-gold group-hover:text-emerald">
                    <v.icon className="h-7 w-7" />
                  </div>
                  <h3 className="mt-5 font-serif text-xl font-bold text-emerald">{v.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-mid">{v.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Journey timeline */}
      <section className="py-20 lg:py-28 bg-cream">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Journey"
            title="15 Years of Growth"
          />
          <div className="mt-14 relative">
            <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gold/30 -translate-x-1/2" />
            <div className="space-y-8">
              {milestones.map((m, i) => (
                <ScrollReveal key={m.year} delay={i * 80}>
                  <div className={`relative flex items-center gap-6 ${i % 2 === 0 ? 'sm:flex-row-reverse sm:text-right' : ''}`}>
                    <div className="flex-1 hidden sm:block" />
                    <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 z-10">
                      <div className="h-4 w-4 rounded-full bg-gold ring-4 ring-cream" />
                    </div>
                    <div className="flex-1 pl-12 sm:pl-0">
                      <div className="rounded-2xl bg-white p-5 shadow-md ring-1 ring-emerald/5">
                        <span className="font-serif text-2xl font-bold text-gold">{m.year}</span>
                        <p className="mt-1 text-sm text-ink-mid">{m.text}</p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team features */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {teamFeatures.map((f, i) => (
              <ScrollReveal key={f.title} delay={i * 120}>
                <div className="text-center rounded-2xl bg-white p-8 shadow-lg ring-1 ring-emerald/5">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald text-gold">
                    <f.icon className="h-8 w-8" />
                  </div>
                  <h3 className="mt-5 font-serif text-xl font-bold text-emerald">{f.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-mid">{f.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-emerald">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-ivory leading-tight">
              Ready to Start Your Property Journey?
            </h2>
            <p className="mt-5 text-ivory/70 max-w-2xl mx-auto">
              Talk to our team or schedule a free site visit to any of our
              ventures. We're here to help you make the right decision.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="btn-primary">
                Contact Us
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/ventures" className="btn-glass-light">
                Explore Ventures
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-ivory/60">
              {['No Hidden Charges', 'Free Legal Verification', 'Bank Loan Support'].map((item) => (
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
