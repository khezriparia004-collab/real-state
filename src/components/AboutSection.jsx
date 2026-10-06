import React from 'react';
import Reveal from './Reveal.jsx';
import { ArrowIcon } from './ui.jsx';
import { images } from '../data/properties.js';

export default function AboutSection() {
  return (
    <section className="section about" id="about">
      <div className="container about__grid">
        <Reveal className="about__content">
          <span className="section-label">About Us</span>
          <h2 className="section-title">Who We Are</h2>
          <p className="about__text">
            At Horizon Properties, we connect people with extraordinary homes and smart investments.
            Integrity, transparency, and client satisfaction are at the heart of everything we do.
          </p>
          <a href="/about" className="btn btn--primary">
            Learn More
            <ArrowIcon />
          </a>
        </Reveal>

        <Reveal className="about__media" delay={120}>
          <div className="about__img-main">
            <img src={images.aboutMain} alt="Modern luxury home with pool and palms" loading="lazy" />
          </div>
          <div className="about__img-side">
            <img src={images.aboutSide} alt="Architectural villa interior detail" loading="lazy" />
          </div>
          <a href="/about" className="about__arrow" aria-label="Learn more about Horizon Properties">
            <ArrowIcon />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
