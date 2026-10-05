import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  redirects() {
    return [{ source: "/projecten/cytara", destination: "/projecten/mend", permanent: true }, { source: "/projecten/lifted", destination: "/projecten/rise", permanent: true }, { source: "/projecten/agria", destination: "/projecten/grow", permanent: true }, { source: "/projecten/habitary", destination: "/projecten/hive", permanent: true }];
  },
};

export default nextConfig;
