import { fetchContent } from "../components/1_Small/contentfulFetch";
import { CategoryPageTemplate } from "../components/2_Big/CategoryPageTemplate";
import { SommerfestIHvaler } from "../components/3_Pages/SommerfestIHvaler";

export default function overnatting({ content, dates }) {
  return <SommerfestIHvaler content={content} dates={dates} />;
}

export async function getStaticProps() {
  const response = await fetchContent(`
  {

    sommerfestIHvaler (id: "4wpqLFkpL5fI3m3P4zvhQm"){
     seoHeading
      hovedtittel
      brdtekstTittel
      ticketmasterLink
      tittelbilde{
        url
        description
        width
        height
      }
      tittelKonsertpakke
      konsertpakkeInnhold{
        json
      }
      bildeKonsertpakke{
        url
        description
        width
        height
      }
      tittelArtister
      artisterInnhold{
        json
      }
      bilderUtvalgteArtisterCollection{
        items{
          url
          description
          width
          height
        }
      }
      navnUtvalgteArtister
      bildegalleriSommerfestIHvalerCollection{
        items{
          url
          description
          width
          height
        }
      }
    }
    festivaldatoCollection{
      items{
        dato
        tidspunkt1
        tidspunkt2
        tidspunkt3
        hvor1
        hvor2
        hvor3
        artister1
        artister2
        artister3
      }
    }
  }

      `);
  return {
    props: {
      content: response.sommerfestIHvaler,
      dates: response.festivaldatoCollection.items,
    },
    revalidate: 60,
  };
}
