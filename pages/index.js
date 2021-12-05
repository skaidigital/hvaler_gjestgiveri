import { NextSeo, SocialProfileJsonLd } from "next-seo";
import { FourEightSix, FourEightTwelve, FourFourThree, Grid, Layout } from "../components/1_Small/Base";
import { PrimaryButton, PrimaryButtonHref, SecondaryButton, SecondaryButtonHref } from "../components/1_Small/Buttons";
import { Footer } from "../components/2_Big/Navigation/Footer";
import { Navbar } from "../components/2_Big/Navigation/Navbar";
import Image from "next/image";
import { useRouter } from "next/dist/client/router";
import { fetchContent } from "../components/1_Small/contentfulFetch";
import { HorizontalCardCTA } from "../components/1_Small/HorizontalCardCTA";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { options } from "../components/1_Small/ContentfulOptions";
import { Hero } from "../components/1_Small/Hero";
import { SocialProofBanner } from "../components/1_Small/SocialProofBanner";
import { InfoNAPSection } from "../components/1_Small/InfoNAPSection";
import { InfoBanner } from "../components/1_Small/InfoBanner";
import { ImageContentful } from "../components/1_Small/ImageContentful";

export default function Home({ content, nap }) {
  !content && RedirectPage();
  console.log(content);
  console.log(nap);

  const image_loader = ({ src, width }) => {
    return `https://images.ctfassets.net/snep566vvl34/${src}?w=${width}`;
  };

  return (
    <>
      <NextSeo
        title=""
        description=""
        openGraph={{
          title: "",
          description: "",
          images: [
            {
              url: "",
              width: "",
              height: "",
              alt: "",
            },
          ],
        }}
        twitter={{
          handle: "@skai_digital",
          site: "@skaidigital",
          cardType: "summary_large_image",
        }}
      />
      <InfoBanner banner_message="Dette er en melding vi vil at folk skal se" />
      <Navbar />
      <Hero
        SEOHeading={content.seoTittel}
        heading={content.hovedtittel}
        imageSource={content.bildeMat.url}
        imageAlt="alt"
        loader={image_loader}
      />
      <SocialProofBanner />
      <Layout>
        <Grid c="gap-y-56 md:gap-y-96 lg:gap-y-160">
          <FourEightSix c="pr-24">
            <HorizontalCardCTA SEOHeading={content.seoTittelMat} heading={content.tittelMat}>
              {documentToReactComponents(content.brdtekstMat.json, options)}
              <PrimaryButtonHref href="mat-og-vin" text="Les mer om restauranten" />
            </HorizontalCardCTA>
          </FourEightSix>
          <FourEightSix c="grid justify-items-stretch relative">
            <ImageContentful
              loader={image_loader}
              src={`${content.bildeMat.url}`}
              alt={content.bildeMat.description}
              layout="fill"
              className="object-cover"
            />
          </FourEightSix>

          <FourEightSix c="grid justify-items-stretch relative">
            <ImageContentful
              loader={image_loader}
              src={`${content.bildeMat.url}`}
              alt={content.bildeMat.description}
              layout="fill"
              className="object-cover"
            />
          </FourEightSix>
          <FourEightSix c="lg:col-start-7 lg:pl-24">
            <HorizontalCardCTA SEOHeading={content.seoTittelOvernatting} heading={content.tittelOvernatting}>
              {documentToReactComponents(content.innholdOvernatting.json, options)}
              <PrimaryButtonHref href="overnatting" text="Se overnattingsmulighetene på Hvaler Gjestgiveri" />
            </HorizontalCardCTA>
          </FourEightSix>

          <FourEightSix c="pr-24">
            <HorizontalCardCTA SEOHeading={content.seoTittelBryllup} heading={content.tittelBryllup}>
              {documentToReactComponents(content.innholdBryllup.json, options)}
              <PrimaryButtonHref href="bryllup" text="Les om muligheter for bryllup på Hvaler" />
            </HorizontalCardCTA>
          </FourEightSix>
          <FourEightSix c="grid justify-items-stretch relative">
            <ImageContentful
              loader={image_loader}
              src={`${content.bildeMat.url}`}
              alt={content.bildeMat.description}
              layout="fill"
              className="object-cover"
            />
          </FourEightSix>

          <FourEightSix c="grid justify-items-stretch relative">
            <ImageContentful
              loader={image_loader}
              src={`${content.bildeMat.url}`}
              alt={content.bildeMat.description}
              layout="fill"
              className="object-cover"
            />
          </FourEightSix>
          <FourEightSix c="lg:col-start-7 lg:pl-24">
            <HorizontalCardCTA SEOHeading={content.seoKursOgKonferanser} heading={content.tittelKursOgKonferanser}>
              {documentToReactComponents(content.innholdKursOgKonferanser.json, options)}
              <PrimaryButtonHref href="kurs-og-konferanser" text="Kurs- og konferansemuligheter" />
            </HorizontalCardCTA>
          </FourEightSix>

          <FourEightSix c="pr-24">
            <HorizontalCardCTA SEOHeading={content.seoSelskap} heading={content.tittelSelskap}>
              {documentToReactComponents(content.innholdSelskap.json, options)}
              <PrimaryButtonHref href="selskap" text="Les om selskap på Hvaler Gjestgiveri" />
            </HorizontalCardCTA>
          </FourEightSix>
          <FourEightSix c="grid justify-items-stretch relative">
            <ImageContentful
              loader={image_loader}
              src={`${content.bildeMat.url}`}
              alt={content.bildeMat.description}
              layout="fill"
              className="object-cover"
            />
          </FourEightSix>
          <InfoNAPSection email={nap.epost} phone_number={nap.telefonnummer} adress={nap.adresse} />
        </Grid>
      </Layout>
      <Footer />
    </>
  );
}

//
// Redirect til 404-page hvis siden ikke greier å loade
//
function RedirectPage() {
  const router = useRouter();
  if (typeof window !== "undefined") {
    router.push("/404");
  }
}

export async function getStaticProps() {
  const response = await fetchContent(`
  {
    forsideCollection{
      items{
        hovedtittel
        seoTittel
        seoTittelMat
        seoTittelBryllup
        seoTittelSelskap
        seoTittelOvernatting
        seoTittelKursOgKonferanser
        tittelMat
        tittelBryllup
        tittelSelskap
        tittelOvernatting
        tittelArrangement
        tittelKursOgKonferanser
        brdtekstMat{
          json
        }
        innholdBryllup{
          json
        }
        innholdSelskap{
          json
        }
        innholdOvernatting{
          json
        }
        innholdKursOgKonferanser{
          json
        }
        bildeMat {
          title
          description
          contentType
          fileName
          size
          url
          width
          height
        }
        bildeBryllup {
          title
          description
          contentType
          fileName
          size
          url
          width
          height
        }
        bildeSelskap {
          title
          description
          contentType
          fileName
          size
          url
          width
          height
        }
        bildeOvernatting {
          title
          description
          contentType
          fileName
          size
          url
          width
          height
        }
        bildeKursOgKonferanser{
          title
          description
          contentType
          fileName
          size
          url
          width
          height
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
      content: response.forsideCollection.items[0],
      nap: response.contactInfoCollection.items[0],
    },
    revalidate: 60,
  };
}
