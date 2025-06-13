export const siteConfig = {
  name: "Hvaler Gjestgiveri",
  quirkyName: "Hvaler Gjestgiveri",
  id: "hvalergjestgiveri",
  baseUrl:
    process.env.NODE_ENV === "production"
      ? // biome-ignore lint/nursery/noNestedTernary: <explanation>
        process.env.VERCEL_PROJECT_PRODUCTION_URL
        ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
        : "https://hvalergjestgiveri.no"
      : "https://husky-glad-currently.ngrok-free.app",
  currencyCode: "NOK",
  locale: "nb-NO",
} as const;
