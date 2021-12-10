import { Grid, Layout } from "../../1_Small/Base";
import { Footer } from "../../2_Big/Navigation/Footer";
import { Navbar } from "../../2_Big/Navigation/Navbar";
import { GoogleMapsEmbedded } from "../../features/GoogleMaps/GoogleMapsEmbedded";
import { Map } from "../../features/GoogleMaps/Map";
import { ContactForm } from "./ContactForm";
import { HeroContactPage } from "./HeroContactPage";
import { NextSeo } from "next-seo";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { options_info_fane } from "../../1_Small/ContentfulOptions";
import { InfoBanner } from "../../1_Small/InfoBanner";

export const KontaktOss = ({ content, informasjonsfane }) => {
  return (
    <>
      <NextSeo
        title="Kom i kontakt med Hvaler Gjestgiveri"
        // description={}
        openGraph={{
          title: "Kom i kontakt med Hvaler Gjestgiveri",
          // description: "",
          images: [
            {
              url: content.bildeKontaktside.url,
              width: content.bildeKontaktside.width,
              height: content.bildeKontaktside.height,
              alt: content.bildeKontaktside.description,
            },
          ],
        }}
      />
      <InfoBanner
        banner_message={documentToReactComponents(informasjonsfane && informasjonsfane.json, options_info_fane)}
      />
      <Navbar />
      <HeroContactPage content={content} />
      <Layout>
        <ContactForm />
        <GoogleMapsEmbedded c="h-400" />
      </Layout>
      <Footer />
    </>
  );
};
