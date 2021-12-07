import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { FourEightFive, Grid, Layout } from "../../1_Small/Base";
import { options } from "../../1_Small/ContentfulOptions";
import { ImageContentful } from "../../1_Small/ImageContentful";
import { NavbarSommerfest } from "../../2_Big/Navigation/NavbarSommerfest";
import Link from "next/link";

export const HeroSommerfest = ({
  hero_seo_heading,
  hero_heading,
  hero_body_text,
  hero_image_src,
  hero_image_alt,
  hero_image_width,
  hero_image_height,
}) => {
  return (
    <>
      <NavbarSommerfest />
      <section id="hero" className="bg-sommerfest_primary pt-24 pb-56 md:pb-96 lg:py-160 ">
        <Layout>
          <Grid>
            <FourEightFive c="lg:col-start-2 lg:pr-24 md:mb-32 lg:mb-0 mb-16 z-2">
              <h1 className="text-white text-body_medium tracking-widest font-medium">{hero_seo_heading}</h1>
              <h2 className="text-white text-h2 lg:text-h1 mb-8 lg:mb-16">{hero_heading}</h2>
              <p className="text-neutral_300 mb-16">{hero_body_text}</p>
              <Link href="" className="">
                <a className="text-white text-center bg-sommerfest_CTA font-semibold p-16 block">
                  Kjøp billetter til Sommerfest i Hvaler
                </a>
              </Link>
            </FourEightFive>
            <FourEightFive c="z-2 row-start-1 lg:row-start-auto mb-16 md:mb-24 lg:mb-0 grid justify-items-stretch">
              <ImageContentful
                src={hero_image_src}
                alt={hero_image_alt}
                width={hero_image_width}
                height={hero_image_height}
                layout="responsive"
                className="object-cover"
              />
            </FourEightFive>
          </Grid>
        </Layout>
      </section>
    </>
  );
};
