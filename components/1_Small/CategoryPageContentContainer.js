import { FourSixSix, Grid, Layout } from "./Base";

export const CategoryPageContentContainer = ({ children }) => {
  return (
    <section id="main-content">
      <Layout>
        <Grid>
          <FourSixSix c="md:col-start-2 lg:col-start-4">{children}</FourSixSix>
        </Grid>
      </Layout>
    </section>
  );
};
