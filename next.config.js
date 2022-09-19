/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ['jsx', 'js', 'tsx'],
  i18n: {
    locales: ["pt-BR"],
    defaultLocale: "pt-BR",
  },
}

module.exports = nextConfig
