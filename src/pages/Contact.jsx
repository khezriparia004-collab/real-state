import React, { useState } from 'react';
import Reveal from '../components/Reveal.jsx';
import { PageHero } from '../components/ui.jsx';
import { site } from '../data/site.js';

function CheckIcon() {
  return <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m5 13 4 4L19 7" /></svg>;
}

const initial = { name: '', email: '', phone: '', interest: 'Buying', message: '' };

export default function Contact() {
  const [form, setForm] = useState(initial);
  const [submitted, setSubmitted] = useState(false);
  const set = (key) => (e) => setForm({ ...form, [key]: e.target.value });

  return (
    <>
      <PageHero
        label="Contact"
        title="Let’s Talk Property"
        subtitle="Tell us what you’re looking for — a senior advisor will reply within one business day."
      />

      <section className="section contact">
        <div className="container contact__grid">
          <Reveal className="contact__form-wrap">
            <h2 className="contact__form-title">Send us a message</h2>
            {submitted ? (
              <div className="form-success form-success--page" role="status">
                <CheckIcon />
                <p>
                  Thank you, <strong>{form.name}</strong>. Your message is with our team — we’ll reply
                  to <strong>{form.email}</strong> within one business day.
                </p>
              </div>
            ) : (
              <form
                id="contact-form"
                className="stack-form"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
              >
                <div className="stack-form__row">
                  <label className="stack-form__field">
                    <span>Full name</span>
                    <input required value={form.name} onChange={set('name')} placeholder="Your name" />
                  </label>
                  <label className="stack-form__field">
                    <span>Email</span>
                    <input required type="email" value={form.email} onChange={set('email')} placeholder="you@email.com" />
                  </label>
                </div>
                <div className="stack-form__row">
                  <label className="stack-form__field">
                    <span>Phone</span>
                    <input type="tel" value={form.phone} onChange={set('phone')} placeholder="(555) 000-0000" />
                  </label>
                  <label className="stack-form__field">
                    <span>I’m interested in</span>
                    <select value={form.interest} onChange={set('interest')}>
                      <option>Buying</option>
                      <option>Selling</option>
                      <option>Investing</option>
                      <option>Advisory</option>
                    </select>
                  </label>
                </div>
                <label className="stack-form__field">
                  <span>Message</span>
                  <textarea required rows={5} value={form.message} onChange={set('message')} placeholder="Tell us about the property or the help you need…" />
                </label>
                <button type="submit" className="btn btn--primary">
                  Send Message
                </button>
              </form>
            )}
          </Reveal>

          <Reveal className="contact__info" delay={120}>
            <div className="contact__info-card">
              <h3>Office</h3>
              <p>{site.address}</p>
              <h3>Phone</h3>
              <p><a href={site.phoneHref}>{site.phone}</a></p>
              <h3>Email</h3>
              <p><a href={`mailto:${site.email}`}>{site.email}</a></p>
              <h3>Hours</h3>
              <p>{site.hours}</p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
