import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Grid, Layout } from "../../1_Small/Base";
import { options, options_sommerfest } from "../../1_Small/ContentfulOptions";
import { Hero } from "../../1_Small/Hero";
import { Footer } from "../../2_Big/Navigation/Footer";
import { Navbar } from "../../2_Big/Navigation/Navbar";
import { MapArrangement } from "./MapArrangement";
import { OmVertskapet } from "./OmVertskapet";

export const AndreArrangement = ({ arrangement, content }) => {
  return (
    <>
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
        <Grid c="gap-y-16 lg:gap-y-56">
          <MapArrangement arrangement={arrangement} />
          <OmVertskapet content={content.omVertskapetBrdtekst} image={content.omVertskapetBilde} />
          <div className="mb-56 md:mb-96 lg:mb-160" />
        </Grid>
      </Layout>
      <Footer />
    </>
  );
};
