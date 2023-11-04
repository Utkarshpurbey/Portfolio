/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'
const nextConfig = {
  basePath: isProd ?'/Portfolio':'',
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
