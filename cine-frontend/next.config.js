// Importa Flowbite como un plugin para Next.js
const withFlowbiteReact = require("flowbite-react/plugin/nextjs");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Agregar otros ajustes si es necesario
};

module.exports = withFlowbiteReact(nextConfig);
