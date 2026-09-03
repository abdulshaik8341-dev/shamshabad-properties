import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, ArrowLeft } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import { blogPosts } from '@/data/blog';

export default function Blog() {
  const [featured, ...rest] = blogPosts;

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/35235126/pexels-photo-35235126.jpeg?auto=compress&cs=tinysrgb&h=800&w=1920"
            alt="Blog"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald/95 to-emerald/60" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <p className="eyebrow text-gold-light mb-3">Blog & Insights</p>
            <h1 className="font-serif text-4xl lg:text-5xl font-bold text-ivory leading-tight max-w-3xl">
              Real Estate Insights for Shamshabad
            </h1>
            <div className="gold-divider mt-5" />
            <p className="mt-6 text-lg text-ivory/80 max-w-2xl leading-relaxed">
              Market trends, buying guides, infrastructure updates and
              investment tips — everything you need to make an informed
              decision in the Shamshabad corridor.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Featured post */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <Link
              to={`/blog/${featured.slug}`}
              className="group grid lg:grid-cols-2 gap-8 lg:gap-12 items-center rounded-2xl overflow-hidden bg-white shadow-xl ring-1 ring-emerald/5 transition-all hover:shadow-2xl"
            >
              <div className="relative h-64 lg:h-80 overflow-hidden">
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="rounded-full bg-gold px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald">
                    Featured
                  </span>
                </div>
              </div>
              <div className="p-8 lg:pr-12">
                <div className="flex items-center gap-4 text-xs text-ink-light mb-3">
                  <span className="font-semibold text-emerald">{featured.category}</span>
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5" />
                    {new Date(featured.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" />
                    {featured.readTime}
                  </span>
                </div>
                <h2 className="font-serif text-2xl lg:text-3xl font-bold text-emerald leading-tight group-hover:text-gold transition-colors">
                  {featured.title}
                </h2>
                <p className="mt-4 text-ink-mid leading-relaxed">
                  {featured.excerpt}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold transition-all group-hover:gap-3">
                  Read Article
                  <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Post grid */}
      <section className="py-16 lg:py-20 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-emerald mb-2">Latest Articles</h2>
          <div className="gold-divider mb-10" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {rest.map((post, i) => (
              <ScrollReveal key={post.slug} delay={(i % 3) * 100}>
                <Link
                  to={`/blog/${post.slug}`}
                  className="group flex flex-col h-full overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-emerald/5 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1.5"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="rounded-full bg-emerald/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-gold-light">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center gap-3 text-xs text-ink-light mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="font-serif text-lg font-bold text-emerald leading-tight group-hover:text-gold transition-colors">
                      {post.title}
                    </h3>
                    <p className="mt-3 text-sm text-ink-mid leading-relaxed flex-1">
                      {post.excerpt}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-gold transition-all group-hover:gap-2.5">
                      Read More
                      <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </Link>
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
              Have Questions About Buying in Shamshabad?
            </h2>
            <p className="mt-5 text-ivory/70 max-w-2xl mx-auto">
              Our team is here to help. Reach out for a free consultation or
              site visit to any of our ventures.
            </p>
            <Link to="/contact" className="mt-8 btn-primary inline-flex">
              <ArrowLeft className="h-4 w-4" />
              Contact Us
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
