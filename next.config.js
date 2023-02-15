/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "company-logo-frankfurt.rabota.ua",
        port: "",
      },
    ],
  },
  env: {
    REACT_APP_MAPBOX_ACCESS_TOKEN: process.env.REACT_APP_MAPBOX_ACCESS_TOKEN,
    VACANCIES_ON_PAGE_AMOUNT: process.env.VACANCIES_ON_PAGE_AMOUNT,
    LIMIT_FETCHING_REQUEST_IN_ONE_TIME:
      process.env.LIMIT_FETCHING_REQUEST_IN_ONE_TIME,
    FETCHING_VACANCIES_DAYS: process.env.FETCHING_VACANCIES_DAYS,
    DEFAULT_PORT: process.env.DEFAULT_PORT,
  },
};

module.exports = nextConfig;
