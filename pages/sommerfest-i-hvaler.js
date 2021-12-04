import { fetchContent } from "../components/1_Small/contentfulFetch";
import { CategoryPageTemplate } from "../components/2_Big/CategoryPageTemplate";
import { SommerfestIHvaler } from "../components/3_Pages/SommerfestIHvaler";

export default function overnatting({ content }) {
  return <SommerfestIHvaler content={content} />;
}

export async function getStaticProps() {
  const response = await fetchContent(`
  {
    sommerfestIHvaler (id: "4wpqLFkpL5fI3m3P4zvhQm"){
     seoHeading
      hovedtittel
      brdtekstTittel
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
      festivaldag1
      festivaldag1Info
      festivaldag1Tidspunkt
      bildegalleriSommerfestIHvalerCollection{
        items{
          url
          description
          width
          height
        }
      }
      
    }
  }
      `);
  return {
    props: {
      content: response.sommerfestIHvaler,
    },
    revalidate: 60,
  };
}
