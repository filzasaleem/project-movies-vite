import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import fs from 'fs-extra';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  build: {
    // Use the build options to configure the build process
    rollupOptions: {
      output: {
        // Specify the output directory for the _redirects file in the build
        manualChunks: {
          _redirects: ['_redirects'],
        },
      },
    },
  },

  // Add a hook to the writeBundle event to copy the _redirects file
  hooks: {
    writeBundle() {
      fs.copySync('./_redirects', './dist/_redirects');
    },
  },
});
