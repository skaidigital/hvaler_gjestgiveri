import { siteConfig } from "@/src/site-config";

export const BASE_URL = process.env.VERCEL_URL ? siteConfig.baseUrl : "/static";

export const EMAILS: Record<string, { EMAIL: string; FROM_ADDRESS: string }> = {
  HG: {
    EMAIL: "post@hvalergjestgiveri.no",
    FROM_ADDRESS: "Hvaler Gjestgiveri <post@hvalergjestgiveri.no>",
  },
  SKAI: {
    EMAIL: "hello@skaidigital.com",
    FROM_ADDRESS: "Skai-gutta <hello@skaidigital.com>",
  },
};
