export const SITE_NAME = 'A/V DAVEY';
export const SITE_TAGLINE = 'Connecticut\'s Trusted AV Partner Since 1989';
export const PHONE = '(203) 395-7234';
export const PHONE_HREF = 'tel:+12033957234';
export const EMAIL = 'davey@avdavey.com';
export const EMAIL_HREF = 'mailto:davey@avdavey.com';
export const LOCATION = 'Bridgeport, CT';
export const FOUNDED = '1989';

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
