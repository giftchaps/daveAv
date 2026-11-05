// Renders every form email with sample data into ./email-previews so you can
// open them in a browser while tweaking the templates.
//   npm run email:preview
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { customerConfirmation, teamNotification } from '../src/lib/email/templates';
import type { ContactSubmission, QuoteSubmission } from '../src/lib/forms';

const out = join(process.cwd(), 'email-previews');
mkdirSync(out, { recursive: true });

const contact: ContactSubmission = {
  formType: 'contact',
  name: 'Sarah Mitchell',
  company: 'Fairfield Community Theatre',
  email: 'sarah@example.com',
  phone: '(203) 555-0142',
  message:
    'Hi Davey,\nWe are planning our spring gala at the theater on April 18 and need sound and lighting for about 200 guests.\nCould you send us some options?',
};

const quote: QuoteSubmission = {
  formType: 'quote',
  name: 'Michael Torres',
  company: 'Harborview Medical Group',
  email: 'm.torres@example.com',
  phone: '203-555-0199',
  projectType: 'Installation & Integration',
  location: 'Stamford, CT',
  date: 'Early March 2027',
  promo: 'ngo',
  description:
    'We are renovating two conference rooms (12 and 20 seats) and need video conferencing for Microsoft Teams, a large display in each, ceiling mics and simple touch-panel control.\nBudget is roughly $40-60k for both rooms.',
};

const now = new Date();
const files: [string, { subject: string; html: string; text: string }][] = [
  ['team-contact', teamNotification(contact, now)],
  ['customer-contact', customerConfirmation(contact)],
  ['team-quote', teamNotification(quote, now)],
  ['customer-quote', customerConfirmation(quote)],
];

for (const [name, email] of files) {
  writeFileSync(join(out, `${name}.html`), email.html);
  writeFileSync(join(out, `${name}.txt`), `Subject: ${email.subject}\n\n${email.text}`);
  console.log(`${name.padEnd(17)} ${email.subject}`);
}
console.log(`\nOpen the .html files in ${out}`);
