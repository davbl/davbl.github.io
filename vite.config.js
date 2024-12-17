import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      // No manifest for now, so we skip PWA metadata.
      workbox: {
        // Define runtime caching rules.
        runtimeCaching: [
          {
            // Cache images.
            // This ensures images are served quickly after the first visit,
            // and are updated only when the max age or refresh cycle is reached.
            urlPattern: ({ request }) => request.destination === "image",
            handler: "CacheFirst",
            options: {
              cacheName: "images-cache",
              expiration: {
                maxEntries: 70, // Adjust depending on how many images you have
                maxAgeSeconds: 30 * 24 * 60 * 60, // 30 days
              },
            },
          },
          {
            // Cache fonts (if any). If no fonts, you can remove this block.
            urlPattern: ({ request }) => request.destination === "font",
            handler: "StaleWhileRevalidate",
            options: {
              cacheName: "fonts-cache",
              expiration: {
                maxEntries: 20,
              },
            },
          },
          {
            // Cache CSS, JS, and other static resources from the app.
            urlPattern: ({ request }) =>
              request.destination === "style" ||
              request.destination === "script" ||
              request.destination === "manifest",
            handler: "StaleWhileRevalidate",
            options: {
              cacheName: "static-resources",
            },
          },
        ],
      },
    }),
  ],
});
