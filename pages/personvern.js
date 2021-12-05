import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { FourEightEight, Grid, Layout } from "../components/1_Small/Base";
import { fetchContent } from "../components/1_Small/contentfulFetch";
import { options } from "../components/1_Small/ContentfulOptions";
import { Footer } from "../components/2_Big/Navigation/Footer";
import { Navbar } from "../components/2_Big/Navigation/Navbar";
export default function personvern({ content }) {
  return (
    <>
      <Navbar />
      <Layout>
        <Grid>
          <FourEightEight c="lg:col-start-3 mt-24 lg:mt-32">
            {documentToReactComponents(content.innhold.json, options)}
          </FourEightEight>
        </Grid>
      </Layout>
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const response = await fetchContent(`
    {
        personvernserklring (id: "2mLEoOUFRyMkYKjmepxbcS"){
          innhold{
            json
          }
        }
      }
          `);
  return {
    props: {
      content: response.personvernserklring,
    },
    revalidate: 60,
  };
}
