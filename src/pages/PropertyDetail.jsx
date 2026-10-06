import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Gallery from '../components/Gallery.jsx';
import PropertyCard from '../components/PropertyCard.jsx';
import Reveal from '../components/Reveal.jsx';
import { SectionHeading, ArrowIcon } from '../components/ui.jsx';
import useFavorites from '../hooks/useFavorites.js';
import { getProperty, getSimilarProperties } from '../data/properties.js';
import { getAgent, site } from '../data/site.js';

function BedIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M2 17h20M2 17v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5" /><path d="M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4" /><path d="M2 17v3m20-3v3" /></svg>;
}
function BathIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 12h16v2a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5v-2Z" /><path d="M6 12V5a2 2 0 0 1 4 0" /><path d="M7 21l-1 1m11-1 1 1" /></svg>;
}
function AreaIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="1" /><path d="M8 3v5H3M16 21v-5h5" /></svg>;
}
function CheckIcon() {
  return <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m5 13 4 4L19 7" /></svg>;
}

function ViewingForm({ property }) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', date: '' });

  if (submitted) {
    return (
      <div className="form-success" role="status">
        <CheckIcon />
        <p>Viewing requested for <strong>{property.name}</strong>. {getAgent(property.agentId).name} will confirm shortly.</p>
      </div>
    );
  }

  return (
    <form
      className="stack-form"
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
    >
      <label className="stack-form__field">
        <span>Name</span>
        <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" />
      </label>
      <label className="stack-form__field">
        <span>Email</span>
        <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@email.com" />
      </label>
      <label className="stack-form__field">
        <span>Preferred date</span>
        <input required type="date" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} />
      </label>
      <button type="submit" className="btn btn--primary btn--full">
        Schedule a Viewing
        <ArrowIcon />
      </button>
    </form>
  );
}

export default function PropertyDetail() {
  const { id } = useParams();
  const property = getProperty(id);
  const { has, toggle } = useFavorites();

  if (!property) {
    return (
      <section className="section detail-missing">
        <div className="container">
          <h1>Property not found</h1>
          <Link to="/properties" className="btn btn--primary">Back to all properties</Link>
        </div>
      </section>
    );
  }

  const agent = getAgent(property.agentId);
  const similar = getSimilarProperties(property);
  const isFav = has(property.id);

  return (
    <>
      <section className="detail">
        <div className="container">
          <Reveal className="detail__breadcrumb">
            <Link to="/properties">Properties</Link>
            <ArrowIcon size={13} />
            <span>{property.name}</span>
          </Reveal>

          <Reveal className="detail__head" delay={60}>
            <div>
              <h1 className="detail__title">{property.name}</h1>
              <p className="detail__location">
                {property.location} · {property.type}
              </p>
            </div>
            <div className="detail__head-actions">
              <button
                type="button"
                className={`btn btn--outline-navy detail__fav ${isFav ? 'is-active' : ''}`}
                aria-pressed={isFav}
                onClick={() => toggle(property.id)}
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill={isFav ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></svg>
                {isFav ? 'Saved' : 'Save'}
              </button>
            </div>
          </Reveal>

          <Reveal className="detail__layout" delay={100}>
            <div className="detail__main">
              <Gallery images={property.images} name={property.name} />

              <div className="detail__specs">
                <div className="spec"><BedIcon /><span>{property.beds}</span><small>Bedrooms</small></div>
                <div className="spec"><BathIcon /><span>{property.baths}</span><small>Bathrooms</small></div>
                <div className="spec"><AreaIcon /><span>{property.area}</span><small>Living area</small></div>
                <div className="spec"><AreaIcon /><span>{property.yearBuilt}</span><small>Year built</small></div>
              </div>

              <div className="detail__block">
                <h2 className="detail__block-title">About this property</h2>
                <p className="detail__desc">{property.description}</p>
              </div>

              <div className="detail__block">
                <h2 className="detail__block-title">Key features</h2>
                <ul className="detail__features">
                  {property.features.map((f) => (
                    <li key={f}><CheckIcon /> {f}</li>
                  ))}
                </ul>
              </div>

              <div className="detail__block">
                <h2 className="detail__block-title">Amenities</h2>
                <ul className="detail__amenities">
                  {property.amenities.map((a) => (
                    <li key={a}>{a}</li>
                  ))}
                </ul>
              </div>
            </div>

            <aside className="detail__side">
              <Reveal className="detail__pricecard">
                <span className="detail__price">{property.priceLabel}</span>
                <span className="detail__pricenote">Guide price · {property.type}</span>
                <span className="detail__divider" aria-hidden="true" />
                <h3 className="detail__side-title">Schedule a viewing</h3>
                <ViewingForm property={property} />
                <a className="detail__call" href={site.phoneHref}>
                  or call {site.phone}
                </a>
              </Reveal>

              <Reveal className="detail__agent" delay={100}>
                <div className="detail__agent-media">
                  <img src={agent.portrait} alt={`Portrait of ${agent.name}`} loading="lazy" />
                </div>
                <p className="detail__agent-label">Listing agent</p>
                <h3 className="detail__agent-name">{agent.name}</h3>
                <p className="detail__agent-role">{agent.role}</p>
                <p className="detail__agent-bio">{agent.bio}</p>
                <div className="detail__agent-actions">
                  <Link to="/contact" className="btn btn--primary btn--full">Contact Agent</Link>
                  <a href={site.phoneHref} className="btn btn--outline-navy btn--full">Call</a>
                </div>
              </Reveal>
            </aside>
          </Reveal>
        </div>
      </section>

      <section className="section detail-similar">
        <div className="container">
          <SectionHeading label="Continue Exploring" title="Similar Properties" />
          <div className="properties-grid properties-grid--3">
            {similar.map((p) => (
              <PropertyCard key={p.id} property={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Mobile sticky contact bar */}
      <div className="detail-mobile-cta" aria-hidden="false">
        <a href={site.phoneHref} className="btn btn--outline-white">Call Agent</a>
        <a href="#contact-form" className="btn btn--primary">Schedule Viewing</a>
      </div>
    </>
  );
}
