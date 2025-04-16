// wxt.config.ts
import { defineConfig } from 'wxt';
import react from '@vitejs/plugin-react';

export default defineConfig({
  manifest: {
    name: 'Website Opened Notifier',
    description: 'Notifies when a website is opened or reopened.',
    permissions: ['notifications', 'tabs'],
  },
  modules: ['@wxt-dev/module-react',"@wxt-dev/auto-icons"],
  vite: () => ({
    plugins: [react()],
  }),
});