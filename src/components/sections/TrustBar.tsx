import { CalendarDays, Users, Building2, Headphones } from 'lucide-react';
import styles from './BelowHero.module.css';
const stats = [
  { icon: CalendarDays, value: '40+', label: 'Years of combined experience' },
  { icon: Users, value: 'Thousands', label: 'Of successful installations' },
  { icon: Building2, value: 'Commercial & Residential', label: 'System integration' },
  { icon: Headphones, value: 'Service & Support', label: 'Before, during & after the job' },
];
export function TrustBar() {
  return (
    <section className={styles.trustSection} aria-label="Company highlights">
      <div className={styles.trustPanel}>
        {stats.map(({icon: Icon, value, label}) => (
          <div key={value} className={styles.stat}>
            <Icon size={44} strokeWidth={2.2} aria-hidden="true" />
            <div><p className={styles.statValue}>{value}</p><p className={styles.statLabel}>{label}</p></div>
          </div>
        ))}
      </div>
    </section>
  );
}
