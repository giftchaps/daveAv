import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Play, MapPin } from 'lucide-react';
import styles from './Hero.module.css';

export function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-heading">
      <Image src="/images/hero-sky-preview-v2.jpg" alt="" fill priority sizes="100vw" className={styles.sky} />
      <div className={styles.wash} aria-hidden="true" />
      <div className={styles.inner}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>Connecticut&apos;s Trusted AV Partner</p>
          <h1 id="hero-heading" className={styles.heading}>
            <span>Audio Visual Solutions</span>
            <strong>That Just Work.</strong>
          </h1>
          <p className={styles.description}>Professional AV installation, live event production and technical support. Quality equipment. Personal service. Guaranteed results.</p>
          <div className={styles.actions}>
            <Link href="/request-quote" className={styles.primary}>Request a Quote <ArrowRight size={18} aria-hidden="true" /></Link>
            <Link href="/projects" className={styles.secondary}><Play size={17} aria-hidden="true" />Explore Our Work</Link>
          </div>
          <p className={styles.location}><MapPin size={17} aria-hidden="true" />Based in Bridgeport. Serving Connecticut &amp; the Tri-State Region.</p>
        </div>
        <div className={styles.emblemWrap}>
          <Image src="/images/avators-emblem.png" alt="A/V-ATORS. First to Show, Last to Go. Honor Those Who Serve." width={270} height={297} className={styles.emblem} sizes="(max-width: 639px) 140px, (max-width: 1023px) 200px, 280px" />
        </div>
      </div>
    </section>
  );
}
