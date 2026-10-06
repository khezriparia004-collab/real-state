import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { navLinks, site } from '../data/site.js';
import { Logo } from './Header.jsx';

function SocialIcon({ kind }) {
  const paths = {
    instagram: (
      <>
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
      </>
    ),
    linkedin: (
      <>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4V8h4v1.5" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </>
    ),
    x: <path d="M4 4l16 16M20 4L4 20" />,
  };
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[kind]}
    </svg>
  );
}

export default function Footer() {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState('');

  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <Logo />
          <p className="footer__desc">
            Horizon Properties connects people with extraordinary homes and smart investments — with
            integrity, transparency and care.
          </p>
          <div className="footer__socials">
            <a href="#" aria-label="Instagram"><SocialIcon kind="instagram" /></a>
            <a href="#" aria-label="LinkedIn"><SocialIcon kind="linkedin" /></a>
            <a href="#" aria-label="X"><SocialIcon kind="x" /></a>
          </div>
        </div>

        <nav className="footer__col" aria-label="Footer navigation">
          <h3 className="footer__title">Explore</h3>
          {navLinks.map((l) => (
            <Link key={l.to} to={l.to} className="footer__link">
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="footer__col">
          <h3 className="footer__title">Contact</h3>
          <a className="footer__link" href={site.phoneHref}>{site.phone}</a>
          <a className="footer__link" href={`mailto:${site.email}`}>{site.email}</a>
          <p className="footer__text">{site.address}</p>
          <p className="footer__text">{site.hours}</p>
        </div>

        <div className="footer__col footer__col--news">
          <h3 className="footer__title">Newsletter</h3>
          <p className="footer__text">New listings and market insights, monthly.</p>
          {subscribed ? (
            <p className="footer__thanks" role="status">Thank you — you’re on the list.</p>
          ) : (
            <form
              className="footer__form"
              onSubmit={(e) => {
                e.preventDefault();
                if (email.trim()) setSubscribed(true);
              }}
            >
              <label className="sr-only" htmlFor="newsletter-email">Email address</label>
              <input
                id="newsletter-email"
                type="email"
                required
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type="submit" className="btn btn--champagne">Subscribe</button>
            </form>
          )}
        </div>
      </div>

      <div className="container footer__bottom">
        <p>© {new Date().getFullYear()} Horizon Properties. All rights reserved.</p>
      </div>
    </footer>
  );
}
