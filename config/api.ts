export default {
  responses: {
    privateAttributes: ["createdAt", "updatedAt", "publishedAt", "locale"],
  },
  rest: {
    defaultLimit: 25,
    maxLimit: 100,
    withCount: true,
  },
};
