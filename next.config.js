/** @type {import('next').NextConfig} */
const nextConfig = {
  // Keep the review build separate from the existing development cache.
  distDir: process.env.KRASPRO_PREVIEW === "1" ? "preview-build" : ".next",
  async redirects() {
    return [
      { source: "/services/decks-siding-fence", destination: "/services/deck-building", permanent: true },
      { source: "/services/exterior-painting", destination: "/services/exterior-painting-carpentry", permanent: true },
      { source: "/services/door-and-window-installation", destination: "/services/window-door-renewal", permanent: true },
      { source: "/services/historic-building-restoration", destination: "/services/house-restoration", permanent: true },
      { source: "/services/roofing-gutters-shutters", destination: "/services", permanent: true },
      { source: "/services/garage-additions", destination: "/services", permanent: true },
    ];
  },
};

module.exports = nextConfig;
