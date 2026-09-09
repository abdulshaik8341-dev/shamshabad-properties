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
    lines: [
      { text: 'Shamshabad, Hyderabad' },
      { text: 'Telangana 501218' },
    ],
  },
  {
    icon: Phone,
    title: 'Call Us',
    lines: [
      { text: '+91 99082 24832', href: 'tel:+919908224832' },
      { text: '+91 72889 92087', href: 'tel:+917288992087' },
    ],
  },
  {
    icon: Mail,
    title: 'Email Us',
    lines: [
      { text: 'myproperties90@gmail.com', href: 'mailto:myproperties90@gmail.com' },
    ],
  },
  {
    icon: Clock,
    title: 'Working Hours',
    lines: [
      { text: 'Mon - Sat: 9:30 AM - 7:00 PM' },
      { text: 'Sunday: By Appointment' },
    ],
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

    // Redirect to WhatsApp

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

    setStatus('success');
    window.location.href = `https://wa.me/919908224832?text=${encodeURIComponent(whatsappMessage)}`;
  };

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-32 lg:py-40 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/8469935/pexels-photo-8469935.jpeg?auto=compress&cs=tinysrgb&h=1080&w=1920"
            alt="Contact us"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-footer via-emerald/95 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-ivory via-transparent to-transparent opacity-90" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <p className="eyebrow text-gold mb-4 tracking-[0.3em]">Get In Touch</p>
            <h1 className="font-serif text-5xl lg:text-7xl font-bold text-ivory leading-tight max-w-3xl drop-shadow-sm">
              Let's Find Your <span className="text-gold">Perfect Plot</span>
            </h1>
            <div className="gold-divider mt-8 mb-6" />
            <p className="text-lg lg:text-xl text-ivory/90 max-w-2xl leading-relaxed font-light drop-shadow-md">
              Schedule a free site visit, request venture details, or talk to
              our team about your budget and goals. We respond within 24 hours.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact info cards */}
      <section className="py-12 -mt-16 relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((c, i) => (
              <ScrollReveal key={c.title} delay={i * 100}>
                <div className="h-full rounded-2xl bg-footer border border-gold/10 p-8 shadow-2xl text-center transition-all duration-500 hover:border-gold/40 hover:shadow-gold/10 hover:-translate-y-2">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gold/10 text-gold mb-6 ring-1 ring-gold/20">
                    <c.icon className="h-7 w-7" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-ivory mb-2">{c.title}</h3>
                  {c.lines.map((line) => (
                    line.href ? (
                      <a 
                        key={line.text} 
                        href={line.href} 
                        className="block mt-1 text-sm text-ivory/80 hover:text-gold transition-colors font-medium"
                      >
                        {line.text}
                      </a>
                    ) : (
                      <p key={line.text} className="mt-1 text-sm text-ivory/60">{line.text}</p>
                    )
                  ))}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Map */}
      <section className="py-20 lg:py-28 bg-ivory">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">
            {/* Form */}
            <ScrollReveal>
              <div className="rounded-3xl bg-white p-8 lg:p-12 shadow-2xl shadow-emerald/5 ring-1 ring-emerald/5">
                <p className="eyebrow mb-4 text-gold">Enquiry Form</p>
                <h2 className="font-serif text-3xl lg:text-4xl font-bold text-emerald">
                  Send Us a Message
                </h2>
                <div className="gold-divider mt-5 mb-8" />

                {status === 'success' ? (
                  <div className="text-center py-12">
                    <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald/5 text-emerald mb-6 ring-1 ring-emerald/20">
                      <CheckCircle2 className="h-10 w-10" />
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-emerald">
                      Thank You!
                    </h3>
                    <p className="mt-4 text-ink-mid leading-relaxed">
                      Your enquiry has been received. Our luxury real estate consultants will contact you
                      within 24 hours.
                    </p>
                    <button
                      onClick={() => setStatus('idle')}
                      className="mt-8 btn-outline"
                    >
                      Send Another Enquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold tracking-wide text-emerald mb-2">
                          FULL NAME *
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          className="w-full rounded-xl border-0 bg-cream/50 px-5 py-3.5 text-ink shadow-inner outline-none transition-all placeholder:text-ink/30 focus:bg-white focus:ring-2 focus:ring-gold"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold tracking-wide text-emerald mb-2">
                          PHONE NUMBER *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          className="w-full rounded-xl border-0 bg-cream/50 px-5 py-3.5 text-ink shadow-inner outline-none transition-all placeholder:text-ink/30 focus:bg-white focus:ring-2 focus:ring-gold"
                          placeholder="+91 99082 24832"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold tracking-wide text-emerald mb-2">
                        EMAIL ADDRESS *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        className="w-full rounded-xl border-0 bg-cream/50 px-5 py-3.5 text-ink shadow-inner outline-none transition-all placeholder:text-ink/30 focus:bg-white focus:ring-2 focus:ring-gold"
                        placeholder="you@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold tracking-wide text-emerald mb-2">
                        INTERESTED IN
                      </label>
                      <select
                        name="interest"
                        defaultValue=""
                        className="w-full rounded-xl border-0 bg-cream/50 px-5 py-3.5 text-ink shadow-inner outline-none transition-all focus:bg-white focus:ring-2 focus:ring-gold"
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
                      <label className="block text-sm font-semibold tracking-wide text-emerald mb-2">
                        MESSAGE
                      </label>
                      <textarea
                        name="message"
                        rows={5}
                        className="w-full rounded-xl border-0 bg-cream/50 px-5 py-3.5 text-ink shadow-inner outline-none transition-all placeholder:text-ink/30 focus:bg-white focus:ring-2 focus:ring-gold resize-none"
                        placeholder="Tell us about your requirements, budget, timeline..."
                      />
                    </div>

                    {status === 'error' && (
                      <div className="flex items-center gap-3 rounded-xl bg-red-50 px-5 py-4 text-sm text-red-700 border border-red-100">
                        <AlertCircle className="h-5 w-5 shrink-0" />
                        {errorMsg}
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="w-full btn-primary py-4 text-sm tracking-widest disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {status === 'submitting' ? (
                        <>
                          <Loader2 className="h-5 w-5 animate-spin" />
                          SENDING...
                        </>
                      ) : (
                        <>
                          <Send className="h-5 w-5" />
                          ENQUIRE NOW
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </ScrollReveal>

            {/* Map + side info */}
            <ScrollReveal delay={150}>
              <div className="flex flex-col gap-8 h-full">
                <div className="rounded-3xl overflow-hidden shadow-2xl flex-1 min-h-[350px] ring-1 ring-black/5 bg-cream relative">
                  <div className="absolute inset-0 pointer-events-none rounded-3xl ring-1 ring-inset ring-black/10 z-10" />
                  <iframe
                    title="Shamshabad location map"
                    src="https://www.openstreetmap.org/export/embed.html?bbox=78.32%2C17.20%2C78.48%2C17.30&layer=mapnik&marker=17.2517%2C78.3984"
                    className="w-full h-full border-0 min-h-[350px] pointer-events-none"
                    loading="lazy"
                  />
                </div>
                <div className="rounded-3xl bg-footer p-10 shadow-2xl ring-1 ring-white/5 text-ivory relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-8 opacity-5">
                    <MapPin className="w-32 h-32" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-gold mb-6 relative z-10">
                    Why Reach Out to Us?
                  </h3>
                  <ul className="space-y-4 text-base text-ivory/80 relative z-10">
                    {[
                      'Free site visits to any venture',
                      'Complete legal verification at no cost',
                      'Bank loan assistance with major lenders',
                      'NRI support with power of attorney',
                      'Resale and secondary market guidance',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-4">
                        <CheckCircle2 className="h-6 w-6 text-gold shrink-0" />
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
