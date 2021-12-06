import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { FourEightFive, Grid, Layout } from "../../1_Small/Base";
import { options } from "../../1_Small/ContentfulOptions";
import { ImageContentful } from "../../1_Small/ImageContentful";
import { NavbarSommerfest } from "../../2_Big/Navigation/NavbarSommerfest";

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
      <section id="hero" className="bg-sommerfest_primary  py-56 md:py-96 lg:py-160 ">
        <Layout>
          <Grid>
            <FourEightFive c="lg:col-start-2 lg:pr-24 md:mb-32 lg:mb-0 mb-16 z-2">
              <h1 className="text-white text-body_medium tracking-widest font-medium">{hero_seo_heading}</h1>
              <h2 className="text-white text-h2 lg:text-h1 mb-8 lg:mb-16">{hero_heading}</h2>
              <p className="text-neutral_300">{hero_body_text}</p>
            </FourEightFive>
            <FourEightFive c="z-2">
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
