import React from "react";

const Sitemap = () => {};

export const getServerSideProps = async ({ res }) => {
  const baseUrl = {
    development: "http://localhost:3000",
    production: "https://www.hvalergjestgiveri.no",
  }[process.env.NODE_ENV];

  const staticUrls = [
    "aktuelt",
    "andre-arrangement",
    "bryllup",
    "index",
    "kontakt-oss",
    "kurs-og-konferanser",
    "mat-og-vin",
    "overnatting",
    "selskap",
    "sommerfest-i-hvaler",
  ];

  const staticPages = staticUrls.map((staticPagePath) => {
    return `${baseUrl}/${staticPagePath}`;
  });

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${staticPages
        .map((url) => {
          return `
            <url>
              <loc>${url}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>monthly</changefreq>
              <priority>1.0</priority>
            </url>
          `;
        })
        .join("")}
    </urlset>
  `;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;
