import { KontaktOss } from "../components/3_Pages/kontakt-oss";
import { fetchContent } from "../components/1_Small/contentfulFetch";

export default function kontaktOss({ content }) {
  console.log(content);
  return <KontaktOss content={content} />;
}

export async function getStaticProps() {
  const response = await fetchContent(`
    {
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
    },
    revalidate: 60,
  };
}
