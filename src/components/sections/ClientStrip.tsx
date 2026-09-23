import Image from 'next/image';
import styles from './BelowHero.module.css';
const clients = [
  { name: 'Ethan Allen Hotel', logo: 'ethan-allen-hotel-trimmed.png', width: 130 },
  { name: 'Yale New Haven Health', logo: 'yale-new-haven-stacked-trimmed.png', width: 94 },
  { name: 'Yale University', logo: 'yale.png', width: 94 },
  { name: 'Unilever', logo: 'unilever-v2-trimmed.png', width: 78 },
  { name: 'Bayer', logo: 'bayer-v2.png', width: 78 },
  { name: 'Subway', logo: 'subway-v2.png', width: 120 },
  { name: 'Stop & Shop', logo: 'stop-and-shop-v2-trimmed.png', width: 128 },
  { name: 'Pitney Bowes', logo: 'pitney-bowes-v2.png', width: 132 },
];
export function ClientStrip() {
  return (
    <section className={styles.clientsSection} aria-labelledby="clients-heading">
      <div className={styles.clientsInner}>
        <h2 id="clients-heading" className={styles.clientsHeading}>Some of Our<span>Clients</span></h2>
        <ul className={styles.clientLogos}>
          {clients.map(client => (
            <li key={client.name} className={styles.clientLogo}>
              <div style={{ width: client.width, maxWidth: '100%', height: 80, position: 'relative' }}>
                <Image src={`/images/clients/${client.logo}`} alt={client.name} fill sizes="150px" className="object-contain" />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

