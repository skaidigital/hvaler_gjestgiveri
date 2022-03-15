import { Layout, Grid, FourEightEight } from "../../1_Small/Base";
import Link from "next/link";
import { PrimaryButtonHref } from "../../1_Small/Buttons";
import { formatDate } from "../../1_Small/formatDate";

export const FestivaldagerSommerfest = ({ dates }) => {
  const SingleDate = ({
    date,
    artists1,
    location1,
    time1,
    artists2,
    location2,
    time2,
    artists3,
    location3,
    time3,
  }) => {
    return (
      <div className="flex flex-col mb-16">
        <h3 className="text-white">{date}</h3>
        <div className="flex justify-between">
          <div>
            {artists1.map((artist, id) => {
              return (
                <span key={id} className="text-neutral_300 mr-8">
                  {artist}
                </span>
              );
            })}
          </div>
          <div className="">
            <span className="text-neutral_300 mr-16">{location1}</span>
            <span className="text-neutral_300">{time1}</span>
          </div>
        </div>

        {artists2 && (
          <div className="flex justify-between">
            <div>
              {artists2.map((artist, id) => {
                return (
                  <span key={id} className="text-neutral_300 mr-8">
                    {artist}
                  </span>
                );
              })}
            </div>
            <div className="">
              <span className="text-neutral_300 mr-16">{location2}</span>
              <span className="text-neutral_300">{time2}</span>
            </div>
          </div>
        )}

        {artists3 && (
          <div className="flex justify-between">
            <div>
              {artists2.map((artist, id) => {
                return (
                  <span key={id} className="text-neutral_300 mr-8">
                    {artist}
                  </span>
                );
              })}
            </div>
            <div className="">
              <span className="text-neutral_300 mr-16">{location2}</span>
              <span className="text-neutral_300">{time2}</span>
            </div>
          </div>
        )}
      </div>
    );
  };

  const MapDates = () => {
    return dates.map(
      (
        {
          artister1,
          dato,
          hvor1,
          tidspunkt1,
          artister2,
          hvor2,
          tidspunkt2,
          artister3,
          hvor3,
          tidspunkt3,
        },
        id
      ) => {
        const formatted_date = formatDate(dato);
        const artists1 = artister1.split(",");
        const artists2 = artister2 ? artister2.split(",") : "";
        const artists3 = artister3 ? artister3.split(",") : "";

        return (
          <SingleDate
            key={id}
            date={formatted_date}
            artists1={artists1}
            location1={hvor1}
            time1={tidspunkt1}
            artists2={artists2}
            location2={hvor2}
            time2={tidspunkt2}
            artists3={artists3}
            location3={hvor3}
            time3={tidspunkt3}
          />
        );
      }
    );
  };

  return (
    <section
      id="festivaldager"
      className="flex flex-col text-white bg-sommerfest_primary z-1"
    >
      <Layout>
        <Grid>
          <FourEightEight c="lg:col-start-3 z-1">
            <h2 className="text-white mb-8 md:mb-16">Festivaldagene</h2>
            <MapDates />
            <Link href="https://www.ticketmaster.no/search?keyword=Hvaler%20Gjestgiveri">
              <a className="bg-sommerfest_CTA text-white flex justify-center py-16 font-semibold mb-56 md:mb-96 lg:mb-160 mt-24">
                Kjøp billetter til årets største fest
              </a>
            </Link>
          </FourEightEight>
        </Grid>
      </Layout>
    </section>
  );
};
