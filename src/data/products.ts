/**
 * Product catalogue for Shivrudh International.
 *
 * Jasmine and turmeric lead, per the brief. Add or edit products here — the
 * homepage, listing page, and detail pages all read from this single source.
 *
 * `featured: true` surfaces a product on the homepage grid.
 * `image` points at /public/products/<file>. Swap the placeholders for real
 * photography when you have it.
 */

export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  slug: string;
  name: string;
  botanical?: string;
  tagline: string;
  /** Short blurb for cards. */
  summary: string;
  /** Full description for the detail page. */
  description: string;
  origin: string;
  image: string;
  /** Emoji used as a fallback tile when no photo is present. */
  emoji: string;
  featured: boolean;
  specs: ProductSpec[];
  forms: string[];
}

export const PRODUCTS: Product[] = [
  {
    slug: 'jasmine',
    name: 'Jasmine Flowers',
    botanical: 'Jasminum sambac (Madurai Malli)',
    tagline: 'The fragrance of Madurai, packed for the world.',
    summary:
      'Hand-picked Madurai jasmine — prized for its deep fragrance and long shelf life. Available fresh, dried, and as concrete for the perfume trade.',
    description:
      'Madurai Malli jasmine carries a Geographical Indication tag and is renowned worldwide for its intense, lasting fragrance. We source directly from farmer clusters around Madurai, grade by bud size and freshness, and pack to preserve aroma through the cold chain. Suitable for the fresh-flower trade, temple and event markets, dried-flower buyers, and fragrance houses sourcing jasmine concrete and absolute.',
    origin: 'Madurai, Tamil Nadu',
    image: '/products/jasmine.jpg',
    emoji: '🌼',
    featured: true,
    forms: ['Fresh buds', 'Dried flowers', 'Jasmine concrete'],
    specs: [
      { label: 'Variety', value: 'Madurai Malli (GI tagged)' },
      { label: 'Grade', value: 'Superior / Standard, by bud size' },
      { label: 'Packaging', value: 'Vented crates (fresh), food-grade pouches (dried)' },
      { label: 'MOQ', value: 'Negotiable per form and destination' },
      { label: 'Shelf life', value: 'Fresh 2-3 days chilled; dried 12 months' },
    ],
  },
  {
    slug: 'turmeric',
    name: 'Turmeric',
    botanical: 'Curcuma longa (Erode / Salem)',
    tagline: 'High-curcumin turmeric from the turmeric capital of India.',
    summary:
      'Erode and Salem turmeric with strong colour and curcumin content. Fingers, bulbs, and finger-milled powder — polished and ready for export.',
    description:
      'Erode is known as the turmeric city of India, and the region\'s turmeric is valued for its rich colour and curcumin levels. We supply whole fingers, bulbs, and stone-ground powder, sortex-cleaned and tested for moisture and curcumin. Ideal for spice packers, food manufacturers, nutraceutical buyers, and cosmetic formulators.',
    origin: 'Erode & Salem, Tamil Nadu',
    image: '/products/turmeric.jpg',
    emoji: '🟡',
    featured: true,
    forms: ['Whole fingers', 'Bulbs', 'Ground powder'],
    specs: [
      { label: 'Curcumin', value: '2% - 5% (lot dependent)' },
      { label: 'Moisture', value: '< 10%' },
      { label: 'Forms', value: 'Fingers, bulbs, powder' },
      { label: 'Packaging', value: '25 / 50 kg PP or jute bags, custom on request' },
      { label: 'MOQ', value: 'Negotiable, container loads preferred' },
    ],
  },
  {
    slug: 'dried-red-chilli',
    name: 'Dried Red Chilli',
    botanical: 'Capsicum annuum',
    tagline: 'Vivid colour, controlled heat.',
    summary:
      'Sun-dried red chillies with strong colour value and consistent heat. Whole and stemless grades for spice and sauce buyers.',
    description:
      'We supply sun-dried red chillies selected for colour (ASTA) and pungency. Whole, stemless, and crushed grades are available, cleaned and graded for export to spice packers, sauce makers, and oleoresin extractors.',
    origin: 'Tamil Nadu',
    image: '/products/chilli.jpg',
    emoji: '🌶️',
    featured: true,
    forms: ['Whole', 'Stemless', 'Crushed'],
    specs: [
      { label: 'Colour value', value: 'On request (ASTA)' },
      { label: 'Grades', value: 'Whole / Stemless / Crushed' },
      { label: 'Moisture', value: '< 12%' },
      { label: 'Packaging', value: '10 / 25 kg cartons or bags' },
      { label: 'MOQ', value: 'Negotiable' },
    ],
  },
  {
    slug: 'black-pepper',
    name: 'Black Pepper',
    botanical: 'Piper nigrum',
    tagline: 'The king of spices, cleaned to export grade.',
    summary:
      'Bold, aromatic black pepper. Machine-cleaned and graded by bulk density for spice and food buyers.',
    description:
      'Black pepper graded by bulk density (g/l), machine-cleaned and free of foreign matter. Whole and ground, suitable for spice packers and food manufacturers.',
    origin: 'Tamil Nadu & South India',
    image: '/products/pepper.jpg',
    emoji: '⚫',
    featured: false,
    forms: ['Whole', 'Ground'],
    specs: [
      { label: 'Bulk density', value: '500 - 570 g/l' },
      { label: 'Moisture', value: '< 12%' },
      { label: 'Packaging', value: '25 / 50 kg bags' },
      { label: 'MOQ', value: 'Negotiable' },
    ],
  },
  {
    slug: 'cardamom',
    name: 'Cardamom',
    botanical: 'Elettaria cardamomum',
    tagline: 'Green gold from the Western Ghats.',
    summary:
      'Bold green cardamom with high oil content and bright colour. Graded by size for premium spice buyers.',
    description:
      'Green cardamom graded by size (mm) and colour, with strong aroma and oil content. Sourced from the hills of South India for spice, confectionery, and beverage buyers.',
    origin: 'Western Ghats, South India',
    image: '/products/cardamom.jpg',
    emoji: '🫛',
    featured: false,
    forms: ['Whole pods'],
    specs: [
      { label: 'Size', value: '6 - 8 mm bold' },
      { label: 'Colour', value: 'Bright green' },
      { label: 'Packaging', value: '5 / 10 kg cartons' },
      { label: 'MOQ', value: 'Negotiable' },
    ],
  },
  {
    slug: 'moringa',
    name: 'Moringa',
    botanical: 'Moringa oleifera',
    tagline: 'The Tamil Nadu superfood, dried and milled.',
    summary:
      'Shade-dried moringa leaf powder and dried pods. Nutrient-dense, tested, and export-ready for the health-food trade.',
    description:
      'Shade-dried moringa leaf powder retaining colour and nutrients, plus dried drumstick pods. Popular with nutraceutical, health-food, and supplement buyers. Tested for moisture and microbial load.',
    origin: 'Tamil Nadu',
    image: '/products/moringa.jpg',
    emoji: '🌿',
    featured: false,
    forms: ['Leaf powder', 'Dried pods'],
    specs: [
      { label: 'Form', value: 'Leaf powder / dried pods' },
      { label: 'Moisture', value: '< 8% (powder)' },
      { label: 'Packaging', value: 'Food-grade pouches, 5 / 25 kg' },
      { label: 'MOQ', value: 'Negotiable' },
    ],
  },
];

export const FEATURED = PRODUCTS.filter((p) => p.featured);

export function productBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}
