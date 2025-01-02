// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  // Issue with block below: Other devices can access development site, but console.log doesn't work -> use '--host' in package.json
  // server: {
  //   host: true, // This makes the server listen on all addresses, including LAN
  // },

  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        background_color: "#2d3040",
      },
      workbox: {
        globDirectory: "dist/",
        globPatterns: ["**/*.{js,css,html}"],
        // Define runtime caching rules.
        runtimeCaching: [
          // Cache images
          {
            urlPattern: ({ request }) => request.destination === "image",
            handler: "CacheFirst",
            options: {
              cacheName: "images-cache",
              expiration: {
                maxEntries: 70, // Adjust as needed
                maxAgeSeconds: 30 * 24 * 60 * 60, // 30 days
              },
            },
          },

          // Video caching
          {
            // Match video files based on their MIME type
            urlPattern: ({ request }) => request.destination === "video",
            handler: "CacheFirst",
            options: {
              cacheName: "videos-cache",
              expiration: {
                maxEntries: 9, // Since we have 3 mp4 videos * 3 versions
                maxAgeSeconds: 60 * 60 * 24 * 30, // 30 Days
              },
              cacheableResponse: {
                statuses: [200],
              },
            },
          },

          // Cache fonts
          {
            urlPattern: ({ request }) => request.destination === "font",
            handler: "StaleWhileRevalidate",
            options: {
              cacheName: "fonts-cache",
              expiration: {
                maxEntries: 20,
              },
            },
          },
          // Cache CSS, JS, and other static resources
          {
            urlPattern: ({ request }) =>
              request.destination === "style" ||
              request.destination === "script" ||
              request.destination === "manifest",
            handler: "StaleWhileRevalidate",
            options: {
              cacheName: "static-resources",
            },
          },
          // Only handle navigation requests for specific routes
          {
            urlPattern: ({ url }) => {
              // Define the routes you want the service worker to handle
              const allowedRoutes = [
                "/",
                "/fundraising",
                "/bola",
                // Add more routes as needed
              ];

              // Check if the pathname matches any of the allowed routes
              return allowedRoutes.some((route) => {
                // Ensure exact match or starts with the route followed by a slash
                return (
                  url.pathname === route || url.pathname.startsWith(`${route}/`)
                );
              });
            },
            handler: "NetworkFirst",
            options: {
              cacheName: "navigation-cache",
              // You can define additional options here
            },
          },
        ],
        // Disable navigateFallback to prevent handling all navigations
        navigateFallback: null,
      },
      // Other PWA configurations if necessary
    }),
  ],
});
