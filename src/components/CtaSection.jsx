import React from 'react';
import { Link } from 'react-router-dom';
import Reveal from './Reveal.jsx';
import { ArrowIcon } from './ui.jsx';

function KeyIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.83-.83" />
      <path d="m15.5 8.5 3-3a2.121 2.121 0 1 1 3 3L19 11l-2.5 2.5L12 9l3.5-.5Z" />
    </svg>
  );
}

export default function CtaSection() {
  return (
    <section className="section cta-section">
      <div className="container">
        <Reveal className="cta">
          <div className="cta__left">
            <span className="cta__icon" aria-hidden="true">
              <KeyIcon />
            </span>
            <div>
              <h2 className="cta__title">Ready to Find Your Perfect Property?</h2>
              <p className="cta__text">Let our experts guide you to the right home or investment.</p>
            </div>
          </div>
          <Link to="/contact" className="btn btn--primary">
            Get in Touch
            <ArrowIcon />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
