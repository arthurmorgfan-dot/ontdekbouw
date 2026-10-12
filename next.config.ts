import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Resolve metadata in the initial head for every social crawler, including unknown bots.
  htmlLimitedBots: /.*/,
  redirects() {
    const legacy = [{ source: "/projecten/cytara", destination: "/projecten/mend", permanent: true }, { source: "/projecten/lifted", destination: "/projecten/rise", permanent: true }, { source: "/projecten/agria", destination: "/projecten/grow", permanent: true }, { source: "/projecten/habitary", destination: "/projecten/hive", permanent: true }];
    return [...legacy, ...legacy.map(item => ({ ...item, source: `/en${item.source}`, destination: `/en${item.destination}` }))];
  },
};

export default nextConfig;
