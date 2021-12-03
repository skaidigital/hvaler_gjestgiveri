import { fetchContent } from "../components/1_Small/contentfulFetch";
import { Hero } from "../components/1_Small/Hero";
export default function bryllup({ content }) {
  console.log(content);
  return (
    <div>
      <Hero
        imageSource={content.hovedbilde.url}
        imageAlt={content.hovedbilde.description}
        SEOHeading={content.seoHeading}
        heading={content.hovedtittel}
      >
        {content.brdtekst}
      </Hero>
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
        }
        innhold{
            json
        }
        bildegalleritittel
        bildegalleriCollection{
            items{
                url
                description
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
