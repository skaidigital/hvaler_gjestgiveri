import { Grid, Layout } from "../../1_Small/Base";
import { Footer } from "../../2_Big/Navigation/Footer";
import { Navbar } from "../../2_Big/Navigation/Navbar";
import { GoogleMapsEmbedded } from "../../features/GoogleMaps/GoogleMapsEmbedded";
import { Map } from "../../features/GoogleMaps/Map";
import { ContactForm } from "./ContactForm";
import { HeroContactPage } from "./HeroContactPage";
import { NextSeo } from "next-seo";

export const KontaktOss = ({ content }) => {
  console.log(content);
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
