// Property catalogue. Structured so it can be swapped for a real database
// (e.g. REST/SDK fetch) without touching any component — the shapes below
// are the contract the UI depends on.

const img = (id, w = 1400) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

const P = {
  duskPoolVilla: img('1512917774080-9991f1c4c750'),
  modernPoolDay: img('1600596542815-ffad4c1539a9'),
  whiteModernHouse: img('1580587771525-78b9dba3b914'),
  villaNight: img('1613490493576-7fde63acd811'),
  modernHome1: img('1600585154340-be6161a56a0c'),
  homeGarden: img('1600047509807-ba8f99d2cdde'),
  houseDusk: img('1564013799919-ab600027ffc6'),
  poolHouse: img('1600585154526-990dced4db0d'),
  livingRoom: img('1600607687939-ce8a6c25118c'),
  livingRoom2: img('1600210492486-724fe5c67fb0'),
  interiorWarm: img('1600566752355-35792bedcfea'),
  interiorLounge: img('1600607687920-4e2a09cf159d'),
  interiorSuite: img('1600566753086-00f18fb6b3ea'),
  interiorHall: img('1600607688969-a5bfcd646154'),
  apartmentLiving: img('1522708323590-d24dbb6b0267'),
  cityApartment: img('1560448204-e02f11c3d0e2'),
  homeFront: img('1600047509358-9dc75507daeb'),
  houseClassic: img('1502005229762-cf1b2da7c5d6'),
  heroVilla: img('1512917774080-9991f1c4c750', 2400),
  aboutMain: img('1600596542815-ffad4c1539a9'),
  aboutSide: img('1613490493576-7fde63acd811', 800),
  servicesWide: img('1600585154340-be6161a56a0c', 2000),
  contactOffice: img('1600607687939-ce8a6c25118c', 1400),
};

export const images = P;

export const properties = [
  {
    id: 'lakeside-modern-villa',
    name: 'Lakeside Modern Villa',
    location: 'Austin, Texas, USA',
    price: 2350000,
    priceLabel: '$2.35 Million',
    type: 'Villa',
    beds: 5,
    baths: 6,
    area: '6,800 sq ft',
    yearBuilt: 2021,
    featured: true,
    cover: P.duskPoolVilla,
    images: [P.duskPoolVilla, P.livingRoom, P.interiorWarm, P.poolHouse],
    description:
      'Set on a private stretch of Lake Austin shoreline, this architectural villa pairs floor-to-ceiling glass with warm natural stone and a zero-edge infinity pool. Open-plan living flows onto sheltered terraces, making the water the constant backdrop of every room.',
    features: [
      'Zero-edge infinity pool with lake view',
      'Floor-to-ceiling glazing on two elevations',
      'Chef’s kitchen with concealed pantry',
      'Primary suite with private lake terrace',
      'Wine room and home cinema',
    ],
    amenities: ['Pool', 'Smart home', 'Boat dock', 'Gym', 'EV charging', 'Landscaped gardens'],
    agentId: 'daniel-morgan',
  },
  {
    id: 'pacific-glass-house',
    name: 'Pacific Glass House',
    location: 'Malibu, California, USA',
    price: 4800000,
    priceLabel: '$4.8 Million',
    type: 'Villa',
    beds: 4,
    baths: 5,
    area: '5,400 sq ft',
    yearBuilt: 2022,
    featured: true,
    cover: P.villaNight,
    images: [P.villaNight, P.interiorLounge, P.livingRoom2, P.modernPoolDay],
    description:
      'A cantilevered glass residence suspended above the Pacific, designed around uninterrupted ocean views from Point Dume to Palos Verdes. Pale oak interiors and a sculptural steel stair give the home a gallery-like calm.',
    features: [
      'Panoramic ocean-view primary wing',
      'Cantilevered infinity spa',
      'Gallery-calibre lighting design',
      'Outdoor kitchen and fire terrace',
      'Solar array with battery storage',
    ],
    amenities: ['Ocean view', 'Spa', 'Smart home', 'Solar', 'Gym', 'Beach access'],
    agentId: 'olivia-carter',
  },
  {
    id: 'desert-horizon-estate',
    name: 'Desert Horizon Estate',
    location: 'Scottsdale, Arizona, USA',
    price: 3150000,
    priceLabel: '$3.15 Million',
    type: 'Estate',
    beds: 5,
    baths: 5,
    area: '7,200 sq ft',
    yearBuilt: 2020,
    featured: true,
    cover: P.modernPoolDay,
    images: [P.modernPoolDay, P.interiorSuite, P.livingRoom, P.houseDusk],
    description:
      'Carved into the McDowell Sonoran foothills, this estate frames desert sunsets through a dramatic steel-and-glass great room. A resort-grade courtyard poolscape and casita guest wing make it effortless to entertain.',
    features: [
      'Boulder-integrated negative-edge pool',
      'Detached guest casita',
      'Great room with 18-ft glass wall',
      'Desert landscaping with mature saguaros',
      'Four-car gallery garage',
    ],
    amenities: ['Pool', 'Spa', 'Casita', 'Smart home', 'Golf nearby', 'EV charging'],
    agentId: 'james-wilson',
  },
  {
    id: 'oceanfront-residence',
    name: 'Oceanfront Residence',
    location: 'Miami, Florida, USA',
    price: 5200000,
    priceLabel: '$5.2 Million',
    type: 'Penthouse',
    beds: 4,
    baths: 5,
    area: '4,900 sq ft',
    yearBuilt: 2019,
    featured: true,
    cover: P.houseDusk,
    images: [P.houseDusk, P.interiorHall, P.apartmentLiving, P.livingRoom2],
    description:
      'Directly on the sand in Bal Harbour, this full-service residence wraps every principal room around the Atlantic. Hotel-calibre amenities, a private beach club and 24-hour concierge complete the offering.',
    features: [
      'Direct oceanfront with wraparound terrace',
      'Private beach club membership',
      'Bulthaup kitchen with Gaggenau suite',
      'Primary suite with sunrise terrace',
      'Concierge and valet services',
    ],
    amenities: ['Ocean view', 'Concierge', 'Pool', 'Spa', 'Gym', 'Security'],
    agentId: 'sophia-bennett',
  },
  {
    id: 'modern-hillside-retreat',
    name: 'Modern Hillside Retreat',
    location: 'Los Angeles, California, USA',
    price: 3750000,
    priceLabel: '$3.75 Million',
    type: 'Villa',
    beds: 4,
    baths: 4,
    area: '4,600 sq ft',
    yearBuilt: 2023,
    featured: false,
    cover: P.whiteModernHouse,
    images: [P.whiteModernHouse, P.livingRoom, P.interiorWarm, P.modernHome1],
    description:
      'A crisp white volume stepped into the Hollywood Hills, with city-light views from a floating 60-ft terrace. Stucco, glass and warm timber are composed with real restraint — architecture first, decoration second.',
    features: [
      '60-ft city-view terrace',
      'Floating architectural stair',
      'Warm oak interior palette',
      'Plunge pool with sunset deck',
      'Screening lounge',
    ],
    amenities: ['City view', 'Pool', 'Smart home', 'Gym', 'Solar', 'Auto gate'],
    agentId: 'olivia-carter',
  },
  {
    id: 'palm-garden-residence',
    name: 'Palm Garden Residence',
    location: 'Beverly Hills, California, USA',
    price: 6400000,
    priceLabel: '$6.4 Million',
    type: 'Estate',
    beds: 6,
    baths: 7,
    area: '9,100 sq ft',
    yearBuilt: 2018,
    featured: false,
    cover: P.homeGarden,
    images: [P.homeGarden, P.interiorLounge, P.poolHouse, P.interiorSuite],
    description:
      'Behind private gates off Benedict Canyon, this walled estate centers on a century-old palm garden with a symmetrical lap pool. Interiors balance formal rooms for entertaining with a relaxed family wing.',
    features: [
      'Gated 1.2-acre palm garden',
      'Symmetrical lap pool and pool house',
      'Formal dining for 14',
      'Staff quarters and wine cellar',
      'Tennis court with night lighting',
    ],
    amenities: ['Pool', 'Tennis court', 'Wine cellar', 'Security', 'Smart home', 'Gym'],
    agentId: 'daniel-morgan',
  },
  {
    id: 'contemporary-lake-house',
    name: 'Contemporary Lake House',
    location: 'Lake Tahoe, Nevada, USA',
    price: 2950000,
    priceLabel: '$2.95 Million',
    type: 'House',
    beds: 4,
    baths: 4,
    area: '3,900 sq ft',
    yearBuilt: 2021,
    featured: false,
    cover: P.poolHouse,
    images: [P.poolHouse, P.livingRoom2, P.interiorWarm, P.homeFront],
    description:
      'A warm timber-and-stone retreat on the Nevada shore, built for snow days and lake summers alike. A double-height great room anchors the plan, with a bunk wing sized for the whole family.',
    features: [
      'Double-height timber great room',
      'Stone fireplace wall',
      'Ski-in trail access nearby',
      'Cedar hot tub on the deck',
      'Heated drive and mudroom',
    ],
    amenities: ['Lake view', 'Hot tub', 'Fireplace', 'Smart home', 'Ski nearby', 'Garage'],
    agentId: 'james-wilson',
  },
  {
    id: 'architectural-downtown-penthouse',
    name: 'Architectural Downtown Penthouse',
    location: 'Austin, Texas, USA',
    price: 1850000,
    priceLabel: '$1.85 Million',
    type: 'Penthouse',
    beds: 3,
    baths: 3,
    area: '2,750 sq ft',
    yearBuilt: 2022,
    featured: false,
    cover: P.apartmentLiving,
    images: [P.apartmentLiving, P.cityApartment, P.interiorHall, P.livingRoom],
    description:
      'Crowning a boutique tower two blocks from Rainey Street, this penthouse opens to 1,100 sq ft of sky terrace with skyline views. Concrete, walnut and glass detailing throughout.',
    features: [
      '1,100 sq ft private sky terrace',
      'Floor-to-ceiling skyline glazing',
      'Walnut and concrete interiors',
      'Building pool and residents’ lounge',
      'Two deeded parking spaces',
    ],
    amenities: ['City view', 'Terrace', 'Concierge', 'Pool', 'Gym', 'EV charging'],
    agentId: 'sophia-bennett',
  },
  {
    id: 'garden-court-villa',
    name: 'Garden Court Villa',
    location: 'Pasadena, California, USA',
    price: 2650000,
    priceLabel: '$2.65 Million',
    type: 'House',
    beds: 4,
    baths: 4,
    area: '4,200 sq ft',
    yearBuilt: 2017,
    featured: false,
    cover: P.homeFront,
    images: [P.homeFront, P.livingRoom, P.interiorSuite, P.houseClassic],
    description:
      'A refined courtyard villa on a quiet, tree-lined street, arranged around a private garden court. Clean classical proportions meet an open, light-filled modern plan.',
    features: [
      'Private garden courtyard',
      'Open-plan family kitchen',
      'Detached studio / office',
      'Mature oak and olive trees',
      'Outdoor dining loggia',
    ],
    amenities: ['Garden', 'Studio', 'Fireplace', 'Smart home', 'Auto gate', 'Garage'],
    agentId: 'sophia-bennett',
  },
  {
    id: 'harbor-light-house',
    name: 'Harbor Light House',
    location: 'Newport, Rhode Island, USA',
    price: 3450000,
    priceLabel: '$3.45 Million',
    type: 'House',
    beds: 5,
    baths: 4,
    area: '5,100 sq ft',
    yearBuilt: 2016,
    featured: false,
    cover: P.houseClassic,
    images: [P.houseClassic, P.livingRoom2, P.interiorHall, P.homeFront],
    description:
      'A shingle-and-glass harborside home with deep-water dockage and sunset views over Newport Harbor. Designed for effortless summers with generous porch space on three levels.',
    features: [
      'Deep-water dock with mooring',
      'Three levels of harbor-facing porches',
      'Custom coastal kitchen',
      'Guest cottage over the garage',
      'Whole-house generator',
    ],
    amenities: ['Waterfront', 'Dock', 'Guest cottage', 'Fireplace', 'Generator', 'Garden'],
    agentId: 'james-wilson',
  },
];

export const featuredProperties = properties.filter((p) => p.featured);

export const locations = [...new Set(properties.map((p) => p.location))];
export const propertyTypes = [...new Set(properties.map((p) => p.type))];

export const priceTiers = [
  { label: 'Any price', value: 0 },
  { label: 'Up to $2M', value: 2000000 },
  { label: 'Up to $3M', value: 3000000 },
  { label: 'Up to $4M', value: 4000000 },
  { label: 'Up to $6M', value: 6000000 },
];

export function getProperty(id) {
  return properties.find((p) => p.id === id);
}

export function getSimilarProperties(property, count = 3) {
  return properties
    .filter((p) => p.id !== property.id)
    .sort((a, b) => {
      const score = (q) => (q.type === property.type ? 0 : 1) + Math.abs(q.price - property.price) / 1e7;
      return score(a) - score(b);
    })
    .slice(0, count);
}
