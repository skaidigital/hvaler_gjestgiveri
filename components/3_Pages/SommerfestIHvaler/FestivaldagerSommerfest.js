import { Layout, Grid, FourEightEight } from "../../1_Small/Base";
import Link from "next/link";
import { PrimaryButtonHref } from "../../1_Small/Buttons";

export const FestivaldagerSommerfest = () => {
  const SingleDate = ({ date }) => {
    return (
      <div className="flex flex-col">
        <h3 className="text-white">{date}</h3>
        <div className="flex justify-between">
          <div>
            <span className="text-neutral_300">artist1</span>
            <span className="text-neutral_300">artist1</span>
          </div>
          <span className="text-neutral_300">På plenen 19:00</span>
        </div>
      </div>
    );
  };

  return (
    <section id="festivaldager" className="flex flex-col text-white bg-sommerfest_primary">
      <Layout>
        <Grid>
          <FourEightEight c="lg:col-start-3">
            <h2 className="text-white mb-8 md:mb-16">Festivaldagene</h2>
            <SingleDate date="7. juli" />
            <Link href="">
              <a className="bg-sommerfest_CTA text-white flex justify-center py-16 font-semibold mb-56 md:mb-96 lg:mb-160">
                Kjøp billetter til årets største fest
              </a>
            </Link>
          </FourEightEight>
        </Grid>
      </Layout>
    </section>
  );
};
