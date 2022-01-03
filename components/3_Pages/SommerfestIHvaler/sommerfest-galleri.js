import { FourFourSix, Grid, Layout } from "../../1_Small/Base";
import { CategoryPageImageGallery } from "../../1_Small/CategoryPageImageGallery";
import { ImageContentful } from "../../1_Small/ImageContentful";

export const SommerfestGalleri = ({ gallery }) => {
  const MapGallery = () => {
    return gallery.items.map(({ description, height, width, url }, id) => {
      return (
        <FourFourSix key={id} c="mb-24 grid justify-items-stretch">
          <ImageContentful
            src={url}
            alt={description}
            layout="responsive"
            width={width}
            height={height}
            className="object-cover "
          />
        </FourFourSix>
      );
    });
  };

  return (
    <section id="bildegalleri" className="bg-sommerfest_primary z-1">
      <Layout>
        <h2 className="mb-24 md:mb-32 text-white z-1">Bildegalleri</h2>
        <Grid c="">
          <MapGallery />
        </Grid>
      </Layout>
    </section>
  );
};
