import { Link } from 'react-router-dom';
import {
  Sprout,
  MapPin,
  Building2,
  Building,
  Home,
  Factory,
  Scale,
  FileSearch,
  Ruler,
  Landmark,
  Banknote,
  TrendingUp,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Award,
  Users,
  Clock,
} from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import ScrollReveal from '@/components/ScrollReveal';

const mainServices = [
  {
    icon: Sprout,
    title: 'Agricultural Land Sales',
    description:
      'Premium agricultural land in high-growth zones around Shamshabad with verified legal documentation and clear titles.',
    image:
      'https://images.pexels.com/photos/36946235/pexels-photo-36946235.png?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    icon: MapPin,
    title: 'Open Residential Plots',
    description:
      'HMDA & DTCP-approved residential plot layouts in prime locations with complete infrastructure and amenities.',
    image:
      'https://images.pexels.com/photos/11201060/pexels-photo-11201060.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    icon: Building2,
    title: 'Gated Community Developments',
    description:
      'Secure, well-planned gated communities with modern amenities, landscaping, and 24/7 security.',
    image:
      'https://images.pexels.com/photos/7937280/pexels-photo-7937280.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    icon: Building,
    title: 'Apartment Sales',
    description:
      'Modern apartments in premium locations with contemporary designs and top-notch construction quality.',
    image:
      'https://images.pexels.com/photos/38000582/pexels-photo-38000582.png?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    icon: Home,
    title: 'Villa & Individual House Sales',
    description:
      'Luxury villas and independent houses crafted with premium materials and thoughtful architecture.',
    image:
      'https://images.pexels.com/photos/8082328/pexels-photo-8082328.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    icon: Factory,
    title: 'Industrial & SEZ Belt Investments',
    description:
      'Strategic investments along the Shamshabad industrial corridor with high ROI potential.',
    image:
      'https://images.pexels.com/photos/2425129/pexels-photo-2425129.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
];

const supportServices = [
  {
    icon: Scale,
    title: 'Legal Property Verification',
    description:
      'Comprehensive legal verification of property documents, titles, and ownership records for safe transactions.',
  },
  {
    icon: FileSearch,
    title: '70+ Year Document Verification',
    description:
      'In-depth analysis of property records spanning 70+ years to ensure absolute title clarity.',
  },
  {
    icon: Ruler,
    title: 'Survey & Measurement Assistance',
    description:
      'Professional land survey and measurement services with certified surveyors and accurate reporting.',
  },
  {
    icon: Landmark,
    title: 'Home Loan Assistance',
    description:
      'End-to-end home loan processing assistance with partnerships across major banks and NBFCs.',
  },
  {
    icon: Banknote,
    title: 'Mortgage Loan Processing',
    description:
      'Hassle-free mortgage loan processing with competitive rates and quick disbursement timelines.',
  },
  {
    icon: TrendingUp,
    title: 'Investment Consulting',
    description:
      'Expert guidance on real estate investment strategies, market trends, and portfolio diversification.',
  },
];

const stats = [
  { value: '500+', label: 'Plots Delivered' },
  { value: '11', label: 'Active Ventures' },
  { value: '15+', label: 'Years of Trust' },
  { value: '100%', label: 'Clear Titles' },
];

const whyChooseUs = [
  {
    icon: ShieldCheck,
    title: 'Verified Titles',
    desc: 'Every plot comes with fully verified legal documentation and clear ownership records.',
  },
  {
    icon: Award,
    title: 'HMDA & DTCP Approved',
    desc: 'All our ventures carry government-approved layout sanctions with RERA compliance.',
  },
  {
    icon: Users,
    title: 'Trusted by 500+ Families',
    desc: 'A growing community of satisfied buyers who found their perfect plot with us.',
  },
  {
    icon: Clock,
    title: '24-Hour Response',
    desc: 'Our team responds to every enquiry within 24 hours — no waiting, no delays.',
  },
];

export default function Services() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/2516858/pexels-photo-2516858.jpeg?auto=compress&cs=tinysrgb&h=800&w=1920"
            alt="Our services"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald/95 to-emerald/60" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <p className="eyebrow text-gold-light mb-3">Our Services</p>
            <h1 className="font-serif text-4xl lg:text-5xl font-bold text-ivory leading-tight max-w-3xl">
              Comprehensive Real Estate Solutions, End to End
            </h1>
            <div className="gold-divider mt-5" />
            <p className="mt-6 text-lg text-ivory/80 max-w-2xl leading-relaxed">
              From agricultural land sales to investment consulting, we offer a
              full range of real estate services tailored to buyers, investors,
              and NRI clients across the Shamshabad corridor.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 -mt-10 relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((s, i) => (
              <ScrollReveal key={s.label} delay={i * 80}>
                <div className="rounded-2xl bg-white p-6 text-center shadow-lg ring-1 ring-emerald/5">
                  <p className="font-serif text-3xl font-bold text-gold">{s.value}</p>
                  <p className="mt-1 text-sm text-ink-mid">{s.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Main services */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="What We Offer"
            title="Properties & Investments"
            subtitle="A diverse portfolio of real estate options — from open plots to gated communities, agricultural land to industrial investments."
          />
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {mainServices.map((s, i) => (
              <ScrollReveal key={s.title} delay={i * 100}>
                <div className="group h-full overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-emerald/5 transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
                  <div className="h-52 overflow-hidden">
                    <img
                      src={s.image}
                      alt={s.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald text-gold transition-all group-hover:bg-gold group-hover:text-emerald">
                      <s.icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-4 font-serif text-xl font-bold text-emerald">
                      {s.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-ink-mid">
                      {s.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Support services */}
      <section className="py-20 lg:py-28 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Beyond Buying & Selling"
            title="Support Services"
            subtitle="We don't just sell plots — we handle the legal, financial, and advisory work that makes your investment safe and stress-free."
          />
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {supportServices.map((s, i) => (
              <ScrollReveal key={s.title} delay={i * 100}>
                <div className="group h-full rounded-2xl bg-white p-7 shadow-lg ring-1 ring-emerald/5 transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-emerald text-gold transition-all group-hover:bg-gold group-hover:text-emerald">
                    <s.icon className="h-7 w-7" />
                  </div>
                  <h3 className="mt-5 font-serif text-xl font-bold text-emerald">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-mid">
                    {s.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Why Choose Us"
            title="The Shamshabad Advantage"
            subtitle="Four reasons why families and investors trust us with their property journey."
          />
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((w, i) => (
              <ScrollReveal key={w.title} delay={i * 100}>
                <div className="group h-full rounded-2xl bg-cream p-7 text-center transition-all duration-500 hover:bg-white hover:shadow-lg hover:-translate-y-1">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald text-gold transition-all group-hover:bg-gold group-hover:text-emerald">
                    <w.icon className="h-7 w-7" />
                  </div>
                  <h3 className="mt-5 font-serif text-lg font-bold text-emerald">
                    {w.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-mid">
                    {w.desc}
                  </p>
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
              Ready to Explore Your Options?
            </h2>
            <p className="mt-5 text-ivory/70 max-w-2xl mx-auto">
              Whether you're buying your first plot, investing in land, or need
              help with legal verification — our team is ready to assist you.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="btn-primary">
                Enquire Now
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/ventures" className="btn-glass-light">
                View Ventures
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-ivory/60">
              {[
                'Free Legal Verification',
                'Bank Loan Support',
                'Site Visits at No Cost',
              ].map((item) => (
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
