const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: isProd ? "/elbeheiry-portfolio" : "",
  assetPrefix: isProd ? "/elbeheiry-portfolio" : "",
};
export default nextConfig;
