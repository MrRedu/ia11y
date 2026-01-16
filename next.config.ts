import { withIntlayer } from 'next-intlayer/server'; // Add the plugin to the Next.js configuration
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/', // The incoming request path
        destination: '/en', // The path you want to route to
        permanent: true, // Use 308 permanent redirect
      },
    ];
  },
};

export default withIntlayer(nextConfig);
