import type { NextConfig } from "next";
import { locales } from "@/i18n/config";

const localePattern = locales.join("|");

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/en",
        permanent: false,
      },
      {
        source: `/:path((?!${localePattern})(?!_next)(?!api)(?!robots\\.txt)(?!sitemap\\.xml)(?!favicon\\.ico)[^/]+)/:subpath*`,
        destination: "/en/:path/:subpath*",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
