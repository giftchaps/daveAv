import styles from './BelowHero.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const services = [
  {
    id: 'installation',
    title: 'Installation & Integration',
    description: 'Custom audio, video, control and collaboration solutions.',
    href: '/services/installation',
    image: '/images/services/installation-preview-v2.jpg',
    imageAlt: 'Professional AV installation in a conference room',
  },
  {
    id: 'event-production',
    title: 'Event Production & Staging',
    description: 'Full-service AV for corporate events, live shows and conferences.',
    href: '/services/event-production',
    image: '/images/services/event-production-preview-v2.jpg',
    imageAlt: 'Live event production with professional lighting and staging',
  },
  {
    id: 'service-support',
    title: 'Service & Support',
    description: 'Responsive support and preventive maintenance to keep your systems running.',
    href: '/services/service-support',
    image: '/images/services/service-support-preview-v2.jpg',
    imageAlt: 'AV technician providing on-site service and support',
  },
  {
    id: 'video-production',
    title: 'Video Production & Streaming',
    description: 'Deliver your message with high-quality video and live streaming.',
    href: '/services/video-production',
    image: '/images/services/video-production-preview-v2.jpg',
    imageAlt: 'Professional video production setup with cameras and mixing board',
  },
  {
    id: 'equipment-sales',
    title: 'Equipment Sales',
    description: 'Professional-grade AV equipment from the brands you trust.',
    href: '/services/equipment-sales',
    image: '/images/services/equipment-sales-preview-v2.jpg',
    imageAlt: 'Professional AV equipment including mixers and monitors',
  },
];

export function ServicesSection() {
  return (
    <section className={styles.services} aria-labelledby="services-heading">
      <div className={styles.servicesInner}>
        <div className={styles.servicesHeader}>
          <h2 id="services-heading" className={styles.servicesHeading}>Our Services</h2>
          <p className={styles.servicesSubtitle}>Full-service audio visual solutions</p>
          <Link href="/services" className={styles.servicesLink}>View All Services <ArrowRight size={15} /></Link>
        </div>
        <div className={styles.serviceGrid}>
          {services.map(service => (
            <Link key={service.id} href={service.href} className={styles.serviceCard}>
              <Image src={service.image} alt={service.imageAlt} fill className={styles.servicePhoto} sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 20vw" />
              <div className={styles.serviceShade} aria-hidden="true" />
              <span className={styles.serviceArrow} aria-hidden="true"><ArrowRight size={16} /></span>
              <div className={styles.serviceContent}>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
                <p className={styles.serviceDescription}>{service.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
