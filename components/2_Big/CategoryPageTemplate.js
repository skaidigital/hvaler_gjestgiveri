import { CategoryPageContentContainer } from "../1_Small/CategoryPageContentContainer";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Hero } from "../1_Small/Hero";
import { options, options_info_fane } from "../1_Small/ContentfulOptions";
import { CategoryPageImageGallery } from "../1_Small/CategoryPageImageGallery";
import { Footer } from "./Navigation/Footer";
import { Navbar } from "./Navigation/Navbar";
import { CategoryPageQuote } from "../1_Small/CategoryPageQuote";
import { Menu } from "../1_Small/Menu";
import { NextSeo } from "next-seo";
import { InfoBanner } from "../1_Small/InfoBanner";
export const CategoryPageTemplate = ({ content, meny, informasjonsfane }) => {
  console.log(informasjonsfane);
  return (
    <>
      <NextSeo
        title={content.hovedtittel}
        // description={}
        openGraph={{
          title: content.hovedtittel,
          // description: "",
          images: [
            {
              url: content.hovedbilde.url,
              width: content.hovedbilde.width,
              height: content.hovedbilde.height,
              alt: content.hovedbilde.description,
            },
          ],
        }}
      />
      <InfoBanner
        banner_message={documentToReactComponents(informasjonsfane && informasjonsfane.json, options_info_fane)}
      />

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
