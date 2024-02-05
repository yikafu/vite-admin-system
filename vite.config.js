import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // @路径配置
  resolve: {
    alias: {
      "@": "/src",
      public: "/public",
      views: "/src/views",
    },
  },
});
