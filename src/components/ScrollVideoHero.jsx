import React, { useEffect, useRef, useState } from 'react';
import { images } from '../data/properties.js';
import { heroVideo } from '../data/site.js';

// Scroll distance of the hero experience, in viewport heights. The video is
// ~4s long; 300vh gives a calm, cinematic pace (100vh of scroll ≈ 1.3s of footage).
const SCROLL_VH = 300;
// The hero video contains exactly 242 independently seekable frames
// (scroll progress 0 → frame 1, progress 1 → frame 242).
const TOTAL_FRAMES = heroVideo.totalFrames;

// Smoothing factor for lerp between target and rendered time. Higher = more
// responsive, lower = softer. 0.16 stays tightly attached to the scroll.
const SMOOTHING = 0.16;

function StaticHero({ title, sub }) {
  return (
    <section className="hero">
      <img className="hero__img" src={images.heroVilla} alt="Modern luxury villa with infinity pool at blue hour" />
      <div className="hero__overlay" aria-hidden="true" />
      <div className="container hero__content">
        <h1 className="hero__title">{title}</h1>
        <p className="hero__sub">{sub}</p>
      </div>
    </section>
  );
}

export default function ScrollVideoHero() {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);
  const contentRef = useRef(null);
  const cueRef = useRef(null);

  // target progress (0..1) is written by the passive scroll handler into a ref —
  // never into React state — so scrolling never triggers a re-render.
  const progressRef = useRef(0);

  const [ready, setReady] = useState(false); // video buffered enough to scrub
  const [failed, setFailed] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const apply = () => setReducedMotion(mq.matches);
    apply();
    mq.addEventListener ? mq.addEventListener('change', apply) : mq.addListener(apply);
    return () => (mq.removeEventListener ? mq.removeEventListener('change', apply) : mq.removeListener(apply));
  }, []);

  // The scroll-driven engine. One passive scroll listener + one rAF loop;
  // all video/text updates are direct DOM writes.
  useEffect(() => {
    if (reducedMotion || failed) return;

    const section = sectionRef.current;
    const video = videoRef.current;
    const content = contentRef.current;
    const cue = cueRef.current;
    if (!section || !video) return;

    let duration = 0;
    let frameDuration = 0;
    let current = 0; // rendered (smoothed) time
    let lastFrameIndex = -1; // last frame actually written to the video element
    let raf;

    // Mapping is enabled only after metadata is loaded — we never assume
    // duration, frame rate or frame count beforehand.
    const syncDuration = () => {
      duration = Number.isFinite(video.duration) ? video.duration : 0;
      frameDuration = duration ? duration / TOTAL_FRAMES : 0;
      if (duration) current = Math.min(current, duration);
    };
    syncDuration();
    video.addEventListener('loadedmetadata', syncDuration);

    // Scroll handler ONLY computes the target progress.
    const onScroll = () => {
      const total = section.offsetHeight - window.innerHeight;
      if (total <= 0) return;
      const y = Math.min(Math.max(window.scrollY - section.offsetTop, 0), total);
      progressRef.current = y / total;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    const tick = () => {
      const p = progressRef.current;
      // Frame-exact mapping: progress 0 → frame 1 (index 0), progress 1 →
      // frame 242 (index 241), clamped and quantized to the frame grid.
      const target = Math.min(Math.max(Math.round(p * (TOTAL_FRAMES - 1)), 0), TOTAL_FRAMES - 1) * frameDuration;

      // Smooth interpolation toward the scroll-derived target time.
      if (frameDuration) {
        current += (target - current) * SMOOTHING;
        if (Math.abs(target - current) < frameDuration * 0.25) current = target;
        // Latest-frame-wins: write currentTime only when the rendered frame
        // index actually changes — no repeated assignments, no seek backlog,
        // no stale frame requests (each rAF renders only the newest target).
        const frameIndex = Math.min(Math.max(Math.round(current / frameDuration), 0), TOTAL_FRAMES - 1);
        if (frameIndex !== lastFrameIndex && video.readyState >= 1) {
          try {
            // Clamp just inside the stream end so frame 242 can never be
            // skipped by floating-point rounding.
            video.currentTime = Math.min(frameIndex * frameDuration, duration - 1e-4);
            lastFrameIndex = frameIndex;
          } catch {
            /* seeking before metadata — ignore, next tick retries */
          }
        }
      }

      // Hero text: gently drifts away as the camera takes over (no re-render).
      if (content) {
        const fade = Math.min(Math.max(p * 2.2, 0), 1);
        content.style.opacity = String(1 - fade);
        content.style.transform = `translateY(${(-p * 60).toFixed(1)}px)`;
        content.style.pointerEvents = fade > 0.5 ? 'none' : '';
      }
      if (cue) cue.style.opacity = String(Math.max(0, 1 - p * 6));

      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
      video.removeEventListener('loadedmetadata', syncDuration);
    };
  }, [reducedMotion, failed, ready]);

  if (reducedMotion || failed) {
    return (
      <StaticHero
        title={<>Discover Exceptional<br />Homes &amp; Investments</>}
        sub={<>Premium properties in prime locations. Find your dream home <br className="br-desktop" />or the perfect investment with confidence.</>}
      />
    );
  }

  return (
    <section
      className="shero"
      ref={sectionRef}
      style={{ '--shero-vh': SCROLL_VH }}
      aria-label="Horizon Properties — cinematic introduction"
    >
      <div className="shero__sticky">
        {/* Poster shows the first visual immediately; the video cross-fades in
            over it once buffered, so we never reveal a blank rectangle. */}
        <video
          ref={videoRef}
          className={`shero__video ${ready ? 'is-ready' : ''}`}
          src={heroVideo.src}
          type={heroVideo.type}
          poster={images.heroVilla}
          preload="auto"
          muted
          playsInline
          disablePictureInPicture
          tabIndex={-1}
          aria-hidden="true"
          onCanPlayThrough={() => setReady(true)}
          onError={() => setFailed(true)}
        />
        <div className="hero__overlay hero__overlay--video" aria-hidden="true" />

        <div className="container hero__content" ref={contentRef}>
          <h1 className="hero__title">
            Discover Exceptional
            <br />
            Homes &amp; Investments
          </h1>
          <p className="hero__sub">
            Premium properties in prime locations. Find your dream home{' '}
            <br className="br-desktop" />
            or the perfect investment with confidence.
          </p>
        </div>

        <div className={`shero__loader ${ready ? 'is-done' : ''}`} aria-hidden="true">
          <span />
        </div>
        <div className="hero__scrollcue" ref={cueRef} aria-hidden="true">
          <span />
        </div>
      </div>
    </section>
  );
}
