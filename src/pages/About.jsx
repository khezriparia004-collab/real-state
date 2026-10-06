import React from 'react';
import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal.jsx';
import CtaSection from '../components/CtaSection.jsx';
import { PageHero, ArrowIcon, ButtonLink } from '../components/ui.jsx';
import { images } from '../data/properties.js';
import { stats } from '../data/site.js';

const values = [
  {
    title: 'Integrity first',
    text: 'We give honest advice — even when it costs us a sale. Long-term trust is the business.',
  },
  {
    title: 'Architecture matters',
    text: 'We champion homes designed with intent, and market them the way they were built.',
  },
  {
    title: 'Clients for life',
    text: 'Most of our work comes from referrals. We stay in touch long after the keys change hands.',
  },
];

export default function About() {
  return (
    <>
      <PageHero
        label="About Us"
        title="A Modern Agency,
Built on Trust"
        subtitle="Horizon Properties is a boutique advisory for extraordinary homes and considered investments."
      />

      <section className="section about about--page">
        <div className="container about__grid">
          <Reveal className="about__content">
            <span className="section-label">Who We Are</span>
            <h2 className="section-title">Property advice,
human by design</h2>
            <p className="about__text">
              At Horizon Properties, we connect people with extraordinary homes and smart investments.
              Integrity, transparency, and client satisfaction are at the heart of everything we do.
            </p>
            <p className="about__text">
              Founded in 2008, we are deliberately small: senior agents, a curated portfolio, and a
              client list built almost entirely on referral.
            </p>
            <ButtonLink to="/properties" variant="primary">
              Browse the Portfolio
              <ArrowIcon />
            </ButtonLink>
          </Reveal>
          <Reveal className="about__media" delay={120}>
            <div className="about__img-main">
              <img src={images.aboutMain} alt="Modern luxury home with pool" loading="lazy" />
            </div>
            <div className="about__img-side">
              <img src={images.aboutSide} alt="Architectural villa at dusk" loading="lazy" />
            </div>
            <span className="about__arrow" aria-hidden="true"><ArrowIcon /></span>
          </Reveal>
        </div>
      </section>

      <section className="section values">
        <div className="container">
          <div className="values__grid">
            {values.map((v, i) => (
              <Reveal className="value" key={v.title} delay={i * 80}>
                <span className="value__num">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="value__title">{v.title}</h3>
                <p className="value__text">{v.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section why">
        <div className="container">
          <Reveal className="why__stats">
            {stats.map((s) => (
              <div className="stat" key={s.label}>
                <span className="stat__value">{s.value}</span>
                <span className="stat__label">{s.label}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
