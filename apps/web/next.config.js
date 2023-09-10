/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async () => {
    return [
      {
        source: "/github",
        destination: "https://github.com/sergeysova/editor",
        permanent: true,
      },
      {
        source: "/npm",
        destination: "https://www.npmjs.com/package/@sergeysova/editor",
        permanent: true,
      },
      {
        source: "/feedback",
        destination: "https://github.com/sergeysova/editor/issues",
        permanent: true,
      },
    ];
  },
  productionBrowserSourceMaps: true,
};

module.exports = nextConfig;
