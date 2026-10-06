import React, { useMemo, useState } from 'react';
import Reveal from '../components/Reveal.jsx';
import PropertyCard from '../components/PropertyCard.jsx';
import { PageHero } from '../components/ui.jsx';
import { properties, locations, propertyTypes, priceTiers } from '../data/properties.js';

const initialFilters = {
  q: '',
  location: 'all',
  type: 'all',
  maxPrice: 0,
  beds: 0,
  baths: 0,
  sort: 'featured',
};

function Select({ label, value, onChange, options }) {
  return (
    <label className="filter-field">
      <span className="filter-field__label">{label}</span>
      <select value={value} onChange={(e) => onChange(e.target.value)}>
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </label>
  );
}

export default function Properties() {
  const [filters, setFilters] = useState(initialFilters);

  const set = (key) => (value) => setFilters((f) => ({ ...f, [key]: value }));

  const results = useMemo(() => {
    const max = Number(filters.maxPrice);
    const beds = Number(filters.beds);
    const baths = Number(filters.baths);

    let list = properties.filter((p) => {
      const q = filters.q.trim().toLowerCase();
      if (q && !`${p.name} ${p.location} ${p.type}`.toLowerCase().includes(q)) return false;
      if (filters.location !== 'all' && p.location !== filters.location) return false;
      if (filters.type !== 'all' && p.type !== filters.type) return false;
      if (max > 0 && p.price > max) return false;
      if (beds > 0 && p.beds < beds) return false;
      if (baths > 0 && p.baths < baths) return false;
      return true;
    });

    switch (filters.sort) {
      case 'price-asc':
        list = [...list].sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        list = [...list].sort((a, b) => b.price - a.price);
        break;
      case 'name':
        list = [...list].sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        list = [...list].sort((a, b) => Number(b.featured) - Number(a.featured));
    }
    return list;
  }, [filters]);

  const dirty =
    filters.q !== '' ||
    filters.location !== 'all' ||
    filters.type !== 'all' ||
    filters.maxPrice !== 0 ||
    filters.beds !== 0 ||
    filters.baths !== 0;

  return (
    <>
      <PageHero
        label="Portfolio"
        title="Our Properties"
        subtitle="Browse curated homes and investments across prime U.S. markets."
      />

      <section className="section properties-browser">
        <div className="container">
          <Reveal className="filter-bar" as="form" onSubmit={(e) => e.preventDefault()}>
            <div className="filter-field filter-field--search">
              <span className="filter-field__label">Search</span>
              <svg className="filter-field__icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                <circle cx="11" cy="11" r="7" />
                <path d="m20 20-3.5-3.5" />
              </svg>
              <input
                type="search"
                placeholder="Property or city…"
                value={filters.q}
                onChange={(e) => set('q')(e.target.value)}
                aria-label="Search properties"
              />
            </div>
            <Select
              label="Location"
              value={filters.location}
              onChange={set('location')}
              options={[
                { value: 'all', label: 'All locations' },
                ...locations.map((l) => ({ value: l, label: l })),
              ]}
            />
            <Select
              label="Type"
              value={filters.type}
              onChange={set('type')}
              options={[
                { value: 'all', label: 'All types' },
                ...propertyTypes.map((t) => ({ value: t, label: t })),
              ]}
            />
            <Select
              label="Price"
              value={filters.maxPrice}
              onChange={set('maxPrice')}
              options={priceTiers.map((t) => ({ value: t.value, label: t.label }))}
            />
            <Select
              label="Bedrooms"
              value={filters.beds}
              onChange={set('beds')}
              options={[
                { value: 0, label: 'Any' },
                { value: 3, label: '3+' },
                { value: 4, label: '4+' },
                { value: 5, label: '5+' },
              ]}
            />
            <Select
              label="Bathrooms"
              value={filters.baths}
              onChange={set('baths')}
              options={[
                { value: 0, label: 'Any' },
                { value: 3, label: '3+' },
                { value: 4, label: '4+' },
                { value: 5, label: '5+' },
              ]}
            />
            <Select
              label="Sort by"
              value={filters.sort}
              onChange={set('sort')}
              options={[
                { value: 'featured', label: 'Featured' },
                { value: 'price-asc', label: 'Price · Low to High' },
                { value: 'price-desc', label: 'Price · High to Low' },
                { value: 'name', label: 'Name · A–Z' },
              ]}
            />
          </Reveal>

          <div className="browser-meta">
            <p className="browser-count" role="status">
              {results.length} {results.length === 1 ? 'property' : 'properties'}
              {dirty ? ' found' : ' in the portfolio'}
            </p>
            {dirty && (
              <button type="button" className="browser-clear" onClick={() => setFilters(initialFilters)}>
                Clear all filters
              </button>
            )}
          </div>

          {results.length === 0 ? (
            <div className="browser-empty">
              <h3>No properties match your search</h3>
              <p>Try widening the price range or clearing a filter.</p>
            </div>
          ) : (
            <div className="properties-grid">
              {results.map((p, i) => (
                <Reveal key={p.id} delay={(i % 3) * 60}>
                  <PropertyCard property={p} />
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
