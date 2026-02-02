/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  distDir: '../public',
  env: {
    name: 'Kasm TEST HALLO',
    description: 'SAD LIFE ISNT IT!?',
    icon: 'https://imgs.search.brave.com/vmeWPKb_NmVnSw-x5DpsgqRnqMO8dUBLJq6yNW8opi8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvZGlz/YXBwb2ludGVkLXBl/cGUtbWVtZS1wZnAt/NHBuMHg0dnlwaDZ4/MnlxNS5qcGc',
    listUrl: 'https://RuffyJK.github.io/kasm-registry/',
    contactUrl: 'https://github.com/RuffyJK/kasm-registry/issues',
  },
  reactStrictMode: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
