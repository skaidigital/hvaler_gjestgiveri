import { NextSeo, SocialProfileJsonLd } from "next-seo";
import {
  FourEightSix,
  FourEightTwelve,
  FourFourThree,
  Grid,
  Layout,
} from "../components/1_Small/Base";
import {
  PrimaryButton,
  PrimaryButtonHref,
  SecondaryButton,
  SecondaryButtonHref,
} from "../components/1_Small/Buttons";
import { Footer } from "../components/2_Big/Navigation/Footer";
import { Navbar } from "../components/2_Big/Navigation/Navbar";
import Image from "next/image";
import { useRouter } from "next/dist/client/router";
import { fetchContent } from "../components/1_Small/contentfulFetch";
import { HorizontalCardCTA } from "../components/1_Small/HorizontalCardCTA";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import {
  options,
  options_info_fane,
} from "../components/1_Small/ContentfulOptions";
import { Hero } from "../components/1_Small/Hero";
import { SocialProofBanner } from "../components/1_Small/SocialProofBanner";
import { InfoNAPSection } from "../components/1_Small/InfoNAPSection";
import { InfoBanner } from "../components/1_Small/InfoBanner";
import { ImageContentful } from "../components/1_Small/ImageContentful";
import { HeroWSideImage } from "../components/1_Small/HeroWSideImage";

export default function Home({ content, nap, informasjonsfane }) {
  console.log(content);
  console.log(nap);
  console.log(informasjonsfane);
  !content && RedirectPage();

  const image_loader = ({ src, width }) => {
    return `https://images.ctfassets.net/snep566vvl34/${src}?w=${width}`;
  };

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
              url: content.hovedbilde.url,
              width: content.hovedbilde.width,
              height: content.hovedbilde.height,
              alt: content.hovedbilde.description,
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
      <HeroWSideImage
        SEOHeading={content.seoTittel}
        heading={content.hovedtittel}
        imageSource={content.hovedbilde.url}
        imageAlt={content.hovedbilde.description}
        loader={image_loader}
      />
      <SocialProofBanner />
      <Layout>
        <Grid c="lg:gap-y-160">
          <FourEightSix c="lg:pr-24 mb-96 mt-32 lg:my-0">
            <HorizontalCardCTA
              SEOHeading={content.seoTittelMat}
              heading={content.tittelMat}
            >
              {documentToReactComponents(content.brdtekstMat.json, options)}
              <PrimaryButtonHref
                href="mat-og-vin"
                text="Les mer om restauranten"
              />
            </HorizontalCardCTA>
          </FourEightSix>
          <FourEightSix c="grid justify-items-stretch relative h-240 md:h-400 lg:h-auto row-start-1 lg:row-start-auto">
            <ImageContentful
              loader={image_loader}
              src={`${content.bildeMat.url}`}
              alt={content.bildeMat.description}
              layout="fill"
              className="object-cover"
            />
          </FourEightSix>

          <FourEightSix c="grid justify-items-stretch relative h-240 md:h-400 lg:h-auto ">
            <ImageContentful
              loader={image_loader}
              src={`${content.bildeOvernatting.url}`}
              alt={content.bildeOvernatting.description}
              layout="fill"
              className="object-cover"
            />
          </FourEightSix>
          <FourEightSix c="lg:col-start-7 lg:pl-24 mb-96 mt-32 lg:my-0">
            <HorizontalCardCTA
              SEOHeading={content.seoTittelOvernatting}
              heading={content.tittelOvernatting}
            >
              {documentToReactComponents(
                content.innholdOvernatting.json,
                options
              )}
              <PrimaryButtonHref
                href="overnatting"
                text="Se overnattingsmulighetene på Hvaler Gjestgiveri"
              />
            </HorizontalCardCTA>
          </FourEightSix>

          <FourEightSix c="lg:pr-24 mb-96 mt-32 lg:my-0">
            <HorizontalCardCTA
              SEOHeading={content.seoTittelBryllup}
              heading={content.tittelBryllup}
            >
              {documentToReactComponents(content.innholdBryllup.json, options)}
              <PrimaryButtonHref
                href="bryllup"
                text="Les om muligheter for bryllup på Hvaler"
              />
            </HorizontalCardCTA>
          </FourEightSix>
          <FourEightSix c="grid justify-items-stretch relative h-240 md:h-400 lg:h-auto row-start-5 lg:row-start-auto">
            <ImageContentful
              loader={image_loader}
              src={`${content.bildeBryllup.url}`}
              alt={content.bildeBryllup.description}
              layout="fill"
              className="object-cover"
            />
          </FourEightSix>

          <FourEightSix c="grid justify-items-stretch relative h-240 md:h-400 lg:h-auto ">
            <ImageContentful
              loader={image_loader}
              src={`${content.bildeKursOgKonferanser.url}`}
              alt={content.bildeKursOgKonferanser.description}
              layout="fill"
              className="object-cover"
            />
          </FourEightSix>
          <FourEightSix c="lg:col-start-7 lg:pl-24 mb-96 mt-32 lg:my-0">
            <HorizontalCardCTA
              SEOHeading={content.seoKursOgKonferanser}
              heading={content.tittelKursOgKonferanser}
            >
              {documentToReactComponents(
                content.innholdKursOgKonferanser.json,
                options
              )}
              <PrimaryButtonHref
                href="kurs-og-konferanser"
                text="Kurs- og konferansemuligheter"
              />
            </HorizontalCardCTA>
          </FourEightSix>
        </Grid>
        <div className="lg:mb-160" />
        <Grid c="lg:gap-y-160">
          <FourEightSix c="lg:pr-24 row-start-2 lg:row-start-auto mb-96 mt-32 lg:my-0">
            <HorizontalCardCTA
              SEOHeading={content.seoSelskap}
              heading={content.tittelSelskap}
            >
              {documentToReactComponents(content.innholdSelskap.json, options)}
              <PrimaryButtonHref
                href="selskap"
                text="Les om selskap på Hvaler Gjestgiveri"
              />
            </HorizontalCardCTA>
          </FourEightSix>
          <FourEightSix c="grid justify-items-stretch relative h-240 md:h-400 lg:h-auto">
            <ImageContentful
              loader={image_loader}
              src={`${content.bildeSelskap.url}`}
              alt={content.bildeSelskap.description}
              layout="fill"
              className="object-cover"
            />
          </FourEightSix>
          <InfoNAPSection
            email={nap.epost}
            phone_number={nap.telefonnummer}
            adress={nap.adresse}
          />
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
    informasjonsfane (id:"3p4dvYzDmBwrhkSasDbvoq"){
      innhold{
        json
      }
    }
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
        hovedbilde{
          description
          url
          width
          height
        }
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
      informasjonsfane: response.informasjonsfane.innhold,
    },
    revalidate: 60,
  };
}
