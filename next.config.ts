import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntlConfig = createNextIntlPlugin();

const nextConfig: NextConfig = {
  /* config options here */
  trailingSlash: true,
};

export default withNextIntlConfig(nextConfig);
