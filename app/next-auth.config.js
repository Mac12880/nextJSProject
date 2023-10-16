import NextAuth from "next-auth";
import Providers from "next-auth/providers";

const options = {
  // Configure one or more authentication providers
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    // Add more providers here
  ],

  // Add your own database adapter here (optional)
  // database: process.env.DATABASE_URL,
};

export default (req, res) => NextAuth(req, res, options);
