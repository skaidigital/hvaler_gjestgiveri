import { CategoryPageContentContainer } from "../components/1_Small/CategoryPageContentContainer";
import { fetchContent } from "../components/1_Small/contentfulFetch";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Hero } from "../components/1_Small/Hero";
import { options } from "../components/1_Small/ContentfulOptions";
import { CategoryPageImageGallery } from "../components/1_Small/CategoryPageImageGallery";
import { Footer } from "../components/2_Big/Navigation/Footer";
import { Navbar } from "../components/2_Big/Navigation/Navbar";
import { CategoryPageQuote } from "../components/1_Small/CategoryPageQuote";

export default function bryllup({ content }) {
  console.log(content);
  console.log(content.bildegalleriCollection.items[0]);
  return (
    <div>
      <Navbar />
      <Hero
        imageSource={content.hovedbilde.url}
        imageAlt={content.hovedbilde.description}
        SEOHeading={content.seoHeading}
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
    </div>
  );
}

export async function getStaticProps() {
  const response = await fetchContent(`
  {
    hero(id: "cGCui0u5BZM8jpR3TIAv1"){
        seoTittel
        hovedtittel
        brdtekst
        hovedbilde{
            url
            description
            width
            height
        }
        innhold{
            json
        }
        bildegalleritittel
        bildegalleriCollection{
            items{
                url
                description
                width
                height
            }
        }
        sitatTekst
        sitatnavn
  }
}
      `);
  return {
    props: {
      content: response.hero,
    },
    revalidate: 60,
  };
}
