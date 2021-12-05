import { fetchContent } from "../components/1_Small/contentfulFetch";
import { CategoryPageTemplate } from "../components/2_Big/CategoryPageTemplate";

export default function matOgVin({ content, meny }) {
  console.log(meny);
  return <CategoryPageTemplate content={content} meny={meny} />;
}

export async function getStaticProps() {
  const id = "3DSTVbWZw3NSCfA4VLIAH";
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
  meny(id:"3tLllTAAZf366UvWreBzJy"){
    pris3RettersMat
    pris5RettersMat
    pris3RettersVinmeny
    pris5RettersVinmeny
  }
}
      `);
  return {
    props: {
      content: response.hero,
      meny: response.meny,
    },
    revalidate: 60,
  };
}
