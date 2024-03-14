/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
    appDir: true,
    esmExternals: "loose",
    serverComponentsExternalPackages: ["mongoose"]
  },
	webpack: (config) => {
    config.resolve.fallback = {
      "mongodb-client-encryption": false ,
      "aws4": false
    },
		config.experiments = {
      topLevelAwait: true,
      layers: true,
    };

    return config;
}
}

export default nextConfig;
