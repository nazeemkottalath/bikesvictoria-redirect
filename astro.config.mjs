import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  site: 'https://bikesvictoria.com',
  build: {
    assets: '_assets'
  }
});
