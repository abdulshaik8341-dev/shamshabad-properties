import { useState, FormEvent } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  Loader2,
  AlertCircle,
} from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import { ventures } from '@/data/ventures';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Visit Us',
    lines: ['Shamshabad, Hyderabad', 'Telangana 501218'],
  },
  {
    icon: Phone,
    title: 'Call Us',
    lines: ['+91 99082 24832', '+91 72889 92087'],
  },
  {
    icon: Mail,
    title: 'Email Us',
    lines: ['myproperties90@gmail.com'],
  },
  {
    icon: Clock,
    title: 'Working Hours',
    lines: ['Mon - Sat: 9:30 AM - 7:00 PM', 'Sunday: By Appointment'],
  },
];

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export default function Contact() {
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMsg('');

    const formData = new FormData(e.currentTarget);
    const data = {
      name: (formData.get('name') as string).trim(),
      email: (formData.get('email') as string).trim(),
      phone: (formData.get('phone') as string).trim(),
      interest: (formData.get('interest') as string) || null,
      message: (formData.get('message') as string)?.trim() || null,
    };

    if (!data.name || !data.email || !data.phone) {
      setStatus('error');
      setErrorMsg('Please fill in your name, email and phone number.');
      return;
    }

    if (supabase) {
      await supabase.from('contact_submissions').insert(data);
    }

    const whatsappMessage = [
      'Hello, I would like to enquire about Shamshabad Real Estate.',
      `Name: ${data.name}`,
      `Phone: ${data.phone}`,
      `Email: ${data.email}`,
      `Interested in: ${data.interest || 'General Enquiry'}`,
      data.message ? `Message: ${data.message}` : '',
    ]
      .filter(Boolean)
      .join('\n');

    window.location.href = `https://wa.me/919908224832?text=${encodeURIComponent(whatsappMessage)}`;
  };

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/8469935/pexels-photo-8469935.jpeg?auto=compress&cs=tinysrgb&h=800&w=1920"
            alt="Contact us"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald/95 to-emerald/60" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <p className="eyebrow text-gold-light mb-3">Contact Us</p>
            <h1 className="font-serif text-4xl lg:text-5xl font-bold text-ivory leading-tight max-w-3xl">
              Let's Find Your Perfect Plot
            </h1>
            <div className="gold-divider mt-5" />
            <p className="mt-6 text-lg text-ivory/80 max-w-2xl leading-relaxed">
              Schedule a free site visit, request venture details, or talk to
              our team about your budget and goals. We respond within 24 hours.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact info cards */}
      <section className="py-16 -mt-10 relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {contactInfo.map((c, i) => (
              <ScrollReveal key={c.title} delay={i * 100}>
                <div className="h-full rounded-2xl bg-white p-6 shadow-lg ring-1 ring-emerald/5 text-center transition-all hover:shadow-xl hover:-translate-y-1">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald text-gold mb-4">
                    <c.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-emerald">{c.title}</h3>
                  {c.lines.map((line) => (
                    <p key={line} className="mt-1 text-sm text-ink-mid">{line}</p>
                  ))}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Map */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Form */}
            <ScrollReveal>
              <div className="rounded-2xl bg-white p-8 lg:p-10 shadow-xl ring-1 ring-emerald/5">
                <p className="eyebrow mb-3">Enquiry Form</p>
                <h2 className="font-serif text-2xl lg:text-3xl font-bold text-emerald">
                  Send Us a Message
                </h2>
                <div className="gold-divider mt-4 mb-6" />

                {status === 'success' ? (
                  <div className="text-center py-8">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-light/20 text-emerald mb-4">
                      <CheckCircle2 className="h-8 w-8" />
                    </div>
                    <h3 className="font-serif text-xl font-bold text-emerald">
                      Thank You!
                    </h3>
                    <p className="mt-3 text-sm text-ink-mid">
                      Your enquiry has been received. Our team will contact you
                      within 24 hours.
                    </p>
                    <button
                      onClick={() => setStatus('idle')}
                      className="mt-6 btn-outline"
                    >
                      Send Another Enquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-emerald mb-1.5">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          className="w-full rounded-lg border border-cream bg-ivory/50 px-4 py-3 text-sm text-ink outline-none transition-all focus:border-gold focus:ring-2 focus:ring-gold/20"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-emerald mb-1.5">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          className="w-full rounded-lg border border-cream bg-ivory/50 px-4 py-3 text-sm text-ink outline-none transition-all focus:border-gold focus:ring-2 focus:ring-gold/20"
                          placeholder="+91 99082 24832"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-emerald mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        className="w-full rounded-lg border border-cream bg-ivory/50 px-4 py-3 text-sm text-ink outline-none transition-all focus:border-gold focus:ring-2 focus:ring-gold/20"
                        placeholder="you@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-emerald mb-1.5">
                        Interested In
                      </label>
                      <select
                        name="interest"
                        defaultValue=""
                        className="w-full rounded-lg border border-cream bg-ivory/50 px-4 py-3 text-sm text-ink outline-none transition-all focus:border-gold focus:ring-2 focus:ring-gold/20"
                      >
                        <option value="">Select a venture or service</option>
                        <option value="General Enquiry">General Enquiry</option>
                        <option value="Site Visit">Schedule a Site Visit</option>
                        {ventures.map((v) => (
                          <option key={v.slug} value={v.name}>
                            {v.name}
                          </option>
                        ))}
                        <option value="Selling a Plot">I want to sell a plot</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-emerald mb-1.5">
                        Message
                      </label>
                      <textarea
                        name="message"
                        rows={4}
                        className="w-full rounded-lg border border-cream bg-ivory/50 px-4 py-3 text-sm text-ink outline-none transition-all focus:border-gold focus:ring-2 focus:ring-gold/20 resize-none"
                        placeholder="Tell us about your requirements, budget, timeline..."
                      />
                    </div>

                    {status === 'error' && (
                      <div className="flex items-center gap-2 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">
                        <AlertCircle className="h-4 w-4 shrink-0" />
                        {errorMsg}
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="w-full btn-primary disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {status === 'submitting' ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4" />
                          Enquire Now
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </ScrollReveal>

            {/* Map + side info */}
            <ScrollReveal delay={150}>
              <div className="flex flex-col gap-6 h-full">
                <div className="rounded-2xl overflow-hidden shadow-xl flex-1 min-h-[300px]">
                  <iframe
                    title="Shamshabad location map"
                    src="https://www.openstreetmap.org/export/embed.html?bbox=78.32%2C17.20%2C78.48%2C17.30&layer=mapnik&marker=17.2517%2C78.3984"
                    className="w-full h-full border-0 min-h-[300px]"
                    loading="lazy"
                  />
                </div>
                <div className="rounded-2xl bg-emerald p-8 text-ivory">
                  <h3 className="font-serif text-xl font-bold text-gold-light mb-3">
                    Why Reach Out to Us?
                  </h3>
                  <ul className="space-y-3 text-sm text-ivory/80">
                    {[
                      'Free site visits to any venture',
                      'Complete legal verification at no cost',
                      'Bank loan assistance with major lenders',
                      'NRI support with power of attorney',
                      'Resale and secondary market guidance',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
