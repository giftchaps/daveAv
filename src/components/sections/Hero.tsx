import type React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Play, MapPin } from 'lucide-react';
import styles from './Hero.module.css';

// Typing speed and timing for the headline (it types once, then stays).
const LINE_ONE = 'Audio Visual Solutions';
const PAUSE_CHARS = 6; // short pause between the two lines, measured in keystrokes
const START_MS = 250;
const CHAR_MS = 42;

/** One headline line, typed letter by letter. Each word stays together so lines never break mid-word. */
function TypedLine({ text, start, strong = false, last = false }: { text: string; start: number; strong?: boolean; last?: boolean }) {
  const Tag = strong ? 'strong' : 'span';
  let i = start;
  const words = text.split(' ');
  return (
    <Tag className={styles.typedLine}>
      {words.map((word, w) => (
        <span key={w}>
          <span className={styles.word}>
            {Array.from(word).map((ch, c) => {
              const delay = START_MS + i++ * CHAR_MS;
              const isEnd = w === words.length - 1 && c === word.length - 1;
              const cls = isEnd ? (last ? styles.chLast : styles.chLineEnd) : '';
              return (
                <span
                  key={c}
                  className={`${styles.ch} ${cls}`.trim()}
                  style={{ '--d': `${delay}ms` } as React.CSSProperties}
                >
                  {ch}
                </span>
              );
            })}
          </span>
          {w < words.length - 1 && (i++, ' ')}
        </span>
      ))}
    </Tag>
  );
}

export function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-heading">
      <Image src="/images/hero-sky-preview-v2.jpg" alt="" fill priority sizes="100vw" className={styles.sky} />
      <div className={styles.wash} aria-hidden="true" />
      <div className={styles.inner}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>Connecticut&apos;s Trusted AV Partner</p>
          <h1 id="hero-heading" className={styles.heading}>
            {/* The letters are real text, so search engines and screen readers get the full headline. */}
            <TypedLine text={LINE_ONE} start={0} />{' '}
            <TypedLine text="That Just Work." start={LINE_ONE.length + PAUSE_CHARS} strong last />
          </h1>
          <p className={styles.description}>Professional AV installation, live event production and technical support. Quality equipment. Personal service. Guaranteed results.</p>
          <div className={styles.actions}>
            <Link href="/request-quote" className={styles.primary}>Request a Quote <ArrowRight size={18} aria-hidden="true" /></Link>
            <Link href="/projects" className={styles.secondary}><Play size={17} aria-hidden="true" />Explore Our Work</Link>
          </div>
          <p className={styles.location}><MapPin size={17} aria-hidden="true" /><span>Based in Bridgeport. Serving Connecticut &amp; <span className={styles.nowrap}>the Tri-State Region.</span></span></p>
        </div>
        <div className={styles.emblemWrap}>
          <Image src="/images/avators-emblem.png" alt="A/V-ATORS. First to Show, Last to Go. Honor Those Who Serve." width={270} height={297} className={styles.emblem} sizes="(max-width: 639px) 140px, (max-width: 1023px) 200px, 280px" />
        </div>
      </div>
    </section>
  );
}
