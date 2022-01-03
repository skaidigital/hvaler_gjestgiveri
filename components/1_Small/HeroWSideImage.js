import Image from "next/image";
import {
  FourEightEight,
  FourEightFive,
  FourEightSeven,
  FourEightSix,
  Grid,
  Layout,
} from "./Base";
import { ImageContentful } from "./ImageContentful";

export const HeroWSideImage = ({
  imageSource,
  imageAlt,
  SEOHeading,
  heading,
  children,
  c,
}) => {
  return (
    <section
      id="hero"
      className={`z-1 mx-auto mt-32 lg:my-16 lg:h-480 relative  lg:flex lg:items-center`}
    >
      <Layout>
        <Grid>
          <FourEightFive
            c={`${c} relative lg:pr-24 flex flex-col justify-center mb-24`}
          >
            <h1 className="text-body_small uppercase font-medium tracking-widest text-neutral_700">
              {SEOHeading}
            </h1>
            <h2 className="text-h2 lg:text-h1 text-neutral-700">{heading}</h2>
            <p className="text-white">{children}</p>
          </FourEightFive>
          <FourEightSeven c="hidden relative lg:block w-100 h-320">
            <ImageContentful
              src={imageSource}
              alt={imageAlt}
              layout="fill"
              className="object-cover object-right"
              priority
            />
          </FourEightSeven>
        </Grid>
      </Layout>

      {/* <Layout c="hidden md:block"> */}
      <Grid c="lg:hidden">
        <FourEightEight c="relative w-100 h-320 ">
          <ImageContentful
            src={imageSource}
            alt={imageAlt}
            layout="fill"
            className="object-cover object-right"
            priority
          />
        </FourEightEight>
      </Grid>
      {/* </Layout> */}
    </section>
  );
};
