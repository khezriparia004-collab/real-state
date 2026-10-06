import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal.jsx';
import { SectionHeading, ArrowIcon } from '../components/ui.jsx';
import AboutSection from '../components/AboutSection.jsx';
import PropertyCarousel from '../components/PropertyCarousel.jsx';
import CtaSection from '../components/CtaSection.jsx';
import { images, featuredProperties } from '../data/properties.js';
import { services, whyHorizon, stats, team, getAgent } from '../data/site.js';

function WhyIcon({ kind }) {
  const paths = {
    home: <><path d="M3 10.5 12 3l9 7.5" /><path d="M5 9.5V21h14V9.5" /></>,
    chart: <><path d="M3 21h18" /><path d="M6 17V9m6 8V5m6 12v-6" /></>,
    key: <><circle cx="7.5" cy="15.5" r="4.5" /><path d="m11 12 9-9 2 2-2 2 2 2-3 3-2-2-2 2" /></>,
    shield: <><path d="M12 22s8-3.5 8-10V5l-8-3-8 3v7c0 6.5 8 10 8 10Z" /><path d="m9 12 2 2 4-4" /></>,
  };
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[kind]}
    </svg>
  );
}

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="hero">
        <img className="hero__img" src={images.heroVilla} alt="Modern luxury villa with infinity pool at blue hour" fetchpriority="high" />
        <div className="hero__overlay" aria-hidden="true" />
        <div className="container hero__content">
          <h1 className="hero__title">
            Discover Exceptional
            <br />
            Homes &amp; Investments
          </h1>
          <p className="hero__sub">
            Premium properties in prime locations. Find your dream home
            <br className="br-desktop" />
            or the perfect investment with confidence.
          </p>
        </div>
        <div className="hero__scrollcue" aria-hidden="true">
          <span />
        </div>
      </section>

      {/* Who We Are */}
      <AboutSection />

      {/* Featured Properties */}
      <section className="section featured" id="featured">
        <div className="container">
          <Reveal>
            <SectionHeading label="Featured" title="Featured Properties" />
          </Reveal>
        </div>
        <Reveal delay={120}>
          <PropertyCarousel properties={featuredProperties} />
        </Reveal>
        <Reveal className="featured__more">
          <Link to="/properties" className="btn btn--ghost-navy">
            View All Properties
            <ArrowIcon />
          </Link>
        </Reveal>
      </section>

      {/* Services */}
      <section className="section services" id="services">
        <div className="container services__grid">
          <Reveal className="services__intro">
            <span className="section-label">Services</span>
            <h2 className="section-title">Expertise at<br />Every Step</h2>
            <p className="services__text">
              From the first viewing to the final signature, our senior advisors cover the full
              lifecycle of buying, selling and investing.
            </p>
            <Link to="/services" className="btn btn--ghost-navy">
              All Services
              <ArrowIcon />
            </Link>
          </Reveal>
          <div className="services__list">
            {services.map((s, i) => (
              <Reveal as="article" className="service-row" key={s.title} delay={i * 60}>
                <span className="service-row__num">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h3 className="service-row__title">{s.title}</h3>
                  <p className="service-row__text">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Horizon */}
      <section className="section why" id="why">
        <div className="container">
          <Reveal>
            <SectionHeading label="Why Horizon" title="Why Choose Horizon" />
          </Reveal>
          <div className="why__grid">
            {whyHorizon.map((w, i) => (
              <Reveal className="why__item" key={w.title} delay={i * 70}>
                <span className="why__icon" aria-hidden="true"><WhyIcon kind={w.icon} /></span>
                <h3 className="why__title">{w.title}</h3>
                <p className="why__text">{w.text}</p>
              </Reveal>
            ))}
          </div>
          <Reveal className="why__stats" delay={150}>
            {stats.map((s) => (
              <div className="stat" key={s.label}>
                <span className="stat__value">{s.value}</span>
                <span className="stat__label">{s.label}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Team */}
      <section className="section team" id="team">
        <div className="container">
          <Reveal>
            <SectionHeading label="Our Team" title="Meet the Advisors" />
          </Reveal>
          <div className="team__grid">
            {team.map((m, i) => (
              <Reveal className="team-card" key={m.id} delay={i * 70}>
                <div className="team-card__media">
                  <img src={m.portrait} alt={`Portrait of ${m.name}`} loading="lazy" />
                </div>
                <h3 className="team-card__name">{m.name}</h3>
                <p className="team-card__role">{m.role}</p>
              </Reveal>
            ))}
          </div>
          <Reveal className="team__more">
            <Link to="/team" className="btn btn--ghost-navy">
              Meet the Team
              <ArrowIcon />
            </Link>
          </Reveal>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
