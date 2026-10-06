import React from 'react';
import { Link } from 'react-router-dom';

export function SectionHeading({ label, title, align = 'center', className = '' }) {
  return (
    <div className={`section-heading section-heading--${align} ${className}`}>
      {label && <span className="section-label">{label}</span>}
      <h2 className="section-title">{title}</h2>
    </div>
  );
}

export function PageHero({ label, title, subtitle }) {
  return (
    <section className="page-hero">
      <div className="container page-hero__inner">
        {label && <span className="section-label">{label}</span>}
        <h1 className="page-hero__title">{title}</h1>
        {subtitle && <p className="page-hero__sub">{subtitle}</p>}
      </div>
    </section>
  );
}

export function ArrowIcon({ dir = 'right', size = 16 }) {
  return (
    <svg
      className={`arrow-icon arrow-icon--${dir}`}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {dir === 'left' ? <path d="M19 12H5m7-7-7 7 7 7" /> : <path d="M5 12h14m-7-7 7 7-7 7" />}
    </svg>
  );
}

export function ButtonLink({ to, children, variant = 'primary', className = '', ...rest }) {
  return (
    <Link to={to} className={`btn btn--${variant} ${className}`} {...rest}>
      {children}
    </Link>
  );
}
