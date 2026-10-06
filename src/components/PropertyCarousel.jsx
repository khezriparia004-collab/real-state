import React, { useCallback, useRef } from 'react';
import PropertyCard from './PropertyCard.jsx';
import { ArrowIcon } from './ui.jsx';

export default function PropertyCarousel({ properties }) {
  const trackRef = useRef(null);
  const drag = useRef({ down: false, startX: 0, scrollLeft: 0, moved: false });

  const scrollByPage = useCallback((dir) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({ left: dir * Math.max(track.clientWidth * 0.7, 300), behavior: 'smooth' });
  }, []);

  const onPointerDown = (e) => {
    const track = trackRef.current;
    drag.current = { down: true, startX: e.clientX, scrollLeft: track.scrollLeft, moved: false };
  };
  const onPointerMove = (e) => {
    if (!drag.current.down) return;
    const track = trackRef.current;
    const dx = e.clientX - drag.current.startX;
    if (Math.abs(dx) > 4) drag.current.moved = true;
    track.scrollLeft = drag.current.scrollLeft - dx;
  };
  const endDrag = () => {
    drag.current.down = false;
  };
  const onClickCapture = (e) => {
    if (drag.current.moved) {
      e.preventDefault();
      e.stopPropagation();
      drag.current.moved = false;
    }
  };

  const onKeyDown = (e) => {
    if (e.key === 'ArrowRight') { e.preventDefault(); scrollByPage(1); }
    if (e.key === 'ArrowLeft') { e.preventDefault(); scrollByPage(-1); }
  };

  return (
    <div className="carousel">
      <button type="button" className="carousel__arrow carousel__arrow--prev" aria-label="Previous properties" onClick={() => scrollByPage(-1)}>
        <ArrowIcon dir="left" />
      </button>

      <div
        ref={trackRef}
        className="carousel__track"
        role="region"
        aria-label="Featured properties carousel"
        tabIndex={0}
        onKeyDown={onKeyDown}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerLeave={endDrag}
        onClickCapture={onClickCapture}
      >
        {properties.map((p, i) => (
          <PropertyCard key={p.id} property={p} className={`carousel__card ${i === 0 ? 'carousel__card--lead' : ''}`} />
        ))}
      </div>

      <button type="button" className="carousel__arrow carousel__arrow--next" aria-label="Next properties" onClick={() => scrollByPage(1)}>
        <ArrowIcon dir="right" />
      </button>
    </div>
  );
}
