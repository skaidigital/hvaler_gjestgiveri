import { fetchContent } from "../components/1_Small/contentfulFetch";
import { CategoryPageTemplate } from "../components/2_Big/CategoryPageTemplate";

export default function kursOgKonferanser({ content }) {
  return <CategoryPageTemplate content={content} />;
}

export async function getStaticProps() {
  const id = "4M5fOoPZ20jbya7UqNKmzh";
  const response = await fetchContent(`
  {
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
    },
    revalidate: 60,
  };
}
