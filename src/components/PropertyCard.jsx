import React from 'react';
import { Link } from 'react-router-dom';
import useFavorites from '../hooks/useFavorites.js';

function PinIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function HeartIcon({ filled }) {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill={filled ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}

export default function PropertyCard({ property, className = '' }) {
  const { has, toggle } = useFavorites();
  const isFav = has(property.id);

  return (
    <Link
      to={`/properties/${property.id}`}
      className={`property-card ${className}`}
      aria-label={`${property.name}, ${property.location}, ${property.priceLabel}`}
    >
      <div className="property-card__media">
        <img
          src={property.cover}
          alt={`${property.name} — ${property.location}`}
          loading="lazy"
        />
        <button
          type="button"
          className={`property-card__fav ${isFav ? 'is-active' : ''}`}
          aria-label={isFav ? `Remove ${property.name} from saved properties` : `Save ${property.name}`}
          aria-pressed={isFav}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            toggle(property.id);
          }}
        >
          <HeartIcon filled={isFav} />
        </button>
        <div className="property-card__overlay">
          <div className="property-card__meta">
            <h3 className="property-card__name">{property.name}</h3>
            <p className="property-card__location">
              <PinIcon />
              {property.location}
            </p>
          </div>
          <span className="property-card__price">{property.priceLabel}</span>
        </div>
      </div>
    </Link>
  );
}
