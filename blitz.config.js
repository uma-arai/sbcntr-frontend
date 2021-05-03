const { sessionMiddleware, simpleRolesIsAuthorized } = require("blitz")

module.exports = {
  experimental: {
    reactMode: "legacy",
  },
  middleware: [
    sessionMiddleware({
      sessionExpiryMinutes: 1234,
      isAuthorized: simpleRolesIsAuthorized,
    }),
  ],
}
