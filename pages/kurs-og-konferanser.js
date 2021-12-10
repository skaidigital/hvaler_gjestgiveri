import { fetchContent } from "../components/1_Small/contentfulFetch";
import { CategoryPageTemplate } from "../components/2_Big/CategoryPageTemplate";

export default function kursOgKonferanser({ content, informasjonsfane }) {
  return <CategoryPageTemplate content={content} informasjonsfane={informasjonsfane} />;
}

export async function getStaticProps() {
  const id = "4M5fOoPZ20jbya7UqNKmzh";
  const response = await fetchContent(`
  {
    informasjonsfane (id:"3p4dvYzDmBwrhkSasDbvoq"){
      innhold{
        json
      }
    }
    hero(id: "${id}"){
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
      informasjonsfane: response.informasjonsfane.innhold,
    },

    revalidate: 60,
  };
}
