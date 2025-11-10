import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // Use absolute base so built asset URLs are absolute paths (/assets/...),
  // which prevents MIME/type errors when navigating to nested routes on Vercel.
  base: "/",
});