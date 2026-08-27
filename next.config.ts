import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The site has no server behind it — every page is prerendered to a file,
  // so it can be served by any static host.
  output: "export",
  // Emit every route as <route>/index.html so extensionless URLs work on
  // any static host — Vercel, Netlify, GitHub Pages, S3 — without rewrites.
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
