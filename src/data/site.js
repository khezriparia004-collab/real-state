import { images } from './properties.js';

// Hero scroll video — lives in `public/videos/` (served at the site root).
// Encoded for scroll-scrubbing: H.264 MP4, every frame is an independent
// I-frame (`-g 1`), `+faststart`, exactly 242 frames (interpolated from the
// original 97-frame CDN export with FFmpeg minterpolate), original
// resolution (496×864), aspect ratio and visual quality preserved.
// If it needs regenerating:
//   ffmpeg -i hero.mp4 \
//     -vf "tpad=stop_mode=clone:stop_duration=0.25,minterpolate=fps=5808/97:mi_mode=mci:mc_mode=aobmc:me_mode=bidir:scd=none" \
//     -c:v libx264 -g 1 -keyint_min 1 -crf 20 -preset slower -pix_fmt yuv420p \
//     -profile:v high -movflags +faststart -an -frames:v 242 hero-scroll-242.mp4
export const heroVideo = {
  src: '/videos/hero-scroll-242.mp4',
  type: 'video/mp4',
  totalFrames: 242,
};

export const site = {
  name: 'HORIZON PROPERTIES',
  phone: '(555) 246-7890',
  phoneHref: 'tel:+15552467890',
  email: 'hello@horizonproperties.com',
  address: '420 Congress Avenue, Suite 1500, Austin, TX 78701',
  hours: 'Mon–Sat, 9:00–18:00',
};

export const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Properties', to: '/properties' },
  { label: 'About Us', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Team', to: '/team' },
  { label: 'Contact', to: '/contact' },
];

export const team = [
  {
    id: 'daniel-morgan',
    name: 'Daniel Morgan',
    role: 'Managing Director',
    portrait: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80',
    bio: 'Twenty years guiding private clients through exceptional acquisitions across the US market.',
  },
  {
    id: 'olivia-carter',
    name: 'Olivia Carter',
    role: 'Luxury Property Advisor',
    portrait: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
    bio: 'Specialist in architectural homes and off-market coastal properties.',
  },
  {
    id: 'james-wilson',
    name: 'James Wilson',
    role: 'Investment Consultant',
    portrait: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
    bio: 'Data-led advisory on yield, development and portfolio strategy.',
  },
  {
    id: 'sophia-bennett',
    name: 'Sophia Bennett',
    role: 'Senior Property Specialist',
    portrait: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=800&q=80',
    bio: 'Trusted by relocating families and first-time buyers of significant homes.',
  },
];

export function getAgent(id) {
  return team.find((t) => t.id === id) || team[0];
}

export const services = [
  {
    title: 'Luxury Home Sales',
    text: 'Discreet, end-to-end representation for buyers and sellers of architectural and waterfront homes.',
  },
  {
    title: 'Property Investment',
    text: 'Yield-driven acquisition strategy across residential, mixed-use and development assets.',
  },
  {
    title: 'Property Marketing',
    text: 'Cinematic photography, film and editorial placement that positions each home as a brand.',
  },
  {
    title: 'Real Estate Advisory',
    text: 'Market intelligence, timing and negotiation guidance for significant decisions.',
  },
  {
    title: 'Property Valuation',
    text: 'Independent, defensible valuations for private clients, trusts and lenders.',
  },
  {
    title: 'Relocation Services',
    text: 'Neighbourhood intelligence, school advisory and settlement support for cross-city moves.',
  },
];

export const whyHorizon = [
  {
    title: 'Curated Portfolio',
    text: 'Every listing is inspected and vetted by our team before it reaches you.',
    icon: 'home',
  },
  {
    title: 'Market Intelligence',
    text: 'Proprietary pricing data so you negotiate from a position of knowledge.',
    icon: 'chart',
  },
  {
    title: 'End-to-End Service',
    text: 'From first viewing to final signature — one dedicated point of contact.',
    icon: 'key',
  },
  {
    title: 'Trusted Advisors',
    text: 'Senior agents only. Average tenure of twelve years in the market.',
    icon: 'shield',
  },
];

export const stats = [
  { value: '18+', label: 'Years in the market' },
  { value: '850+', label: 'Properties placed' },
  { value: '$2.1B', label: 'Transaction volume' },
  { value: '98%', label: 'Client satisfaction' },
];

export { images };
