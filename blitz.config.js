const { sessionMiddleware, simpleRolesIsAuthorized } = require("blitz");

module.exports = {
  experimental: {
    reactMode: "legacy",
  },
  middleware: [
    sessionMiddleware({
      sessionExpiryMinutes: 60,
      isAuthorized: simpleRolesIsAuthorized,
    }),
  ],
};
