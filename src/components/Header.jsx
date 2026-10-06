import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { navLinks, site } from '../data/site.js';

export function Logo({ light = true }) {
  return (
    <Link to="/" className={`logo ${light ? 'logo--light' : ''}`} aria-label="Horizon Properties — home">
      <svg className="logo__mark" width="34" height="34" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <path d="M6 34V15L20 5l14 10v19" stroke="#C7A468" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M13 34V20h14v14" stroke="#C7A468" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.85" />
        <path d="M20 34v-8" stroke="#C7A468" strokeWidth="2.2" strokeLinecap="round" />
      </svg>
      <span className="logo__text">
        <span className="logo__name">HORIZON</span>
        <span className="logo__sub">PROPERTIES</span>
      </span>
    </Link>
  );
}

function PhoneIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
    </svg>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  useEffect(() => {
    document.body.classList.toggle('menu-open', open && window.innerWidth < 1024);
    return () => document.body.classList.remove('menu-open');
  }, [open]);

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''} ${open ? 'header--open' : ''}`}>
      <div className="container header__inner">
        <Logo />

        <nav className="header__nav" aria-label="Primary">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) => `header__link ${isActive ? 'is-active' : ''}`}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <a href={site.phoneHref} className="header__phone">
          <PhoneIcon />
          {site.phone}
        </a>

        <button
          type="button"
          className={`header__burger ${open ? 'is-open' : ''}`}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div id="mobile-menu" className={`mobile-menu ${open ? 'is-open' : ''}`}>
        <nav aria-label="Mobile">
          {navLinks.map((link, i) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) => `mobile-menu__link ${isActive ? 'is-active' : ''}`}
              style={{ transitionDelay: open ? `${80 + i * 40}ms` : '0ms' }}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
        <a href={site.phoneHref} className="mobile-menu__phone">
          <PhoneIcon />
          {site.phone}
        </a>
      </div>
    </header>
  );
}
