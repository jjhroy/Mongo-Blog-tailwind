import { defineConfig } from "vite";
import path from "path";
import vue from "@vitejs/plugin-vue";
import Components from "unplugin-vue-components/vite";
//引入自动引入插件
import AutoImport from 'unplugin-auto-import/vite'
export default defineConfig({
  optimizeDeps: {
    include: ['@kangc/v-md-editor/lib/theme/vuepress.js'],
  },
  resolve: {
    alias: {
      '@': path.resolve('./src') // @代替src
    },
  },
  plugins: [
    vue(),
    Components({
      resolvers: [],
    }),
    AutoImport({
      imports: ['vue', 'vue-router', 'pinia'],
      dts: 'src/auto-import.d.ts',
    })
  ],
  server: {
    port: 4090,
    proxy: {
      "/api": {
        target: "http://localhost:8080",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
      "/random": {
        target: "https://tuapi.eees.cc",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/random/, ""),
      }
    },

  },
});
