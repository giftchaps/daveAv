import type { StaticImageData } from 'next/image';
import services from '../../public/images/headers/services.jpg';
import installation from '../../public/images/headers/installation.jpg';
import eventProduction from '../../public/images/headers/event-production.jpg';
import serviceSupport from '../../public/images/headers/service-support.jpg';
import videoProduction from '../../public/images/headers/video-production.jpg';
import equipmentSales from '../../public/images/headers/equipment-sales.jpg';
import projects from '../../public/images/headers/projects.jpg';
import about from '../../public/images/headers/about.jpg';
import team from '../../public/images/headers/team.jpg';
import contact from '../../public/images/headers/contact.jpg';
import requestQuote from '../../public/images/headers/request-quote.jpg';
import support from '../../public/images/headers/support.jpg';

/**
 * Background photos for the page headers (stock photos from Unsplash, stored
 * locally). Static imports give each one a blurred preview that shows at once.
 */
export const HEADER_IMAGES: Record<string, StaticImageData> = {
  'services': services,
  'installation': installation,
  'event-production': eventProduction,
  'service-support': serviceSupport,
  'video-production': videoProduction,
  'equipment-sales': equipmentSales,
  'projects': projects,
  'about': about,
  'team': team,
  'contact': contact,
  'request-quote': requestQuote,
  'support': support,
};
