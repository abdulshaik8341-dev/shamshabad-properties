import { Link } from 'react-router-dom';
import {
  Sprout,
  MapPin,
  Building2,
  Building,
  Home,
  Factory,
  FileCheck,
  MapPinned,
  TrendingUp,
  ScrollText,
  Landmark,
  Repeat,
  Globe,
  LifeBuoy,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Award,
  Users,
  Clock,
  PhoneCall,
  ClipboardList,
  PenLine,
  KeyRound,
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
      'https://www.yahaproperties.in/assets/service-agricultural-VI9Zpa8W.jpg',
  },
  {
    icon: MapPin,
    title: 'Open Residential Plots',
    description:
      'HMDA & DTCP-approved residential plot layouts in prime locations with complete infrastructure and amenities.',
    image:
      'https://www.yahaproperties.in/assets/service-plots-B0gcHaQw.jpg',
  },
  {
    icon: Building2,
    title: 'Gated Community Developments',
    description:
      'Secure, well-planned gated communities with modern amenities, landscaping, and 24/7 security.',
    image:
      'https://www.yahaproperties.in/assets/service-gated-lXtPF8l7.jpg',
  },
  {
    icon: Building,
    title: 'Apartment Sales',
    description:
      'Modern apartments in premium locations with contemporary designs and top-notch construction quality.',
    image:
      'https://www.yahaproperties.in/assets/service-apartments-DPSbrVnG.jpg',
  },
  {
    icon: Home,
    title: 'Villa & Individual House Sales',
    description:
      'Luxury villas and independent houses crafted with premium materials and thoughtful architecture.',
    image:
      'https://www.yahaproperties.in/assets/service-villas-tefiJsKp.jpg',
  },
  {
    icon: Factory,
    title: 'Industrial & SEZ Belt Investments',
    description:
      'Strategic investments along the Shamshabad industrial corridor with high ROI potential.',
    image:
      'https://www.yahaproperties.in/assets/service-industrial-C7bzgfrY.jpg',
  },
];

const supportServices = [
  {
    icon: MapPin,
    title: 'Residential Plot Sales',
    description:
      'Access a wide range of DTCP & HMDA approved residential plots across Shamshabad and Maheshwaram. We offer transparent pricing and complete documentation support for every plot we sell.',
    image: '/service-plot-sales.jpg',
  },
  {
    icon: FileCheck,
    title: 'Legal Documentation',
    description:
      'Our expert legal team assists with title verification, sale deed preparation, encumbrance certificate checks, link document review and all statutory registrations — ensuring a 100% risk-free purchase.',
    image: '/service-legal-docs.jpg',
  },
  {
    icon: MapPinned,
    title: 'Free Site Visits',
    description:
      'We will guide you to site visits to all our venture locations. Experience the infrastructure, surroundings and neighbourhood before making your investment decision.',
  },
  {
    icon: TrendingUp,
    title: 'Investment Advisory',
    description:
      'Our seasoned advisors analyse market trends, micro-market data, and growth corridors to guide you toward the best investment. We help you maximise ROI on your land purchase.',
    image: '/service-investment.jpg',
  },
  {
    icon: ScrollText,
    title: 'Property Registration',
    description:
      'We handle the entire Sub-Registrar office process including appointment scheduling, document preparation, stamp duty calculation and post-registration formalities — completely hassle-free.',
    image: '/service-registration.jpg',
  },
  {
    icon: Landmark,
    title: 'Home Loan Assistance',
    description:
      'We have partnerships with leading banks and NBFCs to provide our clients with competitive home loan and plot loan options. Get pre-approved quickly with our dedicated finance desk.',
    image: '/service-home-loan.jpg',
  },
  {
    icon: Repeat,
    title: 'Resale & Resettlement',
    description:
      'Looking to sell your existing plot or buy a resale property in the Shamshabad belt? Our team handles end-to-end resale transactions with fair valuation and quick closures.',
  },
  {
    icon: Globe,
    title: 'NRI Investment Support',
    description:
      'Special end-to-end support for NRI investors including virtual site tours, power of attorney assistance, FEMA compliance, and seamless remote documentation for international clients.',
  },
  {
    icon: LifeBuoy,
    title: 'Post-Sale Support',
    description:
      "Our relationship doesn't end at registration. We offer ongoing support for plot development, utility connections, layout plan approvals, and any future queries you may have.",
  },
];

const processSteps = [
  {
    icon: PhoneCall,
    title: 'Enquiry & Consultation',
    description:
      'Reach out to us via call, WhatsApp or the contact form. Our advisor understands your requirements and shortlists the best-fit venture for you.',
  },
  {
    icon: MapPinned,
    title: 'Site Visit',
    description:
      'We schedule a free guided site visit at your convenience. Explore the venture, infrastructure, surroundings and ask all your questions in person.',
  },
  {
    icon: ClipboardList,
    title: 'Documentation & Agreement',
    description:
      'Once you choose your plot, we walk you through the complete legal documentation — title deeds, sale agreement, encumbrance verification and more.',
  },
  {
    icon: KeyRound,
    title: 'Registration & Handover',
    description:
      'We manage the Sub-Registrar registration process end-to-end and hand over the plot documents. Your dream investment is now officially yours!',
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
    icon: Clock,
    title: '10+ Years of Experience',
    desc: 'Two decades of trusted Real Estate practice in South Hyderabad with a proven track record of successful transactions.',
  },
  {
    icon: ShieldCheck,
    title: '100% Legal Transparency',
    desc: 'All ventures carry DTCP/HMDA approvals. We share all legal documents upfront with no hidden surprises.',
  },
  {
    icon: Award,
    title: 'Best Price Guarantee',
    desc: 'We offer fair, market-aligned pricing with flexible payment plans — ensuring maximum value for your investment.',
  },
  {
    icon: Users,
    title: 'Dedicated After-Sales Support',
    desc: "Your relationship with us doesn't end at purchase. We provide ongoing support for all property-related needs.",
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
              Everything You Need, Under One Roof
            </h1>
            <div className="gold-divider mt-5" />
            <p className="mt-6 text-lg text-ivory/80 max-w-2xl leading-relaxed">
              We are more than just a real estate firm. We are your complete
              property partner — from the very first enquiry to the final
              registration and beyond.
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
            eyebrow="Complete Property Support"
            title="Our Support Services"
            subtitle="We handle everything from legal documentation to registration, loans to NRI support — so your property journey is smooth from start to finish."
          />
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {supportServices.map((s, i) => (
              <ScrollReveal key={s.title} delay={i * 80}>
                <div className="group h-full overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-emerald/5 transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
                  {'image' in s && s.image && (
                    <div className="h-48 overflow-hidden">
                      <img
                        src={s.image}
                        alt={s.title}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                  )}
                  <div className="p-7">
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
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process steps */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="How We Work"
            title="Our Simple 4-Step Process"
            subtitle="From your first call to the moment you hold your registered plot documents, we make every step effortless."
          />
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, i) => (
              <ScrollReveal key={step.title} delay={i * 100}>
                <div className="relative h-full rounded-2xl bg-cream p-7 transition-all duration-500 hover:bg-white hover:shadow-lg hover:-translate-y-1">
                  <span className="absolute top-4 right-5 font-serif text-5xl font-bold text-gold/15">
                    {i + 1}
                  </span>
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald text-gold">
                    <step.icon className="h-7 w-7" />
                  </div>
                  <h3 className="mt-5 font-serif text-lg font-bold text-emerald">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-mid">
                    {step.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-20 lg:py-28 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Why Choose Us"
            title="The Shamshabad Advantage"
            subtitle="Four reasons why families and investors trust us with their property journey."
          />
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((w, i) => (
              <ScrollReveal key={w.title} delay={i * 100}>
                <div className="group h-full rounded-2xl bg-white p-7 text-center shadow-lg ring-1 ring-emerald/5 transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
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
              Ready to Start Your Real Estate Journey?
            </h2>
            <p className="mt-5 text-ivory/70 max-w-2xl mx-auto">
              Whether you're buying your first plot, investing in land, or need
              help with legal documentation — our team is ready to assist you.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="btn-primary">
                Get Free Consultation
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
