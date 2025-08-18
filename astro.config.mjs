// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  integrations: [react()],
  // TODO:
  vite: {
    plugins: [tailwindcss()],
  },
});
