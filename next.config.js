/** @type {import('next').NextConfig} */
const nextConfig = {
  output:'export',
  distDir:'dist',
  images:{
    unoptimized:true
  },
  webpack: (config) => {
    config.resolve.alias.canvas = false;
    return config;
  },
};

module.exports = nextConfig;
