import { KontaktOss } from "../components/3_Pages/kontakt-oss";
import { fetchContent } from "../components/1_Small/contentfulFetch";

export default function kontaktOss({ content, informasjonsfane }) {
  return <KontaktOss content={content} informasjonsfane={informasjonsfane} />;
}

export async function getStaticProps() {
  const response = await fetchContent(`
    {
      informasjonsfane (id:"3p4dvYzDmBwrhkSasDbvoq"){
        innhold{
          json
        }
      }
        kontaktside (id: "2pp5RyR53Jaj7HecGM7wrl"){
          bildeKontaktside{
            url
            description
          }
          kontaktsideInnhold{
            json
          }
        }
      }
        `);
  return {
    props: {
      content: response.kontaktside,
      informasjonsfane: response.informasjonsfane.innhold,
    },
    revalidate: 60,
  };
}
