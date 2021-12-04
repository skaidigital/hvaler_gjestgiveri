import { FourFourFour, Grid, Layout } from "./Base";
import { HeadingGroup } from "./HeadingGroup";
import { ImageContentful } from "./ImageContentful";

export const CategoryPageImageGallery = ({
  SEOHeading,
  heading,
  src1,
  alt1,
  src2,
  alt2,
  width2,
  height2,
  src3,
  alt3,
  src4,
  alt4,
  width4,
  height4,
}) => {
  return (
    <Layout>
      <HeadingGroup c="mt-24 md:mt-56 lg:mt-96" SEOHeading={SEOHeading} heading={heading} />
      <Grid c="gap-y-24 mt-24 lg:mt-32 mb-56 lg:mb-96">
        <FourFourFour c="relative row-span-2 w-100 pb-100">
          <ImageContentful src={src1} alt={alt1} layout="fill" className="object-cover" />
        </FourFourFour>
        <FourFourFour c="relative">
          <ImageContentful
            src={src2}
            alt={alt2}
            layout="responsive"
            width={width2}
            height={height2}
            className="object-cover"
          />
        </FourFourFour>
        <FourFourFour c="relative md:row-span-2 w-100 pb-100">
          <ImageContentful src={src3} alt={alt3} layout="fill" className="object-cover" />
        </FourFourFour>
        <FourFourFour c="relative">
          <ImageContentful
            src={src4}
            alt={alt4}
            layout="responsive"
            width={width4}
            height={height4}
            className="object-cover"
          />
        </FourFourFour>
      </Grid>
    </Layout>
  );
};
