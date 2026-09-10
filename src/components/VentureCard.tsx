import { Link } from 'react-router-dom';
import { MapPin, BadgeCheck, ArrowRight } from 'lucide-react';
import { Venture } from '@/data/ventures';

export default function VentureCard({ venture }: { venture: Venture }) {
  return (
    <Link
      to={`/ventures/${venture.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-emerald/5 transition-all duration-500 hover:shadow-2xl hover:ring-gold/30 hover:-translate-y-1.5"
    >
      <div className="relative h-56 overflow-hidden">
        <img
          src={venture.image}
          alt={venture.name}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-emerald/70 via-emerald/10 to-transparent" />
        <div className="absolute top-4 left-4">
          <span className="rounded-full bg-gold px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-emerald">
            {venture.approval}
          </span>
        </div>
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="font-serif text-xl font-bold text-ivory drop-shadow">
            {venture.name}
          </h3>
          <p className="flex items-center gap-1.5 text-sm text-gold-light mt-1">
            <MapPin className="h-3.5 w-3.5" />
            {venture.location}
          </p>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="text-sm text-ink-mid leading-relaxed line-clamp-2">
          {venture.tagline}
        </p>
        <div className="mt-4 grid grid-cols-2 gap-3 text-xs">
          <div className="rounded-lg bg-cream px-3 py-2">
            <span className="block text-ink-light uppercase tracking-wider mb-0.5">
              Plot Sizes
            </span>
            <span className="font-semibold text-emerald">
              {venture.plotSizes}
            </span>
          </div>
          <div className="rounded-lg bg-cream px-3 py-2">
            <span className="block text-ink-light uppercase tracking-wider mb-0.5">
              Total Plots
            </span>
            <span className="font-semibold text-emerald">
              {venture.totalPlots}
            </span>
          </div>
        </div>
        <div className="mt-4 flex items-center justify-between border-t border-cream pt-4">
          <span className="flex items-center gap-1.5 text-xs font-medium text-emerald-light">
            <BadgeCheck className="h-4 w-4 text-gold" />
            {venture.status}
          </span>
          <span className="flex items-center gap-1 text-sm font-semibold text-gold transition-all group-hover:gap-2">
            Details
            <ArrowRight className="h-4 w-4" />
          </span>
        </div>
      </div>
    </Link>
  );
}
