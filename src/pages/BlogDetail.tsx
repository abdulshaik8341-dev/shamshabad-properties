import { useParams, Link, Navigate } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft, ChevronRight, ArrowRight, User } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import { getPostBySlug, blogPosts } from '@/data/blog';

export default function BlogDetail() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <div className="pt-20">
      {/* Breadcrumb */}
      <div className="bg-cream py-3">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-ink-light">
            <Link to="/" className="hover:text-emerald">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <Link to="/blog" className="hover:text-emerald">Blog</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-emerald font-medium truncate">{post.title}</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="relative py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={post.image}
            alt={post.title}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-emerald/95 via-emerald/80 to-emerald/60" />
        </div>
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <span className="inline-block rounded-full bg-gold px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-emerald">
              {post.category}
            </span>
            <h1 className="mt-4 font-serif text-3xl lg:text-5xl font-bold text-ivory leading-tight">
              {post.title}
            </h1>
            <div className="mt-6 flex flex-wrap items-center gap-5 text-sm text-ivory/70">
              <span className="flex items-center gap-2">
                <User className="h-4 w-4 text-gold" />
                {post.author}
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-gold" />
                {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-gold" />
                {post.readTime}
              </span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Article body */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="space-y-6">
              {post.content.map((para, i) => (
                <p
                  key={i}
                  className={`text-ink-mid leading-relaxed ${
                    i === 0 ? 'text-lg font-medium text-ink' : ''
                  }`}
                >
                  {para}
                </p>
              ))}
            </div>

            <div className="mt-12 rounded-2xl bg-cream p-8 text-center">
              <p className="font-serif text-xl font-bold text-emerald mb-2">
                Want to learn more?
              </p>
              <p className="text-sm text-ink-mid mb-5">
                Schedule a free consultation with our team to discuss your
                property goals in Shamshabad.
              </p>
              <Link to="/contact" className="btn-primary inline-flex">
                Contact Us
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Related posts */}
      <section className="py-16 lg:py-20 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-serif text-2xl lg:text-3xl font-bold text-emerald">
              Related Articles
            </h2>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-sm font-semibold text-gold hover:gap-3 transition-all"
            >
              <ArrowLeft className="h-4 w-4" />
              All Articles
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {related.map((p, i) => (
              <ScrollReveal key={p.slug} delay={i * 100}>
                <Link
                  to={`/blog/${p.slug}`}
                  className="group flex flex-col h-full overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-emerald/5 transition-all duration-500 hover:shadow-xl hover:-translate-y-1.5"
                >
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-5">
                    <span className="text-xs font-semibold text-gold uppercase tracking-wider">
                      {p.category}
                    </span>
                    <h3 className="mt-2 font-serif text-lg font-bold text-emerald leading-tight group-hover:text-gold transition-colors">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-sm text-ink-mid line-clamp-2">{p.excerpt}</p>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
