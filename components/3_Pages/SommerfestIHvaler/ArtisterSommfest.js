import {
  FourEightTwelve,
  SubGrid24,
  Grid,
  Layout,
  FourEightEight,
  TwoFourEight,
  TwoFourFour,
  TwoTwoFour,
} from "../../1_Small/Base";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { options, options_sommerfest } from "../../1_Small/ContentfulOptions";
import { ImageContentful } from "../../1_Small/ImageContentful";

export const ArtisterSommfest = ({ artist_info, artist_images, artist_names }) => {
  const artist_array = artist_names.split(",");

  const MapHighlightedArtists = () => {
    let teller = -1;
    return artist_images.items.map(({ url, description, width, height }) => {
      teller++;
      return (
        <TwoTwoFour key={url} c="mb-16 lg:mb-32">
          <div className="relative w-100 pb-100 relative">
            <ImageContentful src={url} alt={description} layout="fill" className="object-cover" />
          </div>
          <h3 className="text-white mt-8 relative">{artist_array[teller]}</h3>
        </TwoTwoFour>
      );
    });
  };

  return (
    <section id="artister" className="bg-sommerfest_primary  py-56 md:py-96 lg:py-160">
      <Layout>
        <Grid>
          <FourEightEight c="lg:col-start-3">
            <SubGrid24 c="grid-cols-2 md:grid-cols-4 lg:grid-cols-8 text-white">
              <TwoFourEight>
                <h2 className="text-white">Årets artister</h2>
                {documentToReactComponents(artist_info, options_sommerfest)}
              </TwoFourEight>
              <MapHighlightedArtists />
            </SubGrid24>
          </FourEightEight>
        </Grid>
      </Layout>
    </section>
  );
};
