import React, { useState } from 'react';
import Reveal from '../components/Reveal.jsx';

export default function Gallery({ images, name }) {
  const [index, setIndex] = useState(0);
  const [lightbox, setLightbox] = useState(false);

  const open = (i) => {
    setIndex(i);
    setLightbox(true);
  };
  const step = (dir) => setIndex((i) => (i + dir + images.length) % images.length);

  React.useEffect(() => {
    if (!lightbox) return;
    const onKey = (e) => {
      if (e.key === 'Escape') setLightbox(false);
      if (e.key === 'ArrowRight') step(1);
      if (e.key === 'ArrowLeft') step(-1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightbox]);

  return (
    <div className="gallery">
      <button
        type="button"
        className="gallery__main"
        onClick={() => open(index)}
        aria-label="Open image in fullscreen"
      >
        <img key={index} src={images[index]} alt={`${name} — photo ${index + 1} of ${images.length}`} />
        <span className="gallery__expand" aria-hidden="true">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
          </svg>
        </span>
      </button>

      <div className="gallery__thumbs" role="tablist" aria-label="Property photos">
        {images.map((src, i) => (
          <button
            key={src}
            type="button"
            role="tab"
            aria-selected={i === index}
            aria-label={`Show photo ${i + 1}`}
            className={`gallery__thumb ${i === index ? 'is-active' : ''}`}
            onClick={() => setIndex(i)}
          >
            <img src={src} alt="" loading="lazy" />
          </button>
        ))}
      </div>

      {lightbox && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={`${name} gallery`} onClick={() => setLightbox(false)}>
          <button type="button" className="lightbox__close" aria-label="Close gallery" onClick={() => setLightbox(false)}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
          <button
            type="button"
            className="lightbox__nav lightbox__nav--prev"
            aria-label="Previous photo"
            onClick={(e) => { e.stopPropagation(); step(-1); }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5m7-7-7 7 7 7" /></svg>
          </button>
          <img
            key={index}
            src={images[index]}
            alt={`${name} — photo ${index + 1}`}
            onClick={(e) => e.stopPropagation()}
          />
          <button
            type="button"
            className="lightbox__nav lightbox__nav--next"
            aria-label="Next photo"
            onClick={(e) => { e.stopPropagation(); step(1); }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14m-7-7 7 7-7 7" /></svg>
          </button>
          <span className="lightbox__count">{index + 1} / {images.length}</span>
        </div>
      )}
    </div>
  );
}
