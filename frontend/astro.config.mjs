import { defineConfig, envField } from "astro/config"
import tailwind from '@astrojs/tailwind';

// https://astro.build/config


export default defineConfig({
  integrations: [tailwind()],
  experimental: {
    env: {
      schema: {
        PUBLIC_SERVER_URL: envField.string({ context: "client", access: "public", optional: true }),
        PUBLIC_CLIENT_URL: envField.string({ context: "client", access: "public" }),
        PORT: envField.number({ context: "server", access: "public", default: 4321 }),
        API_SECRET: envField.string({ context: "server", access: "secret" }),
      }
    }
  },
  output: "server"
})