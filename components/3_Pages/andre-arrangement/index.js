import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Grid, Layout } from "../../1_Small/Base";
import { options, options_sommerfest, options_info_fane } from "../../1_Small/ContentfulOptions";
import { Hero } from "../../1_Small/Hero";
import { Footer } from "../../2_Big/Navigation/Footer";
import { Navbar } from "../../2_Big/Navigation/Navbar";
import { MapArrangement } from "./MapArrangement";
import { OmVertskapet } from "./OmVertskapet";
import { InfoBanner } from "../../1_Small/InfoBanner";

export const AndreArrangement = ({ arrangement, content, informasjonsfane }) => {
  return (
    <>
      <InfoBanner
        banner_message={documentToReactComponents(informasjonsfane && informasjonsfane.json, options_info_fane)}
      />
      <Navbar />
      <Hero
        SEOHeading={content.seoHeading}
        heading={content.hovedtittel}
        imageSource={content.tittelbilde.url}
        imageAlt={content.tittelbilde.description}
      >
        {documentToReactComponents(content.tittelbrdtekst.json, options_sommerfest)}
      </Hero>
      <Layout>
        <Grid c="">
          <MapArrangement arrangement={arrangement} />
        </Grid>
        <Grid c="gap-y-16 lg:gap-y-56">
          <OmVertskapet content={content.omVertskapetBrdtekst} image={content.omVertskapetBilde} />
          <div className="mb-56 md:mb-96 lg:mb-160" />
        </Grid>
      </Layout>
      <Footer />
    </>
  );
};
