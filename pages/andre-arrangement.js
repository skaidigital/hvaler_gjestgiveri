import { AndreArrangement } from "../components/3_Pages/andre-arrangement";
import { fetchContent } from "../components/1_Small/contentfulFetch";

export default function andreArrangement({ content, arrangement, informasjonsfane }) {
  return <AndreArrangement content={content} arrangement={arrangement} informasjonsfane={informasjonsfane} />;
}

export async function getStaticProps() {
  const response = await fetchContent(`
    {
      informasjonsfane (id:"3p4dvYzDmBwrhkSasDbvoq"){
        innhold{
          json
        }
      }
        andreArrangement (id: "1t9DOK1tAVb4gtgVK1eRKO"){
            seoHeading
            hovedtittel
            tittelbrdtekst{
              json
            }
            tittelbilde{
              url
              description
            }
            omVertskapetBilde{
              url
              description
            }
            omVertskapetBrdtekst{
              json
            }
          }
        enkeltarrangementAndreArrangementCollection{
          items{
            bilde{
              url
              description
              width
              height
            }
            tittel
            innhold{
              json
            }
          }
        }
      }
            `);
  return {
    props: {
      content: response.andreArrangement,
      arrangement: response.enkeltarrangementAndreArrangementCollection,
      informasjonsfane: response.informasjonsfane.innhold,
    },
    revalidate: 60,
  };
}
