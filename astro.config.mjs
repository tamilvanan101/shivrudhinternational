// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Fully static site. Every route is prerendered at build time — no server,
// no database. Deploys to Cloudflare as static assets via wrangler.toml.
export default defineConfig({
  site: 'https://shivrudhinternational.com',
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
});
