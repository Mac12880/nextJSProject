/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = nextConfig;

module.exports = {
  // Add the environment variables for your authentication providers
  env: {
    GOOGLE_CLIENT_ID:
      "51336201470-ii0slu8khth2mcqs0mnh2jf32gv2lf73.apps.googleusercontent.com",
    GOOGLE_CLIENT_SECRET: "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",
  },
};
