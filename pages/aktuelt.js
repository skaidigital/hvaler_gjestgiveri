import { InfoBanner } from "../components/1_Small/InfoBanner";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { NextSeo } from "next-seo";
import { Navbar } from "../components/2_Big/Navigation/Navbar";
import { Footer } from "../components/2_Big/Navigation/Footer";
import { Hero } from "../components/1_Small/Hero";
import {
  FourEightEight,
  FourEightSix,
  Grid,
  Layout,
  Section160,
} from "../components/1_Small/Base";
import { useRouter } from "next/router";
import { fetchContent } from "../components/1_Small/contentfulFetch";
import {
  options,
  options_info_fane,
} from "../components/1_Small/ContentfulOptions";
import React from "react";
import { ImageContentful } from "../components/1_Small/ImageContentful";
import { formatDate } from "../components/1_Small/formatDate";

export default function aktuelt({ content, informasjonsfane, aktuelt }) {
  const image_loader = ({ src, width }) => {
    return `https://images.ctfassets.net/snep566vvl34/${src}?w=${width}`;
  };
  const mapAktuelt = aktuelt.map((innhold) => {
    const date = `${formatDate(innhold.dato)} ${innhold.dato.slice(0, 4)}`;
    return (
      <Grid key={innhold.sys.id}>
        <FourEightSix c="lg:pr-24 mb-96 lg:mt-32 mb-80 row-start-2 lg:row-start-1">
          <div className="flex justify-between flex-col h-100">
            <div>
              <h2 className="text-h2">{innhold.nyhetstittel}</h2>
              {documentToReactComponents(innhold.innhold.json)}
            </div>
            <div className="text-p">{date}</div>
          </div>
        </FourEightSix>
        <FourEightSix className="grid justify-items-stretch relative row-start-1">
          <div className="relative h-240 md:h-400 lg:h-400 w-100 mb-20 lg:mb-80">
            <ImageContentful
              loader={image_loader}
              src={`${innhold.nyhetsbilde.url}`}
              alt={innhold.nyhetsbilde.description}
              // width={innhold.nyhetsbilde.width}
              // height={innhold.nyhetsbilde.height}
              layout="fill"
              className="object-cover"
            />
          </div>
        </FourEightSix>
      </Grid>
    );
  });
  return (
    <>
      <NextSeo
        title={content.hovedtittel}
        // description={}
        openGraph={{
          title: content.hovedtittel,
          // description: "",
          images: [
            {
              url: content.tittelbilde.url,
              width: content.tittelbilde.width,
              height: content.tittelbilde.height,
              alt: content.tittelbilde.description,
            },
          ],
        }}
      />
      <InfoBanner
        banner_message={documentToReactComponents(
          informasjonsfane && informasjonsfane.json,
          options_info_fane
        )}
      />
      <Navbar />
      <Hero
        SEOHeading={content.seoHeading}
        heading={content.hovedtittel}
        imageSource={content.tittelbilde.url}
        imageAlt={content.tittelbilde.description}
        loader={image_loader}
      >
        {content.tittelbrdtekst}
      </Hero>
      <Layout>
        <Section160>{mapAktuelt}</Section160>
      </Layout>
      <Footer />
    </>
  );
}

function RedirectPage() {
  const router = useRouter();
  if (typeof window !== "undefined") {
    router.push("/404");
  }
}

export async function getStaticProps() {
  const response = await fetchContent(`
    {
      informasjonsfane (id:"3p4dvYzDmBwrhkSasDbvoq"){
        innhold{
          json
        }
      }
      aktueltNyhetCollection{
        items {
            sys{
                id
              }
          nyhetstittel
          innhold {
            json
          }
          nyhetsbilde {
            url
            height
            width
            description
          }
          dato
        }
      }
      aktueltUndersideCollection{
        items{
          seoHeading
          hovedtittel
          tittelbrdtekst
          tittelbilde {
            url
            width
            height
            description
          }
        }
      }
      contactInfoCollection{
        items{
          epost
          telefonnummer
          adresse
        }
      }
    }
      `);
  return {
    props: {
      content: response.aktueltUndersideCollection.items[0],
      nap: response.contactInfoCollection.items[0],
      informasjonsfane: response.informasjonsfane.innhold,
      aktuelt: response.aktueltNyhetCollection.items,
    },
    revalidate: 60,
  };
}
