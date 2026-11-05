export const SITE_NAME = 'A/V DAVEY';
export const SITE_TAGLINE = 'Connecticut\'s Trusted AV Partner Since 1989';
export const PHONE = '(203) 395-7234';
export const PHONE_HREF = 'tel:+12033957234';
export const EMAIL = 'davey@avdavey.com';
export const EMAIL_HREF = 'mailto:davey@avdavey.com';
export const LOCATION = 'Bridgeport, CT';
export const FOUNDED = '1989';
export const FACEBOOK_URL = 'https://www.facebook.com/avdavey';

// Public URL of the production site. Set NEXT_PUBLIC_SITE_URL in Vercel once the
// domain is connected; it is used for SEO tags, the sitemap and email images.
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'https://avdavey.com').replace(/\/+$/, '');

// Brand palette (matches the site's Tailwind colors)
export const BRAND = {
  navy: '#071E55',
  navyLight: '#0D2A6E',
  red: '#B2081B',
  redDark: '#8E0615',
  blue: '#1265B7',
  sky: '#B9DDFF',
  mist: '#F4F6FA',
  line: '#DDE3EE',
  slate: '#475569',
} as const;

export const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'Installation & Integration', href: '/services/installation' },
      { label: 'Event Production & Staging', href: '/services/event-production' },
      { label: 'Service & Support', href: '/services/service-support' },
      { label: 'Video Production & Streaming', href: '/services/video-production' },
      { label: 'Equipment Sales', href: '/services/equipment-sales' },
    ],
  },
  { label: 'Projects', href: '/projects' },
  {
    label: 'About',
    href: '/about',
    children: [
      { label: 'Our Story', href: '/about' },
      { label: 'Our Team', href: '/team' },
    ],
  },
  { label: 'Support', href: '/support' },
  { label: 'Contact', href: '/contact' },
];

export const SERVICES = [
  {
    id: 'installation',
    title: 'Installation & Integration',
    shortTitle: 'Installation',
    slug: 'installation',
    description: 'Custom audio, video, control and collaboration solutions for commercial and residential spaces.',
    icon: 'MonitorCog',
  },
  {
    id: 'event-production',
    title: 'Event Production & Staging',
    shortTitle: 'Event Production',
    slug: 'event-production',
    description: 'Full-service AV for corporate events, live shows and conferences.',
    icon: 'Presentation',
  },
  {
    id: 'service-support',
    title: 'Service & Support',
    shortTitle: 'Service',
    slug: 'service-support',
    description: 'Responsive support and preventive maintenance to keep your systems running.',
    icon: 'Wrench',
  },
  {
    id: 'video-production',
    title: 'Video Production & Streaming',
    shortTitle: 'Video',
    slug: 'video-production',
    description: 'Deliver your message with high-quality video and live streaming.',
    icon: 'Video',
  },
  {
    id: 'equipment-sales',
    title: 'Equipment Sales',
    shortTitle: 'Equipment',
    slug: 'equipment-sales',
    description: 'Professional-grade AV equipment from the brands you trust.',
    icon: 'Package',
  },
];
