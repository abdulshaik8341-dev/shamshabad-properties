import { Link, useLocation } from 'react-router-dom';
import { useEffect, useMemo, useRef, useState } from 'react';
import { Menu, X, MapPin, Search } from 'lucide-react';
import { ventures } from '@/data/ventures';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [venturesOpen, setVenturesOpen] = useState(false);
  const [mobileVenturesOpen, setMobileVenturesOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const searchRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
    setVenturesOpen(false);
    setSearchOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setSearchOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const searchResults = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return ventures;
    return ventures.filter(
      (v) =>
        v.name.toLowerCase().includes(q) ||
        v.location.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  const isActive = (path: string) =>
    location.pathname === path ||
    (path !== '/' && location.pathname.startsWith(path));

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-ivory/95 py-2 shadow-md backdrop-blur-md"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-emerald ring-2 ring-gold/40 transition-all group-hover:ring-gold">
            <MapPin className="h-5 w-5 text-gold" strokeWidth={2.5} />
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-serif text-xl font-bold leading-none tracking-tight text-emerald">
              Shamshabad
            </span>
            <span className="text-[10px] uppercase leading-none tracking-[0.3em] text-gold">
              Real Estate
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-1">
          <li>
            <Link
              to="/"
              className={`px-4 py-2 text-sm font-medium rounded-full transition-all ${
                isActive('/') ? 'text-gold' : 'text-ink hover:text-emerald'
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={`px-4 py-2 text-sm font-medium rounded-full transition-all ${
                isActive('/about') ? 'text-gold' : 'text-ink hover:text-emerald'
              }`}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className={`px-4 py-2 text-sm font-medium rounded-full transition-all ${
                isActive('/services') ? 'text-gold' : 'text-ink hover:text-emerald'
              }`}
            >
              Services
            </Link>
          </li>
          <li
            className="relative"
            onMouseEnter={() => setVenturesOpen(true)}
            onMouseLeave={() => setVenturesOpen(false)}
          >
            <button
              className={`flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-full transition-all ${
                isActive('/ventures') ? 'text-gold' : 'text-ink hover:text-emerald'
              }`}
            >
              Ventures
            </button>
            <div
              className={`absolute left-1/2 top-full -translate-x-1/2 pt-2 transition-all duration-200 ${
                venturesOpen
                  ? 'opacity-100 visible translate-y-0'
                  : 'opacity-0 invisible -translate-y-2'
              }`}
            >
              <div className="w-[340px] rounded-2xl bg-ivory shadow-2xl ring-1 ring-emerald/10 overflow-hidden">
                <Link
                  to="/ventures"
                  className="flex items-center justify-between px-5 py-3 border-b border-cream text-sm font-semibold text-emerald hover:bg-cream transition-colors"
                >
                  All Ventures
                  <span className="text-gold">→</span>
                </Link>
                <div className="max-h-[420px] overflow-y-auto py-1">
                  {ventures.map((v) => (
                    <Link
                      key={v.slug}
                      to={`/ventures/${v.slug}`}
                      className="flex items-center gap-3 px-5 py-2.5 text-sm text-ink-mid hover:bg-cream hover:text-emerald transition-colors"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                      {v.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </li>
          <li>
            <Link
              to="/blog"
              className={`px-4 py-2 text-sm font-medium rounded-full transition-all ${
                isActive('/blog') ? 'text-gold' : 'text-ink hover:text-emerald'
              }`}
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={`px-4 py-2 text-sm font-medium rounded-full transition-all ${
                isActive('/contact') ? 'text-gold' : 'text-ink hover:text-emerald'
              }`}
            >
              Contact Us
            </Link>
          </li>
          {/* Search */}
          <li className="relative" ref={searchRef}>
            <button
              onClick={() => setSearchOpen((v) => !v)}
              className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-full transition-all text-ink hover:text-emerald"
              aria-label="Search ventures"
            >
              <Search className="h-4 w-4" />
              Search
            </button>
            <div
              className={`absolute right-0 top-full pt-2 transition-all duration-200 ${
                searchOpen
                  ? 'opacity-100 visible translate-y-0'
                  : 'opacity-0 invisible -translate-y-2'
              }`}
            >
              <div className="w-[340px] rounded-2xl bg-ivory shadow-2xl ring-1 ring-emerald/10 overflow-hidden">
                <div className="flex items-center gap-2 px-4 py-3 border-b border-cream">
                  <Search className="h-4 w-4 text-gold shrink-0" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search ventures by name or location..."
                    autoFocus={searchOpen}
                    className="w-full bg-transparent text-sm text-ink placeholder:text-ink-light/60 outline-none"
                  />
                </div>
                <div className="max-h-[360px] overflow-y-auto py-1">
                  {searchResults.length === 0 ? (
                    <div className="px-5 py-6 text-center text-sm text-ink-light">
                      No ventures found for "{searchQuery}"
                    </div>
                  ) : (
                    searchResults.map((v) => (
                      <Link
                        key={v.slug}
                        to={`/ventures/${v.slug}`}
                        className="flex items-center gap-3 px-5 py-2.5 text-sm text-ink-mid hover:bg-cream hover:text-emerald transition-colors"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                        <span className="flex flex-col">
                          {v.name}
                          <span className="text-[11px] text-ink-light">{v.location}</span>
                        </span>
                      </Link>
                    ))
                  )}
                </div>
              </div>
            </div>
          </li>
        </ul>

        <Link
          to="/contact"
          className="hidden lg:inline-flex items-center justify-center gap-2 rounded-full border border-gold/50 bg-gold/15 px-6 py-2.5 text-sm font-semibold uppercase tracking-wider text-emerald backdrop-blur-md transition-all duration-300 hover:border-gold/80 hover:bg-gold/30 hover:shadow-lg hover:shadow-gold/20"
        >
          Enquire Now
        </Link>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen((v) => !v)}
          className={`lg:hidden p-2 transition-colors ${
            'text-emerald'
          }`}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="mx-4 mt-2 rounded-2xl bg-ivory shadow-2xl ring-1 ring-emerald/10 p-4">
          <Link
            to="/"
            className="block px-4 py-3 text-sm font-medium text-ink rounded-lg hover:bg-cream"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block px-4 py-3 text-sm font-medium text-ink rounded-lg hover:bg-cream"
          >
            About Us
          </Link>
          <Link
            to="/services"
            className="block px-4 py-3 text-sm font-medium text-ink rounded-lg hover:bg-cream"
          >
            Services
          </Link>
          <button
            onClick={() => setMobileVenturesOpen((v) => !v)}
            className="flex w-full items-center justify-between px-4 py-3 text-sm font-medium text-ink rounded-lg hover:bg-cream"
          >
            Ventures
            <span
              className={`text-gold transition-transform ${
                mobileVenturesOpen ? 'rotate-90' : ''
              }`}
            >
              →
            </span>
          </button>
          {mobileVenturesOpen && (
            <div className="ml-4 border-l border-cream pl-3">
              <Link
                to="/ventures"
                className="block px-4 py-2.5 text-sm font-semibold text-emerald rounded-lg hover:bg-cream"
              >
                All Ventures
              </Link>
              {ventures.map((v) => (
                <Link
                  key={v.slug}
                  to={`/ventures/${v.slug}`}
                  className="block px-4 py-2.5 text-sm text-ink-mid rounded-lg hover:bg-cream hover:text-emerald"
                >
                  {v.name}
                </Link>
              ))}
            </div>
          )}
          <Link
            to="/blog"
            className="block px-4 py-3 text-sm font-medium text-ink rounded-lg hover:bg-cream"
          >
            Blog
          </Link>
          <Link
            to="/contact"
            className="block px-4 py-3 text-sm font-medium text-ink rounded-lg hover:bg-cream"
          >
            Contact Us
          </Link>
          {/* Mobile search */}
          <div className="flex items-center gap-2 px-4 py-2 mt-1 rounded-lg bg-cream">
            <Search className="h-4 w-4 text-gold shrink-0" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search ventures..."
              className="w-full bg-transparent text-sm text-ink placeholder:text-ink-light/60 outline-none"
            />
          </div>
          {searchQuery.trim() && (
            <div className="ml-4 border-l border-cream pl-3 max-h-[260px] overflow-y-auto">
              {searchResults.length === 0 ? (
                <div className="px-4 py-2.5 text-sm text-ink-light">
                  No ventures found
                </div>
              ) : (
                searchResults.map((v) => (
                  <Link
                    key={v.slug}
                    to={`/ventures/${v.slug}`}
                    className="block px-4 py-2.5 text-sm text-ink-mid rounded-lg hover:bg-cream hover:text-emerald"
                  >
                    {v.name}
                  </Link>
                ))
              )}
            </div>
          )}
          <Link
            to="/contact"
            className="mt-2 block rounded-full border border-gold/50 bg-gold/15 px-4 py-3 text-center text-sm font-semibold uppercase tracking-wider text-emerald backdrop-blur-md transition-all duration-300 hover:border-gold/80 hover:bg-gold/30"
          >
            Enquire Now
          </Link>
        </div>
      </div>
    </header>
  );
}
