/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        // for compatibility with SoME4 link
        source: '/daniel/maths/mobius-maps', 
        destination: '/maths/mobius-maps',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
