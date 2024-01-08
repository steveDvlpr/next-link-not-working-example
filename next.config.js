/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites: () => ({
    afterFiles: [{ source: "/:slug", destination: "/article/:slug" }],
  }),
};

module.exports = nextConfig;
