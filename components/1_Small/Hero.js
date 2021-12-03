import Image from "next/image";
import { FourEightEight, FourEightSix, Grid, Layout } from "./Base";

export const Hero = ({ imageSource, imageAlt, SEOHeading, heading, children }) => {
  return (
    <section id="hero" className="z-1 mb-56 md:mb-96 max-w-1200 mx-auto lg:h-480 relative">
      <Image src={imageSource} alt={imageAlt} layout="fill" className="object-cover object-top dimmer-50" priority />
      <Layout>
        <Grid>
          <FourEightEight>
            <h1 className="text-body_small uppercase font-medium tracking-widest">{SEOHeading}</h1>
            <h2>{heading}</h2>
            <p>{children}</p>
          </FourEightEight>
        </Grid>
      </Layout>
    </section>
  );
};
