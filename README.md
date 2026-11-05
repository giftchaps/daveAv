# A/V DAVEY website

The website for A/V DAVEY, Connecticut's audio visual partner since 1989. Built with Next.js (App Router), React and Tailwind CSS, and deployed on Vercel.

## Run it locally

```bash
npm install
cp .env.example .env.local   # then fill in the values
npm run dev                  # http://localhost:3000
```

| Command | What it does |
| --- | --- |
| `npm run dev` | Development server with hot reload |
| `npm run build` | Production build (run before pushing big changes) |
| `npm run start` | Serve the production build locally |
| `npm run lint` | Lint the code |
| `npm run email:preview` | Render every form email with sample data into `email-previews/` |

## Environment variables

All settings live in environment variables. See [`.env.example`](.env.example) for the full list with notes. In Vercel, add them under **Project → Settings → Environment Variables**, then redeploy.

| Variable | Required | Purpose |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Yes | Live URL, e.g. `https://avdavey.com`. Used for SEO tags, the sitemap and email images. |
| `SMTP_HOST`, `SMTP_PORT`, `SMTP_SECURE` | Yes | SMTP server for the contact and quote forms |
| `SMTP_USER`, `SMTP_PASS` | Yes | SMTP login (use an app password where the provider supports it) |
| `MAIL_FROM` | Recommended | Sender shown on emails, e.g. `A/V DAVEY Website <website@avdavey.com>` |
| `MAIL_TO` | Recommended | Inbox that receives submissions (defaults to `davey@avdavey.com`) |
| `MAIL_BCC` | No | Hidden copy of every submission |
| `MAIL_SEND_CONFIRMATION` | No | `false` turns off the customer confirmation email |
| `FACEBOOK_PAGE_ID`, `FACEBOOK_PAGE_ACCESS_TOKEN` | No | Homepage Facebook feed |

Without the SMTP variables the forms show a friendly "temporarily unavailable, please call" message instead of failing silently.

## How the forms work

- `src/components/forms/` holds the Contact and Request a Quote forms (client components).
- They post to `src/app/api/contact/route.ts`, which validates the input again on the server, filters spam (hidden honeypot field, minimum fill time, same-origin check, per-IP rate limit), and sends two emails with Nodemailer:
  1. a notification to `MAIL_TO`, with **Reply-To set to the customer** so Davey can simply hit reply;
  2. a branded confirmation to the customer.
- Email templates are in `src/lib/email/templates.ts` (inline-styled HTML plus plain text, in the brand colors). Run `npm run email:preview` after editing them.
- Links can pre-fill the quote form: `/request-quote?type=service-support` selects a project type (slugs are in `src/lib/forms.ts`), and `?promo=ngo` attaches an active promotion.

## Common edits

| To change | Edit |
| --- | --- |
| Phone, email, location, brand colors | `src/lib/constants.ts` |
| Promotion banner offers | `src/lib/promotions.ts` (set `active: false` or an `expiresAt` date) |
| Projects | `src/app/projects/page.tsx` and `src/components/sections/FeaturedProjects.tsx`; photos go in `public/images/projects/` |
| Team | `src/app/team/page.tsx` |
| Privacy policy / terms | `src/app/privacy-policy/page.tsx`, `src/app/terms-of-service/page.tsx` |
| Share image, favicon | `src/app/opengraph-image.jpg`, `src/app/twitter-image.jpg`, `src/app/icon.png`, `src/app/favicon.ico` |

When you replace an image, give the new file a new name so browsers and Vercel's image cache don't keep showing the old one.

## SEO

- `src/app/sitemap.ts` → `/sitemap.xml`; `src/app/robots.ts` → `/robots.txt` (preview deployments are kept out of search engines).
- Business details for Google are in the JSON-LD block in `src/app/layout.tsx`.
- After launch, submit `https://<domain>/sitemap.xml` in Google Search Console and claim the Google Business Profile.
