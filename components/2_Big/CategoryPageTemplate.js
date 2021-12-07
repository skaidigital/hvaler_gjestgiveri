import { CategoryPageContentContainer } from "../1_Small/CategoryPageContentContainer";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Hero } from "../1_Small/Hero";
import { options } from "../1_Small/ContentfulOptions";
import { CategoryPageImageGallery } from "../1_Small/CategoryPageImageGallery";
import { Footer } from "./Navigation/Footer";
import { Navbar } from "./Navigation/Navbar";
import { CategoryPageQuote } from "../1_Small/CategoryPageQuote";
import { Menu } from "../1_Small/Menu";
export const CategoryPageTemplate = ({ content, meny }) => {
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
        {meny && (
          <Menu
            price_three_course_food={meny.pris3RettersMat}
            price_five_course_food={meny.pris5RettersMat}
            price_three_course_wine={meny.pris3RettersVinmeny}
            price_five_course_wine={meny.pris5RettersVinmeny}
          />
        )}
      </CategoryPageContentContainer>
      {content.bildegalleriCollection.items[0] && (
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
      )}
      {!content.bildegalleriCollection.items[0] && <div className="mt-24 md:mt-56 lg:mt-96" />}
      {content.sitatTekst && <CategoryPageQuote quote={content.sitatTekst} author={content.sitatnavn} />}
      <Footer />
    </>
  );
};
