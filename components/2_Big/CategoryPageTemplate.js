import { CategoryPageContentContainer } from "../1_Small/CategoryPageContentContainer";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Hero } from "../1_Small/Hero";
import { options } from "../1_Small/ContentfulOptions";
import { CategoryPageImageGallery } from "../1_Small/CategoryPageImageGallery";
import { Footer } from "./Navigation/Footer";
import { Navbar } from "./Navigation/Navbar";
import { CategoryPageQuote } from "../1_Small/CategoryPageQuote";
export const CategoryPageTemplate = ({ content }) => {
  return (
    <>
      <Navbar />
      <Hero
        imageSource={content.hovedbilde.url}
        imageAlt={content.hovedbilde.description}
        SEOHeading={content.seoTittel}
        heading={content.hovedtittel}
      >
        {content.brdtekst}
      </Hero>
      <CategoryPageContentContainer>
        {documentToReactComponents(content.innhold.json, options)}
      </CategoryPageContentContainer>
      <CategoryPageImageGallery
        heading={content.bildegalleritittel}
        src1={content.bildegalleriCollection.items[0].url}
        alt1={content.bildegalleriCollection.items[0].description}
        src2={content.bildegalleriCollection.items[1].url}
        alt2={content.bildegalleriCollection.items[1].description}
        width2={content.bildegalleriCollection.items[1].width}
        height2={content.bildegalleriCollection.items[1].height}
        src3={content.bildegalleriCollection.items[2].url}
        alt3={content.bildegalleriCollection.items[2].description}
        src4={content.bildegalleriCollection.items[3].url}
        alt4={content.bildegalleriCollection.items[3].description}
        width4={content.bildegalleriCollection.items[3].width}
        height4={content.bildegalleriCollection.items[3].height}
      />
      <CategoryPageQuote quote={content.sitatTekst} author={content.sitatnavn} />
      <Footer />
    </>
  );
};
