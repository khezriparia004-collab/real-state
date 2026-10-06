import React from 'react';
import Reveal from '../components/Reveal.jsx';
import CtaSection from '../components/CtaSection.jsx';
import { PageHero, ArrowIcon } from '../components/ui.jsx';
import { images } from '../data/properties.js';
import { services } from '../data/site.js';

export default function Services() {
  return (
    <>
      <PageHero
        label="Services"
        title="Expertise at Every Step"
        subtitle="Six disciplines, one senior point of contact — from acquisition to settlement."
      />

      <section className="section services services--page">
        <div className="container">
          <Reveal className="services-banner">
            <img src={images.servicesWide} alt="Modern architectural residence" loading="lazy" />
          </Reveal>
          <div className="services__list services__list--page">
            {services.map((s, i) => (
              <Reveal as="article" className="service-row" key={s.title} delay={i * 50}>
                <span className="service-row__num">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h3 className="service-row__title">{s.title}</h3>
                  <p className="service-row__text">{s.text}</p>
                </div>
                <span className="service-row__arrow" aria-hidden="true"><ArrowIcon size={15} /></span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
