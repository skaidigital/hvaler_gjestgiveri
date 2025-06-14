import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Link from "next/link";
import { FourEightFive, Grid, Layout } from "../../1_Small/Base";
import { options_sommerfest } from "../../1_Small/ContentfulOptions";
import { ImageContentful } from "../../1_Small/ImageContentful";

export const InfoSommerfest = ({
  info_heading,
  info_content,
  info_image_src,
  info_image_alt,
  info_image_width,
  info_image_height,
}) => {
  return (
    <section
      id="konsertpakker"
      className="bg-sommerfest_secondary  py-56 md:py-96 lg:py-160 z-1"
    >
      <Layout>
        <Grid>
          <FourEightFive c="lg:col-start-2 lg:pr-24 grid justify-items-stretch  z-2">
            <ImageContentful
              src={info_image_src}
              alt={info_image_alt}
              width={info_image_width}
              height={info_image_height}
              layout="responsive"
              className="object-cover"
            />
          </FourEightFive>
          <FourEightFive c="mt-24 lg:mt-0 z-2">
            <h2 className="text-white text-h3 lg:text-h2 mb-8 lg:mb-16">
              {info_heading}
            </h2>
            {documentToReactComponents(info_content, options_sommerfest)}
            <Link
              href="/kontakt-oss"
              className="text-white text-center bg-sommerfest_CTA font-semibold p-16 block"
            >
              Kjøp billetter til Sommerfest i Hvaler
            </Link>
          </FourEightFive>
        </Grid>
      </Layout>
    </section>
  );
};
