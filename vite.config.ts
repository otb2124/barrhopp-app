import { defineConfig } from 'vite';

export default defineConfig({
  ssr: {
    // Forces Vite to bundle PrimeNG properly during SSR instead of treating it as an external CommonJS mismatch
    noExternal: ['primeng']
  }
});