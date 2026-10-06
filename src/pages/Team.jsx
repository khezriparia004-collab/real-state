import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowIcon } from '../components/ui.jsx';
import Reveal from '../components/Reveal.jsx';
import CtaSection from '../components/CtaSection.jsx';
import { PageHero } from '../components/ui.jsx';
import { team, site } from '../data/site.js';

function MailIcon() {
  return <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m2 7 10 6L22 7" /></svg>;
}

export default function Team() {
  return (
    <>
      <PageHero
        label="Our Team"
        title="Meet the Advisors"
        subtitle="Senior agents only — an average of twelve years in the market, and one dedicated point of contact."
      />

      <section className="section team team--page">
        <div className="container">
          <div className="team__grid">
            {team.map((m, i) => (
              <Reveal className="team-card" key={m.id} delay={i * 70}>
                <div className="team-card__media">
                  <img src={m.portrait} alt={`Portrait of ${m.name}`} loading="lazy" />
                  <div className="team-card__contact">
                    <a href={`mailto:${m.name.split(' ')[0].toLowerCase()}@horizonproperties.com`} aria-label={`Email ${m.name}`}><MailIcon /></a>
                    <a href={site.phoneHref} aria-label={`Call ${m.name}`}>
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" /></svg>
                    </a>
                  </div>
                </div>
                <h3 className="team-card__name">{m.name}</h3>
                <p className="team-card__role">{m.role}</p>
                <p className="team-card__bio">{m.bio}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section team-cta">
        <div className="container team-cta__inner">
          <Reveal>
            <h2 className="section-title">Work with one of us</h2>
            <p className="about__text">
              Tell us what you’re looking for and we’ll pair you with the right advisor.
            </p>
            <Link to="/contact" className="btn btn--primary">
              Get in Touch
              <ArrowIcon />
            </Link>
          </Reveal>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
