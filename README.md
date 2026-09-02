# Shivrudh International

Marketing and product-showcase website for **Shivrudh International**, a Tamil
Nadu based trading company exporting jasmine, turmeric and quality spices to
buyers worldwide.

Buyers browse the product catalogue and send an enquiry through a
**Request a Quote** form. There is no online checkout — this is a B2B
inquiry-led site.

---

## Tech stack

| Layer      | Choice                                  |
| ---------- | --------------------------------------- |
| Framework  | [Astro](https://astro.build) (static)   |
| Styling    | Tailwind CSS v4                         |
| Fonts      | Inter + Source Serif 4                  |
| Forms      | [Web3Forms](https://web3forms.com) (static form handler) |
| Output     | Fully static (`output: 'static'`)       |

Every page is prerendered at build time. There is no server and no database.

---

## Hosting & domain

| Concern             | Where                                                    |
| ------------------- | -------------------------------------------------------- |
| **Domain registrar** | **Hostinger** — `shivrudhinternational.com` (registered here, renews 2029-09-02) |
| **DNS management**   | **Cloudflare** — the domain's nameservers were changed at Hostinger to point to Cloudflare (`gail.ns.cloudflare.com` / `ignat.ns.cloudflare.com`) |
| **Website hosting**  | **Cloudflare Workers (static assets)** — project `shivrudhinternational` under Workers & Pages |
| **Source control**  | GitHub — [`tamilvanan101/shivrudhinternational`](https://github.com/tamilvanan101/shivrudhinternational) |

### How it fits together

1. The **domain** `shivrudhinternational.com` is bought and owned at **Hostinger**.
2. Its **nameservers were repointed** (at Hostinger) to **Cloudflare**, so all DNS
   for the domain is now managed inside the Cloudflare dashboard.
3. The **site itself is hosted on Cloudflare** as a Worker serving static assets
   from the `dist/` build output (see `wrangler.toml`).
4. The custom domain is attached to the Worker via
   Cloudflare → Workers & Pages → `shivrudhinternational` → **Domains**.

> Note: Hostinger is the **registrar only**. The website files are not hosted on
> Hostinger — they run on Cloudflare's network with automatic HTTPS.

### URLs

- Production (custom domain): `https://shivrudhinternational.com`
- Cloudflare Worker URL: `https://shivrudhinternational.tamilvanan101.workers.dev`

---

## Deploying

Deployment is wired to Cloudflare from the GitHub repo.

- **Build command:** `npm run build`
- **Deploy command:** `npx wrangler deploy`
- **Environment variable:** `NODE_VERSION = 22`

`wrangler.toml` declares the site as a static-asset Worker:

```toml
name = "shivrudh-international"
compatibility_date = "2024-12-01"

[assets]
directory = "./dist"
```

Every push to `main` triggers a new build and deploy on Cloudflare.

---

## Local development

```bash
npm install       # install dependencies
npm run dev       # start dev server at http://localhost:4321
npm run build     # build the static site into dist/
npm run preview   # preview the production build locally
```

> On Windows PowerShell, if `npm` is blocked by execution policy, run commands
> via `cmd /c "npm.cmd ..."`.

---

## Project structure

```
src/
  data/products.ts        Single source of truth for the product catalogue
  layouts/Base.astro      Shared HTML shell (head, header, footer)
  components/             Header, Footer, ProductCard
  pages/
    index.astro           Homepage (hero, featured products, story, CTA)
    products/index.astro  Full product listing
    products/[slug].astro Product detail pages (one per product)
    quote.astro           Request-a-Quote form
    about.astro           Company story
    contact.astro         Contact details
  styles/global.css       Design tokens (spice-green / turmeric-gold / cream)
public/
  favicon.svg
  products/               Drop real product photos here (see below)
```

---

## Editing content

- **Products:** edit `src/data/products.ts`. Each entry drives its card, detail
  page, and the quote-form dropdown. Set `featured: true` to surface a product on
  the homepage.
- **Product photos:** currently each product shows an emoji tile placeholder.
  Add real images to `public/products/` and wire them into `ProductCard.astro`
  and `products/[slug].astro`.

---

## To do

- [ ] Add the Web3Forms access key in `src/pages/quote.astro`
      (replace `YOUR_WEB3FORMS_ACCESS_KEY`) so quote requests are emailed.
- [ ] Replace emoji placeholders with real product photography.
- [ ] Attach the custom domain to the Worker once Cloudflare shows the domain
      as **Active**.
