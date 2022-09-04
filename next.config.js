/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,

	//Images
	images: {
		domains: ['image.tmdb.org'],
	},
};

module.exports = nextConfig;
