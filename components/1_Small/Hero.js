import Image from "next/image";
import { FourEightEight, FourEightSix, Grid, Layout } from "./Base";

export const Hero = ({ imageSource, imageAlt, SEOHeading, heading, children, loader }) => {
  return (
    <section id="hero" className="z-1 mx-auto lg:h-480 relative flex items-center">
      <Image
        src={imageSource}
        alt={imageAlt}
        layout="fill"
        className="object-cover object-top dimmer-50"
        priority
        loader={loader}
      />
      <Layout>
        <Grid>
          <FourEightSix c="relative lg:pr-24">
            <h1 className="text-body_small uppercase font-medium tracking-widest text-white">{SEOHeading}</h1>
            <h2 className="text-h2 lg:text-h1 text-white">{heading}</h2>
            <p className="text-white">{children}</p>
          </FourEightSix>
        </Grid>
      </Layout>
    </section>
  );
};
